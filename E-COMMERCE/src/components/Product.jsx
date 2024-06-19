import React from 'react';
import Picture1 from "../assets/Picture1.jpg";
import Picture2 from "../assets/Picture2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Product = () => {
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
        <p className='text-[#BDBDBD] mx-4 '>Shop</p>
     </div>
   
    <div className="max-w-xxl mx-auto p-4">
     
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <img src={Picture1} alt="Product" className="w-full h-full object-cover mb-4"/>
            <div className="flex justify-start md:hidden">
              <div className="w-1/4 p-2">
                <img src={Picture1} alt="Product" className="w-full h-full object-cover"/>
              </div>
              <div className="w-1/4 p-2">
                <img src={Picture2} alt="Product" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl text-start font-bold mb-6">Floating Phone</h2>
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
            <p className="text-2xl text-start font-semibold text-gray-900 mb-2">$1,139.33</p>
            <div className='flex'><p className='text-start'>Availability:</p> <p className='text-[#23A6F0]'>In Stock</p></div>
            <p className="text-gray-600 mb-4 mt-8 text-start">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
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
          <div className="w-1/12 p-2">
            <img src={Picture1} alt="Product" className="w-full h-full object-cover"/>
          </div>
          <div className="w-1/12 p-2">
            <img src={Picture2} alt="Product" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Product;