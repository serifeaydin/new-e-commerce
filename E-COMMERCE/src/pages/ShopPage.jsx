import React from "react";

import Footer from "../layout/Footer";

import DarkNavbar from "../components/DarkNavbar";
import LightNavbar from "../components/LightNavbar";
import Client from "../components/Client";

import Product from "../components/Product";
import ProductCards from "../layout/ProductCards";
import Description from "../components/Description";

function HomePage(){
   
    return(

       

        <div>
           <DarkNavbar/>
           <LightNavbar/>
           <Product/>
         
          <Description/>
           <ProductCards/>
         
         
          <Client/>
           <Footer/>
           
        

        </div>


    )
}

export default HomePage;