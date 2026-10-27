import { Tag } from 'lucide-react'
import React from 'react'

const Hero3 = () => {

    const cards = [
        "Effectual Brand Development",
        "Developing Accounting Solutions",
        "Impeccable Business Management",
        "Upskilling the Workforce",
        "Mastery in Technology"
    ];

    return (
        <div className="w-full py-16 px-6 lg:px-16 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12">

                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center">
                    Units of our Prowess
                </h2>


                <div className="flex flex-wrap justify-center gap-4 w-full max-w-6xl mx-auto">
                    {cards.map((title, index) => (
                        <div key={index} className="p-6 flex flex-col justify-between h-40 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]">
                            <div className="flex justify-center text-orange-500">
                                <Tag className="w-10 h-10" />
                            </div>

                            <div className="flex-1 flex items-center justify-center">
                                <h5 className="text-base font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
                                    {title}
                                </h5>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Hero3