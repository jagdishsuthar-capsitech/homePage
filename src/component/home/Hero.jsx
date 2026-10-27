import React from 'react'
import { assets } from '../../assets/assets'

const Hero = () => {
    return (
        <header className='py-12 sm:py-20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center'>

                    {/* Left */}
                    <div className='space-y-6 text-left'>
                        <h1 className='text-4xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15] text-gray-900'>
                            Unifying Technical Competence with<br className='hidden sm:inline' />
                            <span className='font-bold text-[#051e56] tracking-normal'>Exemplary Business Mechanism</span>
                        </h1>
                        <div className='pt-2'>
                            <a href="#" className='inline-flex items-center gap-3 bg-[#051e56] text-white font-medium px-8 py-4 hover:text-red-700 transition-all duration-300 group'>
                                Know More
                            </a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className='hidden md:flex justify-center items-center'>
                        <div className='relative w-full max-w-lg md:max-w-xl lg:max-w-2xl'>
                            <img src={assets.hero} alt="Hero" className='w-full h-auto' />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Hero