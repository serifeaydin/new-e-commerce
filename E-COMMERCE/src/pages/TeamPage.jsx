import { faArrowRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Unsplash1 from "../assets/unsplash_1.png";
import Unsplash2 from "../assets/unsplash_2.png";
import Unsplash3 from "../assets/unsplash_3.png";
import Unsplash4 from "../assets/unsplash_4.png";
import Unsplash5 from "../assets/unsplash_5.png";
import Team from "../components/Team";
import Footer from "../layout/Footer";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";



const TeamPage = () => {
    return (
        <nav className="p-4 mb-4">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">
                    Bandage
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/pages">Pages</Link>
                </div>
                <Link to="/login" className="text-[#23A6F0] border border-white py-1 rounded">
                        Login
                    </Link>
                    <Link to="/login" className="text-white bg-[#23A6F0] border border-white py-1 rounded">
                        Became a Member
                        <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",}} />
                    </Link>

                </div>
                <div>
                    <p>WHAT WE DO</p>
                    <h1>Innovation tailored for you</h1>
                    
    <div className="flex justify-center">
        <Link to="/" className="mx-4">Home</Link>
        <FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD] mt-1"/>
        <p className="text-[#BDBDBD] mx-4">Team</p>
    </div>
                </div>
                <div className="flex">
                    <div>
                        <img src={Unsplash1}/>
                        

                    </div>
                    <div className="flex">
                        <div>
                    <img src={Unsplash2}/>
                    <img src={Unsplash3}/>
                    </div>
                    <div>
                    <img src={Unsplash4}/>
                    <img src={Unsplash5}/>
                    </div>    
                    </div>

                </div>
                <Team/>
               
                <div className="min-h-screen bg-white text-center flex flex-col items-center justify-center p-8">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Start your 14 days free trial</h1>
        <p className="mb-6 text-gray-600">Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent.</p>
        <button className="bg-blue-500 text-white py-2 px-6  mb-6">Try it Free Now</button>
        <div className="flex justify-center space-x-4 ">
          <a href="#" className="text-[#BDBDBD] hover:text-blue-500"> <FontAwesomeIcon icon={faTwitter} size="xl" /></a>
          <a href="#" className="text-[#BDBDBD] hover:text-blue-500"> <FontAwesomeIcon icon={faFacebook} size="xl" /></a>
          <a href="#" className="text-[#BDBDBD] hover:text-blue-500"> <FontAwesomeIcon icon={faInstagram} size="xl" /></a>
          <a href="#" className="text-[#BDBDBD] hover:text-blue-500"> <FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
        </div>
      </div>
    </div>

    <Footer/>
                </nav>
               

                )
                }

                export default TeamPage;