import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import home from './assets/pages/home.jpg';
import one from './assets/pages/1.jpg';
import two from './assets/pages/2.jpg';
import three from './assets/pages/3.jpg';
import four from './assets/pages/4.jpg';
import five from './assets/pages/5.jpg';
import six from './assets/pages/6.jpg';
import seven from './assets/pages/7.jpg';
import 

import './app.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div className='overflow-hidden min-w-screen max-w-screen mini-h-screen max-h-screen'>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className='swiper'
      >
        <SwiperSlide><img className='w-screen h-screen ' src={home} /></SwiperSlide>
        <SwiperSlide><img className='w-screen h-screen ' src={one} /></SwiperSlide>
        <SwiperSlide><img className='w-screen h-screen ' src={two} /></SwiperSlide>
        <SwiperSlide><img className='w-screen h-screen ' src={three} /></SwiperSlide>
        <SwiperSlide><img className='w-screen h-screen ' src={four} /></SwiperSlide>
        <SwiperSlide><img className='w-screen h-screen ' src={five} /></SwiperSlide>
        <SwiperSlide><img className='w-screen h-screen ' src={six} /></SwiperSlide>
        <SwiperSlide><img className='w-screen h-screen ' src={seven} /></SwiperSlide>
      </Swiper>
    </div>
  );
}
