import React from "react";
import BlogCard from "../components/BlogCard";
import Post1 from "../assets/post1.png";
import Post2 from "../assets/post2.png";
function FeaturedPost() {
    return (
      <div className=" min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-[#23A6F0]">Practice Advice</h2>
          <h1 className="text-4xl font-bold text-center mb-8">Featured Posts</h1>
          <div className="flex justify-center">
            <BlogCard 
              image={Post1}
              department="English Department"
              title="Graphic Design"
              description="We focus on ergonomics and meeting you where you work. It’s only a keystroke away."
              price="16.48"
              salePrice="6.48"
              lessons="64"
              hours="22"
              rating="4.9"
              sales="15"
            />
            <BlogCard 
              image={Post2}
              department="English Department"
              title="Graphic Design"
              description="We focus on ergonomics and meeting you where you work. It’s only a keystroke away."
              price="16.48"
              salePrice="6.48"
              lessons="64"
              hours="22"
              rating="4.9"
              sales="15"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export  default FeaturedPost;