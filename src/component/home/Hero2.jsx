import React from 'react'
import { assets } from '../../assets/assets'
import { Triangle } from 'lucide-react'

const Hero2 = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-28">

        {/* sec 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img src={assets.startup} alt="Startups Illustration" className="w-full h-auto" />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-5 text-left">
            <div className="flex items-center gap-3">
              <Triangle color="red" fill="red" size={20} className="transform rotate-90" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Startups
            </h2>

            <div className="text-lg font-semibold text-red-600 tracking-wide">
              Nurturing the Nascent Concepts
            </div>

            <p className="text-base text-gray-600 leading-relaxed font-normal">
              The incipience of big profitable endeavors begins from an idea and we, at Capsitech, encourage these budding ideas by providing aspiring entrepreneurs a platform to work and develop flourishing businesses.
            </p>
          </div>
        </div>


        {/* sec 2 */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">

          {/* Content - Pushed to the bottom */}
          <div className="w-full lg:w-1/2 flex flex-col justify-end space-y-5">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-end gap-4">
              <span>Functional Ventures</span>
              {/* <Triangle color="red" fill="red" size={20} className="transform rotate-90" /> */}
            </h2>

            <div className="text-lg font-semibold text-red-600 tracking-wide gap-2">
              Fortifying the Existent
            </div>
          </div>

          {/* image + content */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-5">
            <div className="w-full flex justify-center items-center">
              <img src={assets.functional} alt="Functional" className="w-80% h-auto" />
            </div>

            <p className="text-base text-gray-600 leading-relaxed font-normal text-left">
              We empower existing businesses by streamlining operations, optimizing structural frameworks, and strengthening their core foundations to ensure sustainable, long-term growth and stability.
            </p>
          </div>
        </div>

        {/* sec 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src={assets.futureProspect}
                alt="Future"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-5 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Future Prospects
            </h2>

            <div className="text-lg font-semibold text-red-600 tracking-wide">
              Anticipating the Business Needs
            </div>

            <p className="text-base text-gray-600 leading-relaxed font-normal">
              We strive to assimilate the needs the business may face in the future, and we intend to develop and effectuate next-generation solutions that may potentially ensure the smooth progression of the business trajectory. Our expertise lies in comprehending the challenges that are faced by businesses of varied domains and developing potential, futuristic solutions.
            </p>

            <p className="text-base text-gray-600 leading-relaxed font-normal">
              Our aspirations of excelling as a one-stop solution to your business requirements are premised upon the idea of ensuring comprehensive growth and development of complementary businesses in different sectors.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero2