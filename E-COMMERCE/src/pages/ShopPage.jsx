import React from "react";

import Footer from "../layout/Footer";

import DarkNavbar from "../components/DarkNavbar";
import LightNavbar from "../components/LightNavbar";
import Client from "../components/Client";
import ProductCard from "../components/ProductCard";

function HomePage(){
   
    return(

       

        <div>
           <DarkNavbar/>
           <LightNavbar/>
         
          
           <ProductCard/>
         
         
          <Client/>
           <Footer/>
           
        

        </div>


    )
}

export default HomePage;