import React from "react";
import Image1 from "../assets/resim1.jpg";
import Image2 from "../assets/resim2.jpg";
import Image3 from "../assets/resim3.jpg";
import Image4 from "../assets/kadin1.jpg";
import Image5 from "../assets/kadin2.jpg";

function ShopCard(){

    return(
      
<div className="md:flex px-8">
<div className="object-center  md:w-full md:h-full">
     <div className="relative inline-block">
      <img src={Image1} className="w-full h-screen"alt="Product"  />
      <div className="absolute text-start md:w-2/3 md:h-1/2 w-full h-1/2 bottom-0 bg-[#2D8BC0] bg-opacity-80 text-white p-8">
        <h2 className="text-2xl font-bold text-start mt-12 ">Top Product Of <br/>the Week</h2>
        <button className="mt-2 px-4 py-2 text-xl  border-2 border-white rounded ">
          EXPLORE ITEMS
        </button>
      </div>
     </div>
     </div>

  <div className="object-center  md:w-full md:h-full">
        <div className="relative inline-block">
    <img src={Image2} alt="Product" className="  h-72 lg:block hidden md:w-full md:h-auto"/>
    <img src={Image4} alt="Product" className="md:hidden  w-full h-screen md:w-full md:h-auto"/>
    <div className="absolute text-start w-full h-1/2 md:w-2/3 md:h-1/2 bottom-0 bg-[#2D8BC0] bg-opacity-80 text-white p-5">
        <h2 className="text-2xl font-bold text-start md:mt-0 mt-16">Top Product Of the Week</h2>
        <button className="mt-4 px-4 py-2 text-xl  border-2 border-white rounded ">
          EXPLORE ITEMS
        </button>
      </div>
    </div>
    <div className="relative inline-block mt-4">
    <img src={Image3} alt="Product" className="w-full lg:block hidden h-auto"/>
    <img src={Image5} alt="Product" className="md:hidden  w-full h-screen md:w-full md:h-auto"/>
    <div className="absolute text-start w-full h-1/2 md:w-2/3 md:h-3/5 bottom-0 bg-[#2D8BC0] bg-opacity-80 text-white p-3 ">
        <h2 className="text-2xl font-bold text-start  md:mt-4 mt-16 ">Top Product Of the Week</h2>
        <button className="mt-4 px-4 py-2 text-xl border-2 border-white rounded">
          EXPLORE ITEMS
        </button>
      </div>
    </div>
    </div>


    
    </div>


    )
}
export default ShopCard; 