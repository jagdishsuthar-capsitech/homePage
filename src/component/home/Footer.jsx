import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {

    const logos = ['1', '2', '3', '4'];

    const company = ['About', 'Service', 'Career', 'CIT', 'Blog', 'Contact'];

    const services = [
        'Product Management',
        'Project Management',
        'Accounting Solution',
        'IT Training',
        'Human Resource Outsourcing'
    ];

    return (
        <footer className="w-full bg-white text-gray-700">
            <div className="bg-red-500 text-white py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
                        <div className="w-full lg:w-1/2">
                            <span className="tracking-wider text-yellow-400 font-medium text-sm sm:text-base">Let's talk</span>
                            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
                                Let's build something<br className="hidden sm:inline" />
                                awesome together!
                            </h1>
                        </div>
                        <div className="w-full lg:w-auto lg:text-right flex">
                            <a href="/" className="inline-block text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 border-2 lg:border-transparent hover:border-white rounded-full transition-all duration-300 text-sm sm:text-base">
                                Contact us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Links & Info */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 lg:py-16">

                    {/* Logo */}
                    <div>
                        <a href="/">
                            <img src={assets.logo} alt="Logo" className="h-10 mb-4 object-contain" />
                        </a>
                        <p className="my-4 text-sm sm:text-base leading-relaxed">
                            We are a web development company specialized in creating websites, applications and software for audiences worldwide.
                        </p>
                        <div className="flex items-center flex-wrap gap-2 mt-4">
                            {logos.map((item, index) => (
                                <a key={index} href="#" className="bg-white text-gray-500 border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-200">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h5 className="text-lg sm:text-xl font-semibold mb-4 lg:mb-5 text-gray-900">Company</h5>
                        <ul className="m-0 p-0 space-y-2.5">
                            {company.map((link, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-red-500 inline-block shrink-0"></span>
                                    <a href={`/${link.toLowerCase()}`} className="hover:text-red-500 transition-colors text-sm sm:text-base">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h5 className="text-lg sm:text-xl font-semibold mb-4 lg:mb-5 text-gray-900">Our Services</h5>
                        <ul className="m-0 p-0 space-y-2.5">
                            {services.map((service, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-red-500 inline-block shrink-0"></span>
                                    <a href="#" className="hover:text-red-500 transition-colors text-sm sm:text-base">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="text-lg sm:text-xl font-semibold mb-4 lg:mb-5 text-gray-900">Contact Information</h5>
                        <p className="leading-6 text-sm sm:text-base">
                            H-299, 3rd Phase, <br />
                            RIICO Industrial Area, <br />
                            Boranada, Jodhpur - 342012 <br />
                            (Raj) INDIA <br />
                        </p>
                        <hr className="my-4 border-gray-200" />
                        <p className="leading-7 mb-0 text-sm sm:text-base">
                            Or email us on <br />
                            <a href="mailto:hr@capsitect.com" className="font-bold border-b-2 border-red-500 hover:text-red-500">
                                hr@capsitect.com
                            </a> <br />
                            <a href="tel:+917976915860" className="font-bold border-b-2 border-red-500 hover:text-red-500 inline-block mt-1">
                                +91 79769 15860
                            </a>
                        </p>
                    </div>

                </div>
            </div>

            {/* Bar */}
            <div className="bg-gray-100 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-gray-600 gap-3 text-center md:text-left">
                    <p className="m-0">
                        © Copyright All Rights Reserved 2013 - {new Date().getFullYear()}
                        <span className="mx-2 sm:mx-3">|</span>
                        <span className="block sm:inline">Capsitech IT Services Private Limited</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                        <a href="/terms" className="hover:text-red-500 transition-colors">Terms & Conditions</a>
                        <span>|</span>
                        <a href="/terms" className="hover:text-red-500 transition-colors">Cookies</a>
                        <span>|</span>
                        <a href="/privacy-policy" className="hover:text-red-500 transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
