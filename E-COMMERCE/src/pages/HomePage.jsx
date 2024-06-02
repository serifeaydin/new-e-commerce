import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Client from "../components/Client";
import ShopCard from "../components/ShopCard";
import ProductCards from "../layout/ProductCards";
import FeaturedContent from "../components/FeaturedContent";
import Features from "../components/Features";
import FeaturedPost from "../components/FeaturedPost";



function HomePage(){
   
    return(

       

        <div>
           <Header/>
           <Client/>
           <ShopCard/>
           <ProductCards/>
           <FeaturedContent/>
           <Features/>
           <FeaturedPost/>
           <Footer/>
           
        

        </div>


    )
}

export default HomePage;