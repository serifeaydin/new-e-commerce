import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import BlogCard from './BlogCard';
import Post1 from '../assets/post1.png';
import Post2 from '../assets/post2.png';
import Post3 from '../assets/post3.png';
import Post4 from '../assets/post4.png';
import Post5 from '../assets/post5.png';
import Post6 from '../assets/post6.png';


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
          <div className="md:flex">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <BlogCard
              image={Post3}
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
              image={Post4}
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <BlogCard
              image={Post5}
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
              image={Post6}
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
        </SwiperSlide>
      </Swiper>
    );
  };
  
  export default Slider;