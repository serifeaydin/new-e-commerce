import React from 'react';
import Hero1 from '../assets/hero1.jpg';

import Hero3 from '../assets/hero3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import SwiperCore from 'swiper/core';

SwiperCore.use([Navigation]);

function Hero() {
  return (
    <section>
      <div className=''>
        <Swiper
          navigation={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}>
          <SwiperSlide>
            <div className="relative">
              <img className="w-full" src={Hero1} alt="hero1" />
              <div className="absolute top-1/4 right-2/5 pl-36 text-white  text-start">
                <h5 className="text-white">SUMMER 2024</h5>
                <h1 className=" text-6xl font-bold my-8">NEW COLLECTION</h1>
                <h4 >We know how large objects will act,</h4>
                <h4 className="pb-6 ">but things on a small scale.</h4>
                <Link to="/shop">
                  <button className="p-[15px_40px_15px_40px] bg-[#2DC071] text-start">
                    <h3 className="text-white font-bold">SHOP NOW</h3>
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
         
          <SwiperSlide>
            <div className="relative">
              <img className="w-full" src={Hero3} alt="hero3" />
              <div className="absolute top-48 left-96 text-white  ">
               
                <h1 className="pb-[1rem] text-5xl font-bold">BLACK FRIDAY</h1>
                <h4>We know how large objects will act, but things on a </h4>
                <h4 className="pb-6">small scale just do not act that way.</h4>
                <Link to="/shop">
                  <button className="p-[15px_40px_15px_40px] bg-[#23A6F0]">
                    <h3 className="text-white font-bold text-xl">Start Now</h3>
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;