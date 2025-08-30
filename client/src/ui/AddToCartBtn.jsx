import React from 'react'
import { twMerge } from 'tailwind-merge';

const AddToCartBtn = ({className, title}) => {
  const newClassName = twMerge('bg-gray-100 uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white-text hover:scale-105 duration-200 cursor-pointer', className);
  return (
    <button className={newClassName}>{title ? title : "Add to cart"}</button>
  )
}

export default AddToCartBtn