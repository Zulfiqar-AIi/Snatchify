import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { FiShoppingBag, FiStar, FiUser } from "react-icons/fi";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import logo from "../../assets/logo.webp";
import Container from "./Container";
import { config } from "../../config";
import { getData } from "../lib";

const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);

  // Fallback categories (use the ones you provided earlier)
  // const fallbackCategories = [
  //   {
  //     _id: 1002,
  //     name: "TV Box",
  //     image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     _base: "tvBox",
  //   },
  //   {
  //     _id: 1003,
  //     name: "Power Tools",
  //     image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     _base: "powerTools",
  //   },
  //   {
  //     _id: 1004,
  //     name: "Headphones",
  //     image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     _base: "headphones",
  //   },
  //   {
  //     _id: 1005,
  //     name: "Cell Phones",
  //     image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     _base: "cellPhones",
  //   },
  //   {
  //     _id: 1006,
  //     name: "Smart Watches",
  //     image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //     _base: "smartWatches",
  //   },
  // ];

  useEffect(() => {
    const fetchData = async () => {
      const endPoint = `${config?.baseURL}/categories`;
      try {
        const data = await getData(endPoint);
        console.log("Fetched categories:", data); // Debug log
        if (data && Array.isArray(data) && data.length > 0) {
          setCategories(data);
        } else {
          // Use fallback categories if API doesn't return data
          setCategories(fallbackCategories);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        // Use fallback categories on error
        setCategories(fallbackCategories);
      }
    };
    fetchData();
  }, []);

  // Add debug logs
  console.log("Categories state:", categories);
  console.log("Config baseURL:", config?.baseURL);

  return (
    <div className="w-full bg-white md:sticky md:top-0 z-50">
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
            className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-gray-800 sm:text-sm px-4 py-2"
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
            <FiUser className="hover:text-sky-500 duration-200 cursor-pointer" />
          </Link>
          <Link to={"/favourite"} className="relative block">
            <FiStar className="hover:text-sky-500 duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-red-500 text-white absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0
            </span>
          </Link>
          <Link to={"/cart"} className="relative block">
            <FiShoppingBag className="hover:text-sky-500 duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-red-500 text-white absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0
            </span>
          </Link>
        </div>
      </div>
      
      <div className="w-full bg-gray-800 text-white">
        <Container className="py-2 max-w-4xl flex items-center gap-5 justify-between">
          <Menu as="div" className="relative inline-block text-left"> 
            <MenuButton className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 font-semibold text-gray-300 hover:text-white">
              Select Category <FaChevronDown className="text-base mt-1" />
            </MenuButton>
            
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute left-0 mt-2 w-64 origin-top-left divide-y divide-gray-600 rounded-lg bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  {categories && Array.isArray(categories) && categories.length > 0 ? (
                    categories.map((item) => (
                      <MenuItem key={item?._id}>
                        {({ active }) => (
                          <Link
                            to={`/category/${item?._base}`}
                            className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                          >
                            <img
                              src={item?.image}
                              alt="categoryImage"
                              className="w-6 h-6 rounded-md"
                            />
                            <span className="font-medium">{item?.name}</span>
                          </Link>
                        )}
                      </MenuItem>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-sm text-gray-400">
                      No categories available
                    </div>
                  )}
                </div>
              </MenuItems>
            </Transition>
          </Menu>
          
          {bottomNavigation.map(({ title, link }) => (
            <Link 
              to={link} 
              key={title} 
              className="uppercase hidden md:inline-flex text-sm font-semibold text-white/90 hover:text-white duration-200 relative overflow-hidden group cursor-pointer"
            >
              {title}
              <span className="inline-flex w-full h-[1px] bg-white absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Header;