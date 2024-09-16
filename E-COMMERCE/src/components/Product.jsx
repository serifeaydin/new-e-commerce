import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChevronRight, faEye, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section>
      <div className='hidden md:flex p-4'>
        <Link to="/" className="mx-4">Home</Link>
        <FontAwesomeIcon icon={faChevronRight} className='text-[#BDBDBD] mt-1'/>
        <p className='text-[#BDBDBD] mx-4'>Shop</p>
      </div>
      
      <div className='md:hidden flex p-4 justify-center text-sm mb-4 mt-4'>
        <Link to="/" className="mx-4">Home</Link>
        <FontAwesomeIcon icon={faChevronRight} className='text-[#BDBDBD] mt-1'/>
        <p className='text-[#BDBDBD] mx-4'>Shop</p>
      </div>
     
      <div className="max-w-xxl mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <div {...settings}>
                {product.images.map((image, index) => (
                  <div key={index}>
                    <img src={image.url} alt={`Product image ${index + 1}`} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex justify-start md:hidden mt-4">
                {product.images.map((image, index) => (
                  <div key={index} className="w-1/4 p-2">
                    <img src={image.url} alt={`Thumbnail ${index + 1}`} className="w-full h-auto object-cover"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-2xl text-start font-bold mb-6">{product.name}</h2>
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-500">
                  <FontAwesomeIcon icon={fasStar} style={{ color: "#FFD43B" }} />
                  <FontAwesomeIcon icon={fasStar} style={{ color: "#FFD43B" }} />
                  <FontAwesomeIcon icon={fasStar} style={{ color: "#FFD43B" }} />
                  <FontAwesomeIcon icon={fasStar} style={{ color: "#FFD43B" }} />
                  <FontAwesomeIcon icon={farStar} style={{ color: "#FFD43B" }} />
                </div>
                <span className="ml-2 text-gray-600">(10 Reviews)</span>
              </div>
              <p className="text-2xl text-start font-semibold text-gray-900 mb-2">${product.price}</p>
              <div className='flex'><p className='text-start'>Availability:</p> <p className='text-[#23A6F0]'>In Stock</p></div>
              <p className="text-gray-600 mb-4 mt-8 text-start">
                {product.description}
              </p>
              <div className="flex items-center mb-16 mt-16">
                {['#2196F3', '#4CAF50', '#FFEB3B', '#FF5722'].map((color, index) => (
                  <div key={index} className="w-8 h-8 rounded-full mr-2" style={{ backgroundColor: color }}></div>
                ))}
              </div>
              <div className='flex'>
                <button className="bg-[#23A6F0] text-white px-6 mr-4 py-3 rounded">Select Options</button>
                <div className="flex items-center pr-4">
                  <button className="text-gray-500 mr-4">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button className="text-gray-500 mr-4">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                  <button className="text-gray-500">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex ml-2 mt-4">
            {product.images.map((image, index) => (
              <div key={index} className="w-1/12 p-2">
                <img src={image.url} alt={`Thumbnail ${index + 1}`} className="w-full h-auto object-cover"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
