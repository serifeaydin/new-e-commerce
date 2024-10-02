import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faHooli, faLyft, faPiedPiperHat, faRedditAlien, faStripe } from "@fortawesome/free-brands-svg-icons";

function Client() {
    return (
        <section>
           

            <div className=" flex justify-center flex-wrap gap-x-20 gap-y-10  text-6xl max-lg:text-7xl max-md:text-8xl max-sm:text-9xl text-gray-500 p-8">
           <i> <FontAwesomeIcon icon={faHooli} /></i>
           <i> <FontAwesomeIcon icon={faLyft} /> </i>
           <i> <FontAwesomeIcon icon={faPiedPiperHat} /> </i>
           <i> <FontAwesomeIcon icon={faAws} /></i>
           <i> <FontAwesomeIcon icon={faStripe} /></i>
           <i> <FontAwesomeIcon icon={faRedditAlien} /></i>
            </div>
        </section>
    );
}

export default Client;