import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faChartArea, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const BlogCard = ({ imageUrl, category, title, description, date, comments }) => {
    console.log("Categories prop:", category); 
   
   

    return (
        <div className="bg-white overflow-hidden rounded-sm shadow-md  py-8 px-2">
            <div className="relative">
                <img src={imageUrl} alt={title} className="md:w-full md:h-80 object-cover" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 font-semibold">New</span>
            </div>
            <div className="p-4">
              
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">

    <button >{category}</button>
  
</div>
              
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                        <FontAwesomeIcon icon={faClock} className='text-[#23A6F0]' />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FontAwesomeIcon icon={faChartArea} className='text-[#23856D]' />
                        <span>{comments} comments</span>
                    </div>
                </div>
                <button className="font-semibold text-sm mt-4 inline-block text-blue-500 hover:text-blue-600">
                    Learn More
                    <FontAwesomeIcon icon={faChevronRight} className="text-[#23A6F0] px-2" />
                </button>
            </div>
        </div>
    );
};

export default BlogCard;