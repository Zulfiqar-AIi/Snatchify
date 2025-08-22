import React, { useEffect, useState } from "react";
import Container from "./Container";
import { config } from "../../config";
import { getData } from "../lib";
import Title from "./Title";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseURL}/categories`;
      try {
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <Title text="Popular categories" />
          <Link
            to={"/category/tvAndAudio"}
            className="font-medium relative group overflow-hidden"
          >
            View All Categories{" "}
            <span className="absolute bottom-0 left-0 w-full block h-px bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </Link>
        </div>
        <div className="w-full h-px bg-gray-200 mt-3" />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
        {categories.map((item) => (
          <div
            key={item?._id}
            className="w-full h-auto relative group "
            // overflow-hidden
          >
            <Link
              to={`/category/${item?._base}`}
              className="w-full h-auto"
            >
              <img
                src={item?.image}
                alt="categoryImage"
                className="w-full h-auto rounded-md group-hover:scale-110 transition-transform duration-300 mt-2"
              />
            </Link>
            <div className="absolute  w-full text-center">
              <p className="text-sm md:text-base font-bold pt-1">{item?.name}</p>
            </div>
          </div>
            
        ))}
      </div>
    </Container>
  );
};

export default Categories;