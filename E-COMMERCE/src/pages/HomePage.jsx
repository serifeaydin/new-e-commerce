import React from "react";
import Header from "../layout/Header";
import Client from "../components/Client";
import ShopCard from "../components/ShopCard";
import ProductCards from "../layout/ProductCards";
import FeaturedContent from "../components/FeaturedContent";
import Features from "../components/Features";


function HomePage(){

    return(

        <div>
           <Header/>
           <Client/>
           <ShopCard/>
           <ProductCards/>
           <FeaturedContent/>
           <Features/>
           
        

        </div>

    )
}

export default HomePage;