import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const LightNavbar = () => {
    return (
        <nav>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    Bandage
                </div>
                <div className="space-x-4">
                    <a href="#" >Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#" >Blog</a>
                    <a href="#">Content Pages</a>
                </div>

                <div className="space-x-4 flex items-center">

                    <a href="#" className="text-[#23A6F0] border border-white px-3 py-1 rounded">
                        Login/Register
                    </a>
                    <a href="#" className="text-[#23A6F0]">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </a>
                    <a href="#" className="text-[#23A6F0]">
                    <FontAwesomeIcon icon={faHeart} />
                    </a>
                    <a href="#" className="text-[#23A6F0]">
                    <FontAwesomeIcon icon={faCartShopping} />
                    </a>
                   
                </div>
            </div>
        </nav>
    );
}

export default LightNavbar;