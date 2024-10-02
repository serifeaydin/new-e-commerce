import React from "react";
import { Link } from "react-router-dom";
import Unsplash from "../assets/unsplash.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Description() {
  return (
    <div className="md:mx-16">
      <nav className="flex justify-center space-x-8 mb-8">
        <Link to="/description">
          <button>Description</button>
        </Link>
        <Link to="/information">
          <button>Additional Information</button>
        </Link>
        <Link to="/reviews">
          <button>Reviews(0)</button>
        </Link>
      </nav>
      <div className="flex flex-col md:flex-row"> 
        <div className="w-full md:w-1/3 md:mr-8 mb-8 md:mb-0">
          <img src={Unsplash} alt="Description" className=" px-8 w-full md:h-auto" />
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0 px-8">
          <h1 className="text-xl font-bold">the quick fox jumps over</h1>
          <p className="text-start mt-4 mb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-start mb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-start">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="w-full md:w-1/3 md:mr-8 px-8">
          <div>
            <h1 className="text-xl font-bold mb-4">the quick fox jumps over</h1>
            <ul>
              <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD] mr-2 "/>the quick fox jumps over the lazy dog</li>
              <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD] mr-2 "/>the quick fox jumps over the lazy dog</li>
              <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD] mr-2 "/>the quick fox jumps over the lazy dog</li>
              <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD] mr-2 "/>the quick fox jumps over the lazy dog</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 mt-4">the quick fox jumps over</h1>
            <ul>
           <li className="mb-2"> <FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD] mr-2 "/>the quick fox jumps over the lazy dog</li>
              <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD] mr-2 "/>the quick fox jumps over the lazy dog</li>
              <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD] mr-2 "/>the quick fox jumps over the lazy dog</li>
              <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD] mr-2 "/>the quick fox jumps over the lazy dog</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden text-center font-bold text-2xl pt-8 pb-8 bg-gray-100">BESTSELLER PRODUCTS</div>
      <div className="lg:block hidden  md:text-center md:font-bold  md:text-3xl md:pt-16  ">BESTSELLER PRODUCTS</div>
    </div>
  );
}

export default Description;