import React from "react";

import Footer from "../layout/Footer";


import Client from "../components/Client";

import Product from "../components/Product";
import ProductCards from "../layout/ProductCards";
import Description from "../components/Description";
import ShopNavbar from "../components/ShopNavbar";

function HomePage(){
   
    return(

       

        <div>
           <ShopNavbar/>
           <Product/>
         
          <Description/>
           <ProductCards/>
         
         
          <Client/>
           <Footer/>
           
        

        </div>


    )
}

export default HomePage;