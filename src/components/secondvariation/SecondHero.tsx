import Image from 'next/image';
import React from 'react';
import { TiArrowRight } from "react-icons/ti";
import { GoArrowRight, GoDotFill } from "react-icons/go";

const SecondHero = () => {
  return (
    <div className="md:min-h-[822px] w-full relative overflow-hidden main_section_bg border-b border-[#E3E3E880]">
      <div className="absolute inset-0 top_bg_colour z-0"></div>
      <div className="absolute inset-0 bottom_bg_colour clip-diagonal z-0"></div>
      <div className="absolute inset-0 bg-image z-1"></div> {/* New div for background image */}
      <div className="relative max-w-[1440px] z-50 text-center mx-auto w-full flex flex-col justify-center items-center gap-[20px] md:gap-[50px] py-[30px]  px-[30px]">
        <div className='flex flex-col items-center md:items-end'>
          <div className="flex justify-center items-center gap-3">
            <Image src="/images/home/img1.svg" width={46} height={30} alt="img icon" className="mt-1" />
            <h3 className="text-2xl md:text-3xl font-medium gradient_color main_heading_font">Breakouts & Setups</h3>
          </div>
          <p className='text-[10px] flex items-center gap-2 '>
            <span className='gradient_color'>Powered By</span>
            <img src="/images/home/img8.png" alt="" className='w-[9px]' />
            <span className='gradient_color'>Market Terminal</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-[30px] lg:flex-row md:mx-[50px] justify-between">
          <div className="flex flex-col w-full lg:w-[52%] text-center lg:text-left gap-[25px] lg:gap-[45px]">
            <h1 className="text-4xl md:text-6xl font-semibold md:leading-[70px] text-start">
              <span>Get </span>
              <span className="text-[#2360A7]">Breakouts & Setups </span>
              <span className='text-[#000000]'>Every Week 🔥</span>
            </h1>
            <div className="flex flex-col gap-2 items-start">
              <p className="text-base md:text-[20px] font-medium text-[#303030]">
                Every Sunday In Your Inbox You’ll Get:
              </p>
              <ul className="w-full flex flex-col gap-[6px] text-[#303030]">
                <li className="flex items-center gap-2 text-base md:text-[20px]">
                  <GoDotFill className='text-[12px]' /> 3 <span className="font-bold">Breakouts.</span>
                </li>
                <li className="flex items-center gap-2 text-base md:text-[20px]">
                  <GoDotFill className='text-[12px]' /> 3 <span className="font-bold">Setups.</span>
                </li>
                <li className="font-bold flex items-center gap-2 text-base md:text-[20px]">
                  <GoDotFill className='text-[12px]' /> No Commitment.
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col xl:flex-row justify-center xl:justify-start items-center lg:items-start gap-4">
              <input
                type="email"
                placeholder="|Enter your email to join our free newsletter"
                className="w-full md:w-[401px] h-[48px] rounded-[10px] bg-white outline-0 px-3 custom_input_main"
                autoFocus
              />
              <button className="w-full md:w-[401px] xl:w-[239px] h-[48px] rounded-[10px] shadow-xs cursor-pointer bg-[#000000] text-white flex justify-center items-center gap-3">
                Get Breakouts & Setups <GoArrowRight className="text-xl" />
              </button>
            </div>
            <p className="text-xs text-left opacity-50">
              By entering your email, you are joining our free community. We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
          <Image src="/images/home/img2.webp" width={328} height={633} alt="mobile img" className="md:mr-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default SecondHero;