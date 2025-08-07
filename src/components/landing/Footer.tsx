import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer_bg'>
            <div className='max-w-[1440px] mx-auto w-full p-[30px] md:p-[50px] flex flex-col gap-[30px] md:gap-[50px]'>
                <div className='text-base font-medium text-[#5A5A5A]'>
                    <span className='text-[#000000B2]'>Disclaimer:</span> <br />
                    Past performance is not indicative of future results.<br />
                    No earnings claims are made.<br />
                    Results shown are not typical.<br />
                    All communication is general in nature and for educational and general informational purposes only.<br />
                    Under no circumstance should it be considered investment advice.<br />
                    All the information that originates from us, or any of our partners or affiliates, is for educational and informational purposes only and is NOT a recommendation to buy or sell anything.<br />
                    The mention of specific stocks, ETFs, any idea(s), securities, or anything else for that matter anywhere in our work does not constitute an endorsement or recommendation.<br />
                    Investing and trading in capital markets or using margin carries a high level of risk and may not be suitable for all investors.<br />
                    People who use our work are solely responsible for their investment decisions, actions, and outcomes.<br />
                    We are not liable for anything that happens as a result of our work.<br />
                    People should consult with qualified professionals for personalized advice.<br />
                    Leverage can work against you as well as for you.<br />
                    Before you decide to invest or trade in capital markets you should carefully consider your investment objectives, level of experience, and risk appetite, among other factors.<br />
                    The possibility exists that you could sustain a loss of some, all, or more of your initial investment and therefore you should not invest money that you cannot afford to lose.<br />
                    You should be aware of all the risks associated with capital markets, investing/trading, and seek specific investment advice from an independent financial advisor and other professionals.<br />
                    Remember all the information we provide is for educational and general informational purposes only and is subject to change without notice.<br />
                    Do your own homework (due diligence) and double/triple check everything.<br />
                    By engaging with any of our work you take responsibility for every decision you make.<br />
                    Our work is not intended to solicit the buying or selling of any securities or anything else for that matter.<br />
                    Any testimonials represent the views of the individuals providing them, and results may vary.<br />
                    The stock market is dynamic, and conditions can change rapidly. People should verify information independently.<br />
                    We reserve the right to modify, amend, or update this disclaimer at any time without prior notice.<br />
                    We encourage people to review the disclaimer periodically for any changes.<br />
                    We do not make any earnings claims or guarantees of financial success.<br />
                    The actual results achieved by members may vary, and we make no representations regarding the likelihood of financial success.<br />
                    Our work is delivered electronically, and we are not responsible for any technical issues, interruptions, or security issues that may arise during the electronic transmission of our work.
                </div>
                <div className='flex justify-between items-center gap-[20px] border-t border-[#EAECF0] pt-5 md:pt-[30px] flex-wrap flex-col sm:flex-row text-center sm:text-left'>
                    <div className='flex items-start gap-2'>
                        <Image src="/images/home/img1.svg" width={35} height={22} alt='img icon' className='mt-1' />
                        <h3 className='text-lg md:text-2xl font-medium'>Breakouts & Setups</h3>
                    </div>
                    <p className='text-base font-medium text-[#667085]'>Terms of Service</p>
                    <p className='text-base font-medium text-[#667085]'>Privacy Policy</p>
                    <p className='text-base font-medium text-[#667085]'>©breakoutsandsetups. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
