import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const ProductCard = ({item}) => {
   const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate();

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const percentage =
    ((item?.regularPrice - item?.discountedPrice) / item?.regularPrice) * 100;

  const handleProduct = () => {
    navigation(`/product/${item?._id}`);
    setSearchText && setSearchText("");
  };
  return (
    <div className= "border border-transparent rounded-lg p-1 overflow-hidden hover:border-black duration-200 cursor-pointer">
      <div className='w-full h-60 relative p-2 group'>
        <span className='bg-black text-sky-text absolute left-0 right-0 w-16 text-xs text-center py-1 rounded-md font-semibold inline-block z-10'>
          save {percentage.toFixed(0)}%
        </span>
        <img src={item?.images[0]} alt="productImage" 
        className='w-full h-full rounded-md object-cover group-hover:scale-110 duration-300' />
      </div>
    </div>

  )
}

export default ProductCard