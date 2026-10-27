import { TagPlusIcon } from 'lucide-react';
import React from 'react'

const Hero5 = () => {

    const rowsData = [
        { icon: TagPlusIcon, description: "Making proactive research to understand the market demands." },
        { icon: TagPlusIcon, description: "Identifying the project's potential, loopholes, associated risks, and development modules." },
        { icon: TagPlusIcon, description: "Consultations between the teams and finalizing the plan of execution." },
        { icon: TagPlusIcon, description: "Allocating the responsibilities to the team members and assigning individual goals." },
        { icon: TagPlusIcon, description: "Initiating the ideation process and working towards the Minimum Viable Product." },
        { icon: TagPlusIcon, description: "Making relentless attempts to ensure the development of a successful business." },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-white p-8 md:p-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left */}
                    <div className="flex justify-center text-left lg:h-full lg:sticky lg:top-8">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Working <br /> Mechanism
                        </h1>
                    </div>

                    {/* Right */}
                    <div>
                        <div className="mb-6">
                            <p className="text-slate-600 text-base md:text-lg leading-relaxed tracking-wide">
                                We have a number of successful organizations under our belt that are comprehensively designed and developed by our skilled team. Our working methodologies encompass the integration of sectional development and extensive planning. Our working protocols include, but are not limited to, the following stages of development:
                            </p>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <tbody>
                                    {rowsData.map((item, index) => {
                                        const IconComponent = item.icon;

                                        return (
                                            <tr key={index} className="border-none">
                                                <td className="py-4 pr-6 align-top w-20">
                                                    <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shadow-sm">
                                                        <IconComponent className="w-6 h-6 text-indigo-600" />
                                                    </div>
                                                </td>
                                                <td className="py-4 align-middle">
                                                    <p className="text-slate-600 text-sm md:text-base leading-relaxed tracking-normal">
                                                        {item.description}
                                                    </p>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero5
