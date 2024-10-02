import React from 'react';
import Girl1 from "../assets/girl1.png";
import Girl2 from "../assets/girl2.png";



const FeaturedContent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:items-start">
      <div className="flex justify-center md:justify-start">
        <img src={Girl1} alt="Smiling woman with glasses" className="mr-2" />
        <img src={Girl2} alt="Smiling woman with phone" />
      </div>
      <div className="flex-col w-full md:w-1/3 ml-0 md:ml-16 mt-8 md:mt-32">
        <h2 className="text-blue-500 text-lg text-start font-semibold mt-12 md:mt-0">Featured Products</h2>
        <h1 className="text-4xl font-bold mt-4 text-start">We love what we do</h1>
        <p className="text-gray-600 mt-4 text-start">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>
        <p className="text-gray-600 mt-2 text-start">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
      </div>
    </div>
  );
};


export default FeaturedContent;