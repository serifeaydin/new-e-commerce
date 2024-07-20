import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper/core';

import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import Blog4 from "../assets/blog4.png";
import Blog5 from "../assets/blog5.png";
import Blog6 from "../assets/blog6.png";

import BlogCard from './BlogCard';



SwiperCore.use([Navigation]);

const Slider = () => {
    return (
      <Swiper
        navigation={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="md:flex ">
            <BlogCard
             
             imageUrl= {Blog1}
             category= "Google Trending New"
             title= "Koudetat à la Maison #1 (L’intégrale)"
             description= 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.'
             date= '22 April 2021'
             comments= "10"
            />
            <BlogCard
              
              imageUrl= {Blog2}
             category= "Google Trending New"
             title= "Koudetat à la Maison #1 (L’intégrale)"
             description= 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.'
             date= '22 April 2021'
             comments= "10"
            />
             <BlogCard
              
              imageUrl= {Blog3}
             category= "Google Trending New"
             title= "Koudetat à la Maison #1 (L’intégrale)"
             description= 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.'
             date= '22 April 2021'
             comments= "10"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
           
            <BlogCard
              
             imageUrl= {Blog4}
             category= "Google Trending New"
             title= "Koudetat à la Maison #1 (L’intégrale)"
             description= 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.'
             date= '22 April 2021'
             comments= "10"
            />
            <BlogCard
              
             imageUrl= {Blog5}
             category= "Google Trending New"
             title= "Koudetat à la Maison #1 (L’intégrale)"
             description= 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.'
             date= '22 April 2021'
             comments= "10"
            />
             <BlogCard
              
              imageUrl= {Blog6}
             category= "Google Trending New"
             title= "Koudetat à la Maison #1 (L’intégrale)"
             description= 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.'
             date= '22 April 2021'
             comments= "10"
            />
          </div>
         
        </SwiperSlide>
        
      </Swiper>
    );
  };
  
  export default Slider; 