import React, { useState, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { Mail, Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <header className='bg-white py-5 shadow-sm md:shadow-none relative z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
                {/* Logo */}
                <div>
                    <a href="/">
                        <img src={assets.logo} alt="logo" width={180} className="md:w-56" />
                    </a>
                </div>

                {/* Desktop Nav */}
                <nav className='hidden md:block'>
                    <ul className='flex items-center gap-7 text-base font-medium text-gray-800'>
                        <li className='hover:text-red-600 transition-colors'><a href="#">Home</a></li>
                        <li className='hover:text-red-600 transition-colors'><a href="#">About</a></li>
                        <li className='hover:text-red-600 transition-colors'><a href="#">Services</a></li>
                        <li className='hover:text-red-600 transition-colors'><a href="#">Career</a></li>
                        <li className='hover:text-red-600 transition-colors'><a href="#">Blogs</a></li>
                        <li className='hover:text-red-600 transition-colors'><a href="#">Contact</a></li>
                        <li>
                            <a href="mailto:hr@capsitech.com" className='text-red-600 hover:opacity-85 flex items-center gap-2 font-medium transition-opacity'>
                                <Mail size={18} />
                                <span>hr@capsitech.com</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu */}
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-gray-700 hover:text-red-600 focus:outline-none transition-colors p-1' aria-label="Toggle Menu">
                        {/* {isOpen ? <X size={26} /> : <Menu size={26} />} */}
                        <Menu size={26} />
                    </button>
                </div>
            </div>

            {/* Mobile Panel */}
            <div className='md:hidden'>
                <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />

                {/* drawer */}
                <nav className={`fixed top-0 left-0 h-full w-full bg-white z-50 shadow-2xl py-6 px-6 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div>
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                            <span className="font-bold text-lg text-[#051e56]">
                                <img src={assets.logo} alt="logo" width={180} className="md:w-56" />
                            </span>
                            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500 hover:text-red-600 transition-colors" aria-label="Close Menu">
                                <X size={24} />
                            </button>
                        </div>

                        <ul className='flex flex-col gap-6 text-lg font-medium text-gray-800'>
                            <li className='hover:text-red-600 transition-colors'><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
                            <li className='hover:text-red-600 transition-colors'><a href="#" onClick={() => setIsOpen(false)}>About</a></li>
                            <li className='hover:text-red-600 transition-colors'><a href="#" onClick={() => setIsOpen(false)}>Services</a></li>
                            <li className='hover:text-red-600 transition-colors'><a href="#" onClick={() => setIsOpen(false)}>Career</a></li>
                            <li className='hover:text-red-600 transition-colors'><a href="#" onClick={() => setIsOpen(false)}>Blogs</a></li>
                            <li className='hover:text-red-600 transition-colors'><a href="#" onClick={() => setIsOpen(false)}>Contact</a></li>
                            <li className='hover:text-red-600 transition-colors'>
                                <a href="mailto:hr@capsitech.com" onClick={() => setIsOpen(false)} className='text-red-600 hover:opacity-85 flex items-center gap-2 font-medium transition-opacity'>
                                    <Mail size={18} />
                                    <span>hr@capsitech.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar