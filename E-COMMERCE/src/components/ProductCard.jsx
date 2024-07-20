import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faChartArea, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Like from "../assets/like.png";
import Eye from "../assets/eye.png";
import Basket from "../assets/basket.png";

const ProductCard = ({ image, department, title, description, price, salePrice, lessons, hours, rating, sales }) => (
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
      <h3 className="text-sm text-[#23A6F0]">{department}</h3>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-700 text-sm mt-2">"We focus on ergonomics and meeting 
you where you work. It's only a keystroke away."</p>
      <div className="mt-4">
        <span className="text-gray-500 line-through">${price}</span>
        <span className="text-[#23856D] text-xl font-semibold ml-2">${salePrice}</span>
      </div>
      <div className="mt-4 flex items-center">
        <span className="text-gray-600 ml-2">{rating}</span>
      </div>
      <div className="mt-2 text-gray-600 text-sm flex items-center space-x-2">
        <FontAwesomeIcon icon={faClock} className='text-[#23A6F0]' />
        <p>{hours} hrs</p>
        <FontAwesomeIcon icon={faChartBar} className='text-[#E77C40]' />
        <p>{lessons} Lessons</p>
        <FontAwesomeIcon icon={faChartArea} className='text-[#23856D]' />
        <p>{sales} Progress</p>
      </div>
      <button className="mt-4 text-[#23A6F0] border border-[#23A6F0] px-4 py-2 rounded-full">Learn More
      <FontAwesomeIcon icon={faChevronRight} className="text-[#23A6F0] px-2"/>
      </button>
    </div>
  </div>
);

export default ProductCard;