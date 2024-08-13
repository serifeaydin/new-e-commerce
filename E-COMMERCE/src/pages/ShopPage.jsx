import React, { useState } from "react";

import Footer from "../layout/Footer";


import Client from "../components/Client";


import ShopProducts from "../components/ShopProducts";

import ShopNavbar from "../components/ShopNavbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faGrip, faListUl } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Shop1 from "../assets/shop1.jpg";
import Shop2 from "../assets/shop2.jpg";
import Shop3 from "../assets/shop3.jpg";
import Shop4 from "../assets/shop4.jpg";
import Shop5 from "../assets/shop5.jpg";


function ShopPage(){

  const [sortOption, setSortOption] = useState('popularity');
    const [viewMode, setViewMode] = useState('grid');

    const handleSortChange = (event) => {
      setSortOption(event.target.value);
  };


    return(

       

        <div>

           <ShopNavbar/>
           <section className="md:flex justify-between items-center ">
    <div className="hidden md:flex text-2xl font-bold pl-8">Shop</div>
    <div className="md:hidden flex text-2xl font-bold justify-center mt-4">Shop</div>
    
    <div className="hidden md:flex items-center px-8">
        <Link to="/" className="mx-4">Home</Link>
        <FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD] mt-1"/>
        <p className="text-[#BDBDBD] mx-4">Shop</p>
    </div>

    <div className="md:hidden flex items-center p-4 justify-center text-sm mb-4 mt-4">
        <Link to="/" className="mx-4">Home</Link>
        <FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD] mt-1"/>
        <p className="text-[#BDBDBD] mx-4">Shop</p>
    </div>
</section>

<div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-8">
        <div className="relative">
          <img src={Shop1} alt="CLOTHS" className="w-full h-60 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h2 className="text-white text-xl font-bold">CLOTHS</h2>
            <p className="text-white">5 items</p>
          </div>
        </div>
        <div className="relative">
          <img src={Shop2} alt="SHOES/BAGS" className="w-full h-60 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h2 className="text-white text-xl font-bold">SHOES/BAGS</h2>
            <p className="text-white">5 items</p>
          </div>
        </div>
        <div className="relative">
          <img src={Shop3} alt="HOME/DESIGN" className="w-full h-60 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h2 className="text-white text-xl font-bold">HOME/DESIGN</h2>
            <p className="text-white">5 items</p>
          </div>
        </div>
        <div className="relative">
          <img src={Shop4} alt="COSMETIC" className="w-full h-60 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h2 className="text-white text-xl font-bold">COSMETIC</h2>
            <p className="text-white">5 items</p>
          </div>
        </div>
        <div className="relative">
          <img src={Shop5} alt="ELECTRONIC" className="w-full h-60 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h2 className="text-white text-xl font-bold">ELECTRONIC</h2>
            <p className="text-white">5 items</p>
          </div>
        </div>
      </div> 
     
     
  
  <div className="flex justify-between items-center px-8 my-4">
    <p className="hidden md:flex ">Showing all 12 results</p>
  <div className="flex items-center space-x-4">
                    <label>Views:</label>
                    <div className="flex">
                        <button onClick={() => setViewMode('grid')} className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : ''}`}>
                            <FontAwesomeIcon icon={faGrip} />
                        </button>
                        <button onClick={() => setViewMode('list')} className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : ''}`}>
                            <FontAwesomeIcon icon={faListUl} />
                        </button>
                    </div>
                </div>
  <section className="md:flex justify-between items-center ">
                {/* Sort Options */}
                <div className="md:flex items-center px-8">
                    <label className="mr-2">Sort by:</label>
                    <select value={sortOption} onChange={handleSortChange} className="p-2 border border-gray-300 rounded">
                        <option value="popularity">Popularity</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                    </select>
                </div>
            </section>
                
            </div>
         
            <ShopProducts  viewMode={viewMode} />
         
         
          <Client/>
           <Footer/>
           
        

        </div>


    )
}

export default ShopPage;