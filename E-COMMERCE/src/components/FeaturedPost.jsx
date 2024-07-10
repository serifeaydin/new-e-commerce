import React from "react";


import Slider from "./BlogSlider"; 

function FeaturedPost() {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[#23A6F0]">Practice Advice</h2>
        <h1 className="text-4xl font-bold text-center mb-8">Featured Posts</h1>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:justify-center sm:space-x-4">
          <Slider />
        </div>
      </div>
    </div>
  );
}
export default FeaturedPost;