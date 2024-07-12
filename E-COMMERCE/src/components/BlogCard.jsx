import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faChartArea } from '@fortawesome/free-solid-svg-icons';

import Like from "../assets/like.png";
import Eye from "../assets/eye.png";
import Basket from "../assets/basket.png";




const BlogCard = ({ image, department, title, description, price, salePrice, lessons, hours, rating, sales }) => (
  <div className="md:w-max bg-white  overflow-hidden flex flex-col md:flex-row">
    <div className="relative md:w-1/2 w-full">
      <img className="w-72 h-48 md:h-full object-cover pl-16" src={image} alt="Graphic Design" />
      <span className="absolute top-2 left-16 bg-red-500 text-white text-lg px-2 font-semibold">Sale</span>
    <div className='hidden md:flex absolute top-64 left-28 '>
      <button><img src={Like}/></button>
      <button><img src={Basket}/></button>
      <button><img src={Eye}/></button>
    </div>
    </div>
    <div className="p-4 md:pt-8 md:pl-4 md:w-1/2 w-full">
      <h3 className="text-sm text-start  text-[#23A6F0]">{department}</h3>
      <h2 className="text-lg  text-start font-semibold">{title}</h2>
      <p className="text-gray-700 text-sm text-start mt-2">{description}</p>
      <div className="mt-4 text-start">
        <span className="text-gray-500  line-through">${price}</span>
        <span className="text-[#23856D] text-xl font-semibold ml-2">${salePrice}</span>
      </div>
      <div className="mt-4 flex items-center">
        <span className="text-yellow-500">{Array(Math.round(rating)).fill('★').join('')}</span>
        <span className="text-gray-600 ml-2">({rating})</span>
      </div>
      <div className="mt-2 text-gray-600 text-sm flex items-center space-x-2">
        <FontAwesomeIcon icon={faClock} className='text-[#23A6F0]' />
        <p>{hours}hrs</p>
        <FontAwesomeIcon icon={faChartBar} className='text-[#E77C40]' />
        <p>{lessons} Lessons</p>
        <FontAwesomeIcon icon={faChartArea} className='text-[#23856D]' />
        <p>{sales} Progress</p>
      </div>
      <button className="mt-4 text-[#23A6F0] px-4 py-2  ">Learn More</button>
    </div>
  </div>
);

export default BlogCard;