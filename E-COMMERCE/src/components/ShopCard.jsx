import React from "react";
import Image1 from "../assets/resim1.jpg";
import Image2 from "../assets/resim2.jpg";
import Image3 from "../assets/resim3.jpg";

function ShopCard(){

    return(
        <section>
<div className="flex">

     <div className="relative inline-block">
      <img src={Image1} alt="Product" className="w-full h-auto" />
      <div className="absolute text-start w-2/3 h-1/2 bottom-0 bg-[#2D8BC0] bg-opacity-80 text-white p-5">
        <h2 className="text-2xl font-bold text-start mt-4">Top Product Of <br/>the Week</h2>
        <button className="mt-2 px-4 py-2 text-xl  border-2 border-white rounded ">
          EXPLORE ITEMS
        </button>
      </div>
 </div>
   
    <div>
        <div className="relative inline-block">
    <img src={Image2} alt="Product" className="w-full h-auto"/>
    <div className="absolute text-start w-2/3 h-1/2 bottom-0 bg-[#2D8BC0] bg-opacity-80 text-white p-5">
        <h2 className="text-2xl font-bold text-start mt-4">Top Product Of <br/>the Week</h2>
        <button className="mt-2 px-4 py-2 text-xl  border-2 border-white rounded ">
          EXPLORE ITEMS
        </button>
      </div>
    </div>
   
    <img src={Image2}/>
    </div>
</div>
</section>
    )
}
export default ShopCard;