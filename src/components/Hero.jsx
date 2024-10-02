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
          }}
        >
          <SwiperSlide>
            <div className="relative h-screen  overflow-hidden">
              <img className="w-full h-full object-cover object-center" src={Hero1} alt="hero1" />
              <div className="absolute top-1/4 md:top-1/3 lg:top-1/4 right-1/2 transform translate-x-1/2 md:translate-x-0 text-white text-center md:text-left p-4 md:p-8">
                <h5 className="text-white">SUMMER 2024</h5>
                <h1 className="text-3xl md:text-6xl font-bold my-4 md:my-8">NEW COLLECTION</h1>
                <h4>We know how large objects will act,</h4>
                <h4 className="pb-6">but things on a small scale.</h4>
                <Link to="/shop">
                  <button className="px-8 py-4 bg-[#2DC071] text-white font-bold">SHOP NOW</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img className="w-full" src={Hero3} alt="hero3" />
              <div className="absolute top-1/3 md:top-1/2 lg:top-1/3 left-1/3 transform -translate-x-1/2 md:translate-x-0 text-white text-center md:text-left p-4 md:p-8">
                <h1 className="pb-4 text-3xl md:text-5xl font-bold">BLACK FRIDAY</h1>
                <h4>We know how large objects will act, but things on a</h4>
                <h4 className="pb-6">small scale just do not act that way.</h4>
                <Link to="/shop">
                  <button className=" px-8 py-4 bg-[#23A6F0] text-white font-bold text-xl mx-16">Start Now</button>
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