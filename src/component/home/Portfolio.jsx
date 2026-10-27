import React from 'react'
import { portfolioImages } from '../../assets/assets.js';

const Portfolio = () => {

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 sm:p-8 bg-white text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 sm:mb-10">Portfolio</h1>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {portfolioImages.map((imageSrc, index) => (
          <a key={index} href="/" target="_blank" className="inline-block transition-transform duration-300 hover:scale-105">

            <img src={imageSrc} alt={`Portfolio ${index + 1}`} className="w-auto h-full grayscale hover:grayscale-0" />
          </a>
        ))}
      </div>
    </div>
  )
}
export default Portfolio
