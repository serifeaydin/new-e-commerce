import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const LightNavbar = () => {
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
                    <Link to="/pages">Pages</Link>
                </div>

                <div className="hidden md:flex space-x-4 items-center">
                    <FontAwesomeIcon icon={faUser} className="text-[#23A6F0]" />
                    <Link to="/login" className="text-[#23A6F0] border border-white py-1 rounded">
                        Login/Register
                    </Link>
                    <Link to="/search" className="text-[#23A6F0]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                    <Link to="/favorites" className="text-[#23A6F0]">
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>
                    <Link to="/cart" className="text-[#23A6F0]">
                        <FontAwesomeIcon icon={faCartShopping} className='pr-6' />
                    </Link>
                </div>

                <div className="md:hidden flex space-x-4">
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
    );
}

export default LightNavbar;