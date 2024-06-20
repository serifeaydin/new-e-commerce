import React from "react";

import Footer from "../layout/Footer";


import Client from "../components/Client";


import ShopProducts from "../components/ShopProducts";

import ShopNavbar from "../components/ShopNavbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ShopPage(){
   
    return(

       

        <div>

           <ShopNavbar/>
           <section className="md:flex justify-between items-center">
    <div className="hidden md:flex text-2xl font-bold pl-8">Shop</div>
    <div className="md:hidden flex text-2xl font-bold justify-center mt-4">Shop</div>
    
    <div className="hidden md:flex items-center">
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
         
           <ShopProducts/>
         
         
          <Client/>
           <Footer/>
           
        

        </div>


    )
}

export default ShopPage;