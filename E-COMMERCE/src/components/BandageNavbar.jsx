import { Link } from "react-router-dom";
import { faArrowRight, faBars, faCartShopping, faChevronRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BandageNavbar = () => {
    return (
        <nav className="p-4 mb-4">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">
                    Bandage
                </div>
                <div className="md:hidden flex justify-end space-x-4">
                    <Link to="/search" className="text-[#23A6F0]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} id="mobile-menu" className='text-black'/>
                    </Link>
                    <Link to="/cart" className="text-[#23A6F0]">
                      
                        <FontAwesomeIcon icon={faCartShopping} id="mobile-menu" className='text-black'/>
                    </Link>
                    <button onClick={() => {
                        const menu = document.getElementById('mobile-menu');
                        if (menu.style.display === 'none' || !menu.style.display) {
                            menu.style.display = 'block';
                        } else {
                            menu.style.display = 'none';
                        }
                    }}>
                       
                        <FontAwesomeIcon icon={faBars} id="mobile-menu" className="text-black"/>
                    </button>
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
                <div className="hidden md:flex space-x-16 mr-20  ">
                <Link to="/login" className="text-[#23A6F0] border font-semibold border-white py-1 rounded">
                        Login
                    </Link>
                    <Link to="/login" className="text-white bg-[#23A6F0] border font-semibold border-white py-2 px-4 rounded-lg ">
                        Became a Member
                        <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",}} className="pl-4" />
                    </Link>
               </div>
                </div>
                
                <div id="mobile-menu" className="hidden md:hidden mt-2 space-y-2">
                <Link to="/" className="block">Home</Link>
                <Link to="/shop" className="block">Shop</Link>
                <Link to="/about" className="block">About</Link>
                <Link to="/blog" className="block">Blog</Link>
                <Link to="/contact" className="block">Contact</Link>
                <Link to="/pages" className="block">Pages</Link>
            </div>

            <div id="mobile-menu" className="md:hidden mt-16 mb-16 space-y-2 text-2xl">
                <Link to="/" className="block pb-6 text-[#737373]">Home</Link>
                <Link to="/product" className="block pb-6 text-[#737373] ">Product</Link>
                <Link to="/pricing" className="block pb-6 text-[#737373]">Pricing</Link>
                <Link to="/contact" className="block pb-6 text-[#737373]">Contact</Link>
                </div>
</nav>
    )
}
export default BandageNavbar;