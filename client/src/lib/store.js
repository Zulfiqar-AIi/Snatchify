import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { db } from "./firebase";

// Custom storage implementation for better error handling
const customStorage = {
  getItem: (name) => {
    try {
      const item = localStorage.getItem(name);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading from localStorage: ${error}`);
      return null;
    }
  },
  setItem: (name, value) => {
    try {
      localStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage: ${error}`);
    }
  },
  removeItem: (name) => {
    try {
      localStorage.removeItem(name);
    } catch (error) {
      console.error(`Error removing from localStorage: ${error}`);
    }
  },
};

export const useStore = create()(
  persist(
    (set, get) => ({
      // User state
      currentUser: null,
      isLoading: true,

      // Cart state
      cartProduct: [],

      // Favorite state
      favoriteProduct: [],

      // User actions
      getUserInfo: async (uid) => {
        if (!uid) {
          set({ currentUser: null, isLoading: false });
          return;
        }

        try {
          const docRef = doc(db, "users", uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            set({ 
              currentUser: {
                firstName: userData.firstName || "",
                lastName: userData.lastName || "",
                password: userData.password || "",
                email: userData.email || "",
                avatar: userData.avatar || "",
                id: userData.id || uid,
                ...userData
              }, 
              isLoading: false 
            });
          } else {
            console.log("No user document found");
            set({ currentUser: null, isLoading: false });
          }
        } catch (error) {
          console.error("getUserInfo error:", error);
          set({ currentUser: null, isLoading: false });
        }
      },

      // Cart actions
      addToCart: async (product) => {
        return new Promise((resolve) => {
          set((state) => {
            const existingProductIndex = state.cartProduct.findIndex(
              (p) => p._id === product._id
            );

            if (existingProductIndex !== -1) {
              // Update existing product quantity
              const updatedCart = [...state.cartProduct];
              updatedCart[existingProductIndex] = {
                ...updatedCart[existingProductIndex],
                quantity: (updatedCart[existingProductIndex].quantity || 0) + 1
              };
              
              return { cartProduct: updatedCart };
            } else {
              // Add new product to cart
              return {
                cartProduct: [
                  ...state.cartProduct,
                  { ...product, quantity: 1 }
                ]
              };
            }
          });
          resolve();
        });
      },

      increaseQuantity: (productId) => {
        set((state) => ({
          cartProduct: state.cartProduct.map((p) =>
            p._id === productId
              ? { ...p, quantity: (p.quantity || 0) + 1 }
              : p
          )
        }));
      },

      decreaseQuantity: (productId) => {
        set((state) => {
          const existingProduct = state.cartProduct.find(
            (p) => p._id === productId
          );

          if (existingProduct && existingProduct.quantity > 1) {
            return {
              cartProduct: state.cartProduct.map((p) =>
                p._id === productId
                  ? { ...p, quantity: p.quantity - 1 }
                  : p
              )
            };
          } else if (existingProduct && existingProduct.quantity === 1) {
            // Remove item if quantity would become 0
            return {
              cartProduct: state.cartProduct.filter(
                (item) => item._id !== productId
              )
            };
          }
          
          return state;
        });
      },

      updateQuantity: (productId, newQuantity) => {
        if (newQuantity <= 0) {
          get().removeFromCart(productId);
          return;
        }

        set((state) => ({
          cartProduct: state.cartProduct.map((p) =>
            p._id === productId
              ? { ...p, quantity: newQuantity }
              : p
          )
        }));
      },

      removeFromCart: (productId) => {
        set((state) => ({
          cartProduct: state.cartProduct.filter(
            (item) => item._id !== productId
          )
        }));
      },

      clearCart: () => {
        set({ cartProduct: [] });
      },

      getCartTotal: () => {
        const { cartProduct } = get();
        return cartProduct.reduce((total, item) => {
          return total + (item.price || 0) * (item.quantity || 0);
        }, 0);
      },

      getCartItemsCount: () => {
        const { cartProduct } = get();
        return cartProduct.reduce((total, item) => {
          return total + (item.quantity || 0);
        }, 0);
      },

      // Favorite actions
      addToFavorite: async (product) => {
        return new Promise((resolve) => {
          set((state) => {
            const isFavorite = state.favoriteProduct.some(
              (item) => item._id === product._id
            );
            
            return {
              favoriteProduct: isFavorite
                ? state.favoriteProduct.filter(
                    (item) => item._id !== product._id
                  )
                : [...state.favoriteProduct, { ...product, quantity: 1 }]
            };
          });
          resolve();
        });
      },

      removeFromFavorite: (productId) => {
        set((state) => ({
          favoriteProduct: state.favoriteProduct.filter(
            (item) => item._id !== productId
          )
        }));
      },

      clearFavorites: () => {
        set({ favoriteProduct: [] });
      },

      isFavorite: (productId) => {
        const { favoriteProduct } = get();
        return favoriteProduct.some((item) => item._id === productId);
      },

      moveToCart: (productId) => {
        const { favoriteProduct, addToCart, removeFromFavorite } = get();
        const product = favoriteProduct.find((item) => item._id === productId);
        
        if (product) {
          addToCart(product);
          removeFromFavorite(productId);
        }
      },

      // Utility actions
      resetStore: () => {
        set({
          currentUser: null,
          isLoading: false,
          cartProduct: [],
          favoriteProduct: []
        });
      }
    }),
    {
      name: "supergear-storage",
      storage: createJSONStorage(() => customStorage),
      partialize: (state) => ({
        cartProduct: state.cartProduct,
        favoriteProduct: state.favoriteProduct,
        currentUser: state.currentUser
      })
    }
  )
);