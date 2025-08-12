import React from 'react'
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { FaArrowLeft } from 'react-icons/fa';


const LinkButton = ({ showButton, link, className }) => {
    const newClassName = twMerge("bg-dark-text/80 hover:bg-dark-text text-white-text py-2.5 px-6 rounded-full flex items-center gap-2 duration-200",
    className
  );
  return (
    <Link to={link ? link : "/products"} className={newClassName}>
      {showButton && <FaArrowLeft />} Start Shopping
    </Link>
  );
};

export default LinkButton;