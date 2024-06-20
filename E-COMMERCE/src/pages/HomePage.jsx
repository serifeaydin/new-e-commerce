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
           <div className="mt-16">
           <h1 className="text-2xl text-[#737373] font-bold text-center mb-2">Featured Products</h1>
          <h2 className="text-4xl text-center  mb-8">BESTSELLER PRODUCTS</h2>
          <p className="text-center text-[#737373] mb-12">Problems trying to resolve the conflict between</p>
           
          </div>
          <ProductCards/>
           <FeaturedContent/>
           <Features/>
           <FeaturedPost/>
           <Footer/>
           
        

        </div>


    )
}

export default HomePage;