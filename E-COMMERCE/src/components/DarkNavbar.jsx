import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function DarkNavbar(){

    return(
        <div className="flex justify-between bg-[#252B42] text-white">
            {/* First Group */}
            <div className="flex  mr-8">
                <div className="flex items-center pr-4">
                    <FontAwesomeIcon icon={faPhone} size="2x" className="mr-4" />
                    <p>(225) 555-0118</p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
                    <p><a href="mailto:michelle.rivera@example.com">michelle.rivera@example.com</a></p>
                </div>
            </div>

            {/* Second Group */}
            <div className="">
                <p className="">Follow Us and get a chance to win 80% off</p>
            </div>

            {/* Third Group */}
            <div className="flex items-center">
                <p className="mr-4">Follow Us:</p>
                <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-4" />
                <FontAwesomeIcon icon={faYoutube} size="2x" className="mr-4" />
                <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-4" />
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </div>
        </div>
    );
}

export default DarkNavbar;