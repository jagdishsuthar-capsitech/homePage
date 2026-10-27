import React from 'react'
import { blogItems } from '../../assets/assets';

const Blogs = () => {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto bg-[#f9f9f9]">

            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                    Stay Updated, Stay Aware
                </h1>
                <a href="/" target="_blank" className="text-sm md:text-base font-semibold text-slate-600 hover:text-red-500 transition-colors">
                    View all blog
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-visible border border-slate-100 flex flex-col">

                        <div className="relative overflow-visible">
                            <a href={item.url} target="_blank" className="block overflow-hidden rounded-t-lg">
                                <img src={item.img} alt={item.title} className="w-full h-auto" />
                            </a>

                            <div className="absolute left-5 bottom-0 translate-y-1/2 z-20">
                                <span className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-2">
                                    {item.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-5 pt-8 flex flex-col grow">
                            <a href={item.url} target="_blank" className="block mb-4">
                                <h3 className="text-lg font-bold text-slate-900 hover:text-red-500 transition-colors max-w-45 leading-snug">
                                    {item.title}
                                </h3>
                            </a>

                            <a href={item.url} target="_blank" className="text-slate-600 hover:text-red-500 font-medium text-sm mt-auto">
                                Read more
                            </a>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}

export default Blogs
