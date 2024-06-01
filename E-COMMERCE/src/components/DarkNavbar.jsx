import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function DarkNavbar() {
    return (
        <nav className='hidden md:block'>
        <div className='flex w-full h-16 pt-6 px-8 justify-between bg-[#252B42] text-white '>
            <div className='flex'>
                <div className='flex pr-4'>
                    <FontAwesomeIcon icon={faPhone} className='pt-1 pr-1'/>
                    <p>(225) 555-0118</p>
                </div>
                <div className='flex'>
                    <FontAwesomeIcon icon={faEnvelope} className='pt-1 px-1'/>
                    <p><a href="mailto:michelle.rivera@example.com">michelle.rivera@example.com</a></p>
                </div>
            </div>

            <div>
                <p>Follow Us and get a chance to win 80% off</p>
            </div>

            <div className='flex'>
                <p>Follow Us:</p>
                <button className='pb-3 px-2'>
                    <FontAwesomeIcon icon={faFacebook} />
                </button>
                <button className='pb-3 px-2'>
                    <FontAwesomeIcon icon={faYoutube} />
                </button>
                <button className='pb-3 px-2'>
                    <FontAwesomeIcon icon={faInstagram} />
                </button>
                <button className='pb-3 px-2'>
                    <FontAwesomeIcon icon={faTwitter} />
                </button>
            </div>
        </div>
        </nav>
    );
}

export default DarkNavbar;