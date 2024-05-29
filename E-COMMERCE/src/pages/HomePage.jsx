import React from "react";
import Header from "../layout/Header";
import Client from "../components/Client";
import ShopCard from "../components/ShopCard";
import ProductCards from "../layout/ProductCards";


function HomePage(){

    return(

        <div>
           <Header/>
           <Client/>
           <ShopCard/>
           <ProductCards/>
           
        

        </div>

    )
}

export default HomePage;