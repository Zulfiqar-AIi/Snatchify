import { useEffect, useState } from "react";
// import {
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
//   Transition,
// } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { FiShoppingBag, FiStar, FiUser } from "react-icons/fi";
import { IoClose, IoSearchOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
import logo  from "../../assets/logo.webp";
import Container from "./Container";
// import { config } from "../../config";
// import { getData } from "../lib";
// import { CategoryProps, ProductProps } from "../../type";
// import ProductCard from "./ProductCard";
// import { store } from "../lib/store";


const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];

const Header = () => {
  // Add missing state
  const [searchText, setSearchText] = useState("");

  return (
    <div className="w-full bg-whiteText md:sticky md:top-0 z-50">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="w-44" />
        </div>
        
        {/* SearchBar */}
        <div className="hidden md:inline-flex max-w-3xl w-full relative">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search products..."
            className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2"
          />
          {searchText ? (
            <IoClose
              onClick={() => setSearchText("")}
              className="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200"
            />
          ) : (
            <IoSearchOutline className="absolute top-2.5 right-4 text-xl" />
          )}
        </div>
        {/* Menubar */}
           <div className="flex items-center gap-x-6 text-2xl">
            <FiUser className="hover:text-sky-text duration-200 cursor-pointer" />
            <div className="relative block">
              <FiStar className="hover:text-sky-text duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              {/* {favoriteProduct?.length > 0 ? favoriteProduct?.length : "0"} */}
            </span>
            </div>
           </div>
      
      </div>
    </div>
  );
};

export default Header;