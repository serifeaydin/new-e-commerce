import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import GridIcon from "../assets/grid.icon.svg";

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h2 className="text-blue-500 text-lg text-center font-semibold">Featured Products</h2>
      <h1 className="text-4xl font-bold mt-4 text-center">THE BEST SERVICES</h1>
      <p className="text-gray-600 mt-4 text-center">Problems trying to resolve the conflict between</p>
      
      <div className="flex flex-col md:flex-row justify-around items-center mt-12 w-full px-4 md:px-16">
        <div className="flex flex-col w-1/3 items-center text-center mb-8 md:mb-0">
        <FontAwesomeIcon icon={faBookOpenReader } className="h-12 w-12 text-[#23A6F0] mb-4" />
          <h3 className="text-xl font-bold">Easy Wins</h3>
          <p className="text-gray-600 mt-2">Get your best looking smile now!</p>
        </div>
        <div className="flex flex-col w-1/3 items-center text-center mb-8 md:mb-0">
        <img src={GridIcon} className="h-16 w-16 text-[#23A6F0] mb-2 mt-4" />
          <h3 className="text-xl font-bold">Concrete</h3>
          <p className="text-gray-600 mt-2">Defalcate is most focused in helping you discover your most beautiful smile</p>
        </div>
        <div className="flex flex-col w-1/3 items-center text-center mb-8 md:mb-0">
        <FontAwesomeIcon icon={faArrowTrendUp} className="h-12 w-12 text-[#23A6F0] mb-4" />
          <h3 className="text-xl font-bold">Hack Growth</h3>
          <p className="text-gray-600 mt-2 ">Overcame any hurdle or any other problem.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;