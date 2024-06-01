import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartBar, faClock} from "@fortawesome/free-regular-svg-icons";
import { faChartArea } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({ image, department, title, description, price, salePrice, lessons, hours, rating, sales }) => (
  <div className="max-w-max bg-white shadow-lg rounded-lg overflow-hidden mx-4 flex">
    <div className="relative w-1/2 ">
      <img className=" h-full object-cover" src={image} alt="Graphic Design" />
      <span className="absolute top-2 left-2 bg-red-500 text-white text-lg px-2 font-semibold ">Sale</span>
    </div>
    <div className="pt-8 w-1/2 text-start">
      <h3 className="text-sm text-[#23A6F0]">{department}</h3>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-700 text-sm mt-2">{description}</p>
      <div className="mt-4">
        <span className="text-gray-500 line-through">${price}</span>
        <span className="text-[#23856D] text-xl font-semibold ml-2">${salePrice}</span>
      </div>
      <div className="mt-4 flex items-center">
        <span className="text-yellow-500">{Array(Math.round(rating)).fill('★').join('')}</span>
        <span className="text-gray-600 ml-2">({rating})</span>
      </div>
      <div className="mt-2 text-gray-600 text-sm flex">
      <FontAwesomeIcon icon={faClock} className='text-[#23A6F0]' />
      <p>{hours}hrs </p>
      <FontAwesomeIcon icon={faChartBar} className='text-[#E77C40]' />
        <p> {lessons} Lessons </p>
      <FontAwesomeIcon icon={faChartArea} className='text-[#23856D]' />
       <p> {sales} Progress</p>
      </div>
      <button className="mt-4 text-[#23A6F0] px-4 py-2  ">Learn More</button>
    </div>
  </div>
);
export default BlogCard;