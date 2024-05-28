import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function DarkNavbar(){

    return(
       
        <div className="flex justify-between text-white bg-[#252B42]">
          
            <div className="flex ">
                <div className="flex ">
                    <FontAwesomeIcon icon={faPhone}  className="" />
                    <p>(225) 555-0118</p>
                </div>
                <div className="flex">
                    <FontAwesomeIcon icon={faEnvelope} className="" />
                    <p><a href="mailto:michelle.rivera@example.com">michelle.rivera@example.com</a></p>
                </div>
            </div>

        
            <div className="">
                <p className="">Follow Us and get a chance to win 80% off</p>
            </div>

            <div className="flex  ">
                <p className="">Follow Us:</p>
                <FontAwesomeIcon icon={faFacebook}  className="" />
                <FontAwesomeIcon icon={faYoutube}  className="" />
                <FontAwesomeIcon icon={faInstagram}  className="" />
                <FontAwesomeIcon icon={faTwitter}  />
            </div>
        </div>
       
    );
}

export default DarkNavbar;