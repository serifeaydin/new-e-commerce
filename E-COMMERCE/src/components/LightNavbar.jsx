import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const LightNavbar = () => {
    return (
        <nav className="p-4 mb-4">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">
                    Bandage
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Content Pages</a>
                </div>

                <div className="hidden md:flex space-x-4 items-center">
                    <FontAwesomeIcon icon={faUser} className="text-[#23A6F0]" />
                    <a href="#" className="text-[#23A6F0] border border-white py-1 rounded">
                        Login/Register
                    </a>
                    <a href="#" className="text-[#23A6F0]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </a>
                    <a href="#" className="text-[#23A6F0]">
                        <FontAwesomeIcon icon={faHeart} />
                    </a>
                    <a href="#" className="text-[#23A6F0]">
                        <FontAwesomeIcon icon={faCartShopping} className='pr-6' />
                    </a>
                </div>

                <div className="md:hidden flex space-x-4">
                    <a href="#" className="text-[#23A6F0]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </a>
                    <a href="#" className="text-[#23A6F0]">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </a>
                    <button onClick={() => {
                        const menu = document.getElementById('mobile-menu');
                        if (menu.style.display === 'none' || !menu.style.display) {
                            menu.style.display = 'block';
                        } else {
                            menu.style.display = 'none';
                        }
                    }}>
                        <FontAwesomeIcon icon={faBars} className="text-[#23A6F0]"/>
                    </button>
                </div>
            </div>

            <div id="mobile-menu" className="hidden md:hidden mt-2 space-y-2">
                <a href="#" className="block">Home</a>
                <a href="#" className="block">Shop</a>
                <a href="#" className="block">About</a>
                <a href="#" className="block">Blog</a>
                <a href="#" className="block">Content Pages</a>
            </div>
        </nav>
    );
}

export default LightNavbar;