import Image from 'next/image';
import React from 'react';
import { TiArrowRight } from "react-icons/ti";

const HeroSection = () => {
  return (
    <div className="md:min-h-[986px] w-full relative overflow-hidden">
      <div className="absolute inset-0 top_bg_colour z-0"></div>
      <div className="absolute inset-0 bottom_bg_colour clip-diagonal z-0"></div>
      <div className='relative max-w-[1440px] text-center mx-auto w-full md:w-[70%] xl:w-[55%] flex flex-col justify-center items-center gap-[20px] md:gap-[40px] py-[30px] md:py-[66px] px-3'>
        <div className='flex justify-center items-center gap-3'>
          <Image src="/images/home/img1.svg" width={46} height={30} alt='img icon' className='mt-1' />
          <h3 className='text-2xl md:text-4xl font-medium '>Breakouts & Setups</h3>
        </div>
        <h1 className='text-4xl md:text-6xl font-semibold md:leading-[70px]'>
          <span>Get the Best </span>
          <span className='text-[#2360A7]'>Growth Stocks </span>
          <span>of the Week 💥</span>
        </h1>
        <p className='text-base md:text-[22px] font-medium text-[#303030]'>Every Sunday, get a curated list the best <span className='font-bold'>growth stocks breakouts</span> of the week— delivered straight to your inbox.</p>
        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-4'>
          <input type="email" placeholder='Enter your email' className='w-full md:w-[340px] h-[48px] rounded-[10px] border border-[#E3E3E8] shadow-xs bg-white outline-0 px-3' />
          <button className='w-full md:w-[239px] h-[48px] rounded-[10px] shadow-xs cursor-pointer bg-[#000000] text-white flex justify-center items-center gap-3'>Get Stock Ideas for Free <TiArrowRight className='text-xl' /> </button>
        </div>
        <Image src="/images/home/img2.webp" width={300} height={307} alt='mobile img' />
        <p className="text-xs text-left opacity-50">By entering your email, you are signing up to receive Chalkin Powerfeed as well as occasional marketing messages. You can unsubscribe from each at any time. Our privacy policy.</p>
      </div>
    </div>
  );
};

export default HeroSection;