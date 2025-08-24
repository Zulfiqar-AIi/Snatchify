import { useState } from "react";
import { MdOutlineStarOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import AddToCartBtn from "./AddToCartBtn";
import FormattedPrice from "./FormattedPrice";
import ProductCardSideNav from "./ProductCardSideNav";

const ProductCard = ({ item, setSearchText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const percentage =
    ((item?.regularPrice - item?.discountedPrice) / item?.regularPrice) * 100;

  const handleProduct = () => {
    navigate(`/product/${item?._id}`);
    if (setSearchText) setSearchText("");
  };

  return (
    <div className="border border-gray-200 rounded-lg p-1 overflow-hidden hover:border-gray-900 transition-colors duration-200 cursor-pointer">
      {/* Image Section */}
      <div className="w-full h-60 relative p-2 group">
        <span
          onClick={open}
          className="absolute left-2 top-2 bg-black text-white text-xs px-2 py-1 rounded-md font-semibold z-10"
        >
          Save {percentage.toFixed(0)}%
        </span>
        <img
          onClick={handleProduct}
          src={item?.images[0]}
          alt={item?.name || "product image"}
          className="w-full h-full rounded-md object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <ProductCardSideNav product={item} />
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-2 px-2 pb-2">
        <h3 className="text-xs uppercase font-semibold text-gray-500">
          {item?.overView}
        </h3>
        <h2 className="text-lg font-bold line-clamp-2">{item?.name}</h2>

        {/* Static Star Rating (could be dynamic later) */}
        <div className="flex items-center text-gray-400 text-base">
          {[...Array(5)].map((_, i) => (
            <MdOutlineStarOutline key={i} />
          ))}
        </div>

        <AddToCartBtn product={item} />
      </div>

      {/* Dialog / Modal */}
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-50 focus:outline-none" onClose={close}>
          <div className="fixed inset-0 w-screen overflow-y-auto bg-black/40 backdrop-blur-sm">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-gray-900 p-6 shadow-lg">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-semibold text-white"
                  >
                    Hurry up!
                  </DialogTitle>

                  <p className="mt-2 text-sm text-gray-300">
                    You are going to save{" "}
                    <span className="text-blue-400 font-bold">
                      <FormattedPrice
                        amount={item?.regularPrice - item?.discountedPrice}
                      />
                    </span>{" "}
                    from this product.
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Limited-time offer — don’t miss out!
                  </p>

                  <div className="mt-4">
                    <Button
                      onClick={close}
                      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProductCard;
