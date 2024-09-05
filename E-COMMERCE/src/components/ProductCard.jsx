import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar } from "@fortawesome/free-regular-svg-icons";
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Like from "../assets/like.png";
import Eye from "../assets/eye.png";
import Basket from "../assets/basket.png";
import { Link } from 'react-router-dom';

const ProductCard = ({ id,image, title, description, price, salePrice, rating, sales }) => (
  <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg px-2">
    <div className="relative">
      <img className="w-full h-64 object-cover" src={image} alt="Graphic Design" />
      <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 font-semibold">Sale</span>
      <div className='absolute top-3/4 left-1/4 flex space-x-2'>
        <button className="bg-white p-1 rounded-full shadow-md"><img src={Like} alt="Like" /></button>
        <button className="bg-white p-1 rounded-full shadow-md"><img src={Basket} alt="Basket" /></button>
        <button className="bg-white p-1 rounded-full shadow-md"><img src={Eye} alt="Eye" /></button>
      </div>
    </div>
    <div className="p-4">
      <div className='flex justify-between'>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="bg-slate-800 rounded-xl flex items-center">
        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", fontSize: '16px', borderRadius: '50%', padding: '5px'}} />
        <span className="text-white pr-2">{rating}</span>
      </div>
      </div>
      
      <p className="text-gray-700 text-sm mt-2">{description}</p>
      <div className="mt-4">
        <span className="text-gray-500 line-through">${price}</span>
        <span className="text-[#23856D] text-xl font-semibold ml-2">${salePrice}</span>
      </div>
      
     
      <Link to={`/product/${id}`} className=" text-[#23A6F0]">
      <button className="mt-4 text-[#23A6F0] border border-[#23A6F0] px-4 py-2 rounded-full">Learn More
      <FontAwesomeIcon icon={faChevronRight} className="text-[#23A6F0] px-2"/>
      </button>
              </Link>
    
    </div>
  </div>
);

export default ProductCard;