import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
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
        <Link to={"/"} className="flex items-center gap-x-2">
          <img src={logo} alt="logo" className="w-44" />
        </Link>
        
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
            <Link to={"/profile"} className="relative block">
            <FiUser className="hover:text-sky-text duration-200 cursor-pointer" />
            </Link>
            <Link to={"/favourite"} className="relative block">
              <FiStar className="hover:text-sky-text duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-red-text text-white-text absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4"> 0
              {/* {favoriteProduct?.length > 0 ? favoriteProduct?.length : "0"} */}
            </span>
            </Link>
            <Link to={"/cart"} className="relative block">
              <FiShoppingBag className="hover:text-sky-text duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-red-text text-white-text absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4"> 0
              {/* {cartProduct?.length > 0 ? cartProduct?.length : "0"} */}
            </span>
            </Link>
           </div>
      
      </div>
          <div className="w-full bg-dark-text text-white-text">
            <Container className="py-2 max-w-4xl flex items-center gap-5 justify-between">
              <p className="flex items-center gap-1">Select Category <FaChevronDown/></p>
              {
                bottomNavigation.map(({title, link}) => (
                  <Link to={link} key={title} className="uppercase hidden md:inline-flex text-sm font-semibold text-white-text/90 hover:text-white-text duration-200 relative overflow-hidden group cursor-pointer">
                    {title}
                    <span className="inline-flex w-full h-[1px] bg-white-text absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300 " />
                  </Link>
              ))}
            </Container>
          </div>

    </div>
  );
};

export default Header;