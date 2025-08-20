import React, { useEffect, useState } from "react";
import { config } from "../../config";
import { getData } from "../lib";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
import CustomRightArrow from "./CustomRightArrow"; // Importing the custom right arrow component
import CustomLeftArrow from "./CustomLeftArrow"; // Importing the custom left arrow component

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const BannerCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fixed: Using baseURL instead of baseUrl to match your config
      const endpoint = `${config?.baseURL}/categories`;
      try {
        const data = await getData(endpoint);
        console.log("Categories fetched:", data); // Debug log
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        
        
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        transitionDuration={1000}
        className="flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative"
        showDots={false}
        arrows={true}
        swipeable={true}
        draggable={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      >
        {categories && categories.length > 0 ? (
          categories.map((item) => (
            <Link
              key={item?._id}
              to={`/category/${item?._base}`} // Fixed: Added leading slash
              className="flex items-center gap-x-2 p-3 border border-gray-100 mr-2 rounded-md hover:border-blue-500 hover:shadow-lg transition-all duration-200 bg-white"
            >
              <img
                src={item?.image}
                alt={`${item?.name} category`} // Better alt text
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-sm font-semibold text-gray-800">{item?.name}</p>
            </Link>
          ))
        ) : (
          // Loading state
          <div className="flex items-center justify-center w-full p-8">
            <p className="text-gray-500">Loading categories...</p>
          </div>
        )}
      </Carousel>
    </div>
  );
};

export default BannerCategories;