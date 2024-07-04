
import React from "react";
import Team from "../components/Team";
import BandageNavbar from "../components/BandageNavbar";
import girlImage from '../assets/imageGirl.png';  
import Client from "../components/Client";
import Footer from "../layout/Footer";
import Girl3 from "../assets/girl3.jfif";


const AboutUsPage = () => {
    return (
        <div>
     <BandageNavbar/>

     
    <div className="flex  p-4 items-center h-screen bg-white my-8">
      <div className="flex flex-col md:flex-row items-center  bg-white ">
        <div className="md:w-1/2 text-start md:text-left">
        <h3>About Company</h3>
          <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
          <p className="text-lg mb-4">We know how large objects will act, but things on a small scale</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Quote Now</button>
        </div>
        <div className="md:w-1/2 flex  relative">
          <img src={girlImage} alt="Girl" className="relative top-0 left-32 z-10 d md:w-full" />
          <div className="absolute top-12 left-44 w-96 h-96 bg-pink-100 rounded-full z-0"></div>
        <div className="absolute top-0 left-24 w-20 h-20 bg-pink-100 rounded-full z-0"></div>
        <div className="absolute top-96 left-32 w-4 h-4 bg-purple-400 rounded-full z-0"></div>
        <div className="absolute top-24 left-full w-4 h-4 bg-purple-400 rounded-full z-0"></div>
        </div>
      </div>
    </div>

       {/* Açıklama kısmı*/}
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      
      <div className=" flex w-full max-w-4xl text-start mb-12">
        <div>
        <h2 className="text-red-500 font-bold text-sm">Problems trying</h2>
        <h1 className="text-3xl md:text-2xl font-bold text-gray-800 mb-4">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </h1>
        </div>
        <div className="flex">
        <p className="text-gray-500 mt-6">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        </div>
      </div>

         {/* İstatistik kısmı */}
      <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-5xl font-bold text-gray-800">15K</h3>
          <p className="text-gray-500">Happy Customers</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-gray-800">150K</h3>
          <p className="text-gray-500">Monthly Visitors</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-gray-800">15</h3>
          <p className="text-gray-500">Countries Worldwide</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-gray-800">100+</h3>
          <p className="text-gray-500">Top Partners</p>
        </div>
      </div>
    </div>
 
      {/* Video kısmı */}
         <div className="flex items-center justify-center h-screen">
      <iframe 
    height="500" 
    width="800" 
    className="flex items-center"
    src="https://www.youtube.com/embed/il_t1WVLNxk"
  >
      </iframe>
        </div>

        <Team/>

        <div className="items-center mt-16">
            <h1 className="font-bold text-3xl mb-8 mt-8">Big Componies are Here</h1>
            <p className="text-[#737373]">Problems trying to resolve the conflict between <br/>
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <Client/>

        {/* Work with Us */}

        <div className="flex bg-[#2A7CC7] text-white text-start items-center mb-12 ">
            <div className=" 3/5 ml-12 mr-72 ">
                <p className="text-xl font-semibold my-4">Work with Us</p>
                <h1 className="text-3xl font-bold my-4">Now Let’s grow Yours</h1>
                <p>The gradual accumulation of information about atomic </p>
                <p> and  small-scale behavior during the first quarter of the 20th </p>
                <button className="bg-[#2A7CC7] text-white px-12 py-4 border border-slate-50 my-4">Button</button>
                </div>
                <div className="w-2/5">
                    <img src={Girl3} className="w-full "/>
                </div>
        </div>


        <Footer/>
       </div>
           
    )
}
export default AboutUsPage;