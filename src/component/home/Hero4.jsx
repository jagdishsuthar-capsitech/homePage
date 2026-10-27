import { TagIcon } from 'lucide-react'
import React from 'react'

const Hero4 = () => {

  const card = [
    { icon: TagIcon, title: 'Product Development', description: 'We excel in the creation of cloud-based technical solutions that are developed with strong research and efficacious implementation of the well-planned strategies that can meet the requirements of the clients and customers.' },
    { icon: TagIcon, title: 'Talent Outsourcing', description: 'We serve the suffering businesses by providing them with sectional services to overcome the challenges, establish rewarding operational modules, and augment the pace of seamless progression.' },
    { icon: TagIcon, title: 'Training', description: 'We invite applications from aspiring professionals who are willing to enhance their practical knowledge and develop their careers in the industry. Our training modules are designed to upskill the aspirants on the practical front.' },
  ]

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 '>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full ">
        {card.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div key={index} className="relative bg-white p-8 w-full ">

              <div className="absolute top-6 left-6 w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center shadow-sm">
                <IconComponent className="w-8 h-8 text-indigo-600" />
              </div>

              <div className="pt-20">
                <h4 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">
                  {card.title}
                </h4>

                <p className="text-slate-600 text-base font-normal leading-9">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Hero4
