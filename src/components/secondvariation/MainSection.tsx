import Image from 'next/image'
import React from 'react'
import { TiArrowRight } from 'react-icons/ti'

const MainSection = () => {
    return (
        <div className='flex flex-col gap-[25px] md:gap-[50px] max-w-[1440px] mx-auto my-[50px] md:my-[100px] px-[30px]'>
            <div className='flex flex-col gap-[15px] md:gap-[30px] items-center'>
                <h2 className='text-3xl md:text-[50px] font-semibold text-center '>See It With Your Own <span className='custom_eye'>Eyes</span>💫</h2>
                <div className='flex flex-col gap-2 text-base md:text-[22px] font-medium'>
                    <p className=''>Winning Stocks Don’t Move By Accident</p>
                    <ul className='ml-3'>
                        <li>1. They <span className='font-bold'>Set Up</span>(Form Bases) & </li>
                        <li>2. <span className='font-bold'>Break Out</span> 📈</li>
                    </ul>
                </div>
                <h2 className='text-base md:text-[22px] font-medium text-center md:text-left'>We Give You Stocks <span className='font-bold'>Breaking Out & Setting Up <span className='underline text-[#2360A7]'>Every Week</span></span></h2>
            </div>
            <div className='flex flex-col gap-[40px] md:gap-[100px]'>
                <div className='flex flex-col relative'>
                    <div className='w-[100%] md:w-[70%] mx-auto flex flex-col items-center'>
                        <h1 className='text-xl md:text-3xl font-semibold text-center md:text-left'>🔥 APP: <span className='text-[#008000]'>+310.40%</span> in 13 weeks</h1>
                        <Image src="/images/home/img3.webp" width={900} height={480} alt='first graph' />
                    </div>
                    <img src="/images/home/arrow1.png" alt="" className='w-[70px] md:w-[178px] absolute bottom-[-70px] md:bottom-[-100px] right-[-30px] md:right-0 xl:right-[10%]' />
                </div>
                <div className='flex flex-col gap-[40px] md:gap-[100px] relative'>
                    <div className='w-[100%] md:w-[70%] mx-auto flex flex-col items-center'>
                        <h1 className='text-xl md:text-3xl font-semibold text-center md:text-left'>🔥 PLTR: <span className='text-[#008000]'>+280.34%</span> in 27 weeks</h1>
                        <Image src="/images/home/img4.webp" width={900} height={480} alt='first graph' />
                    </div>
                    <img src="/images/home/arrow2.png" alt="" className='w-[70px] md:w-[178px] absolute bottom-[-70px] md:bottom-[-100px] left-[-30px] md:left-0 xl:left-[10%]' />
                </div>
                <div className='flex flex-col gap-[40px] md:gap-[100px]'>
                    <div className='w-[100%] md:w-[70%] mx-auto flex flex-col items-center'>
                        <h1 className='text-xl md:text-3xl font-semibold text-center md:text-left'>🔥 NVDA: <span className='text-[#008000]'>+83.03%</span> in 9 weeks</h1>
                        <Image src="/images/home/img5.webp" width={900} height={480} alt='first graph' />
                    </div>
                </div>
            </div>
            <h2 className='text-3xl md:text-[40px] font-semibold text-center mt-[-20px]'>Join Now to Find Your Next Big <span className='text-[#2360A7]'>Winner</span>  🏆</h2>
            <div className='flex flex-col lg:flex-row justify-center gap-4 w-[100%] md:w-[80%] xl:w-[60%] mx-auto relative'>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        className='w-[70%] mx-auto lg:mx-0 lg:w-[255px] h-[48px] rounded-[10px] border border-[#E3E3E8] shadow-xs bg-white outline-0 px-3'
                        autoFocus
                    />
                    <button className='w-[70%] text-sm md:text-base mx-auto lg:mx-0 lg:w-[232px] xl:w-[239px] h-[48px] rounded-[10px] shadow-xs cursor-pointer bg-[#000000] text-white flex justify-center items-center gap-3'>
                        Get Breakouts for FREE <TiArrowRight className='text-xl' />
                    </button>
                    <img src="/images/home/img6.png" alt="" className='absolute left-0 xl:left-10 h-[20px] sm:h-[30px] md:h-[48px]' />
                    <img src="/images/home/img7.png" alt="" className='absolute right-0 xl:right-10 h-[20px] sm:h-[30px] md:h-[48px]' />
            </div>
        </div>

    )
}

export default MainSection
