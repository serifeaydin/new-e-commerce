import React from "react";

import Footer from "../layout/Footer";


import Client from "../components/Client";

import Product from "../components/Product";
import ShopProducts from "../components/ShopProducts";
import Description from "../components/Description";
import ShopNavbar from "../components/ShopNavbar";

function ProductDetailPage(){
   
    return(

       

        <div>
           <ShopNavbar/>
           <Product/>
         
          <Description/>
           <ShopProducts/>
         
         
          <Client/>
           <Footer/>
           
        

        </div>


    )
}

export default ProductDetailPage;