import { FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import { LuArrowLeftRight } from "react-icons/lu";
// import { store } from "../lib/store";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductCardSideNav = ({ product }) => {
  const { addToFavorite, favoriteProduct } = store();
  const [existingProduct, setExistingProduct] = useState(null);

  useEffect(() => {
    if (product) {
      const availableItem = favoriteProduct.find(
        (item) => item?._id === product?._id
      );
      setExistingProduct(availableItem || null);
    }
  }, [product, favoriteProduct]);

  const handleFavorite = () => {
    if (product) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct
            ? `${product?.name?.substring(0, 10)} removed successfully!`
            : `${product?.name?.substring(0, 10)} added successfully!`
        );
      });
    }
  };

  return (
    <div className="absolute right-2 top-2 flex flex-col gap-2 transform translate-x-14 group-hover:translate-x-0 transition-transform duration-300">
      {/* Favorite Button */}
      <button
        onClick={handleFavorite}
        className="w-11 h-11 flex items-center justify-center text-black text-lg rounded-full hover:bg-black hover:text-white transition-colors duration-200"
      >
        {existingProduct ? <FaStar /> : <FaRegStar />}
      </button>

      {/* Compare Button */}
      <button className="w-11 h-11 flex items-center justify-center text-black text-lg rounded-full hover:bg-black hover:text-white transition-colors duration-200">
        <LuArrowLeftRight />
      </button>

      {/* View Button */}
      <button className="w-11 h-11 flex items-center justify-center text-black text-lg rounded-full hover:bg-black hover:text-white transition-colors duration-200">
        <FaRegEye />
      </button>
    </div>
  );
};

export default ProductCardSideNav;
