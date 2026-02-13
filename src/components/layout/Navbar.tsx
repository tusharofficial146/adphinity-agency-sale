import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-40 bg-background-light dark:bg-background-dark border-b-2 border-black w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center space-x-6">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img src="/adphinity_logo.png" alt="Adphinity Logo" className="h-12 w-auto" />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center h-10">
                            <div className="w-[2px] h-full bg-black mx-4"></div>
                            <Link to="/work" className="px-4 py-2 font-bold hover:text-primary transition-colors">WORK</Link>
                            <div className="w-[2px] h-4 bg-black/20"></div>
                            <Link to="/services" className="px-4 py-2 font-bold hover:text-primary transition-colors">SERVICES</Link>
                            <div className="w-[2px] h-4 bg-black/20"></div>
                            <Link to="/about" className="px-4 py-2 font-bold hover:text-primary transition-colors">ABOUT</Link>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Link
                            to="/contact"
                            className="hidden md:block bg-white dark:bg-neutral-800 text-black dark:text-white border-2 border-black px-6 py-2.5 font-bold shadow-hard hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] transition-all rounded neo-button"
                        >
                            Start Project
                        </Link>
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background-light dark:bg-background-dark border-b-2 border-black absolute w-full left-0 top-20">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/work" className="block px-3 py-2 text-base font-bold hover:text-primary" onClick={() => setIsOpen(false)}>WORK</Link>
                        <Link to="/services" className="block px-3 py-2 text-base font-bold hover:text-primary" onClick={() => setIsOpen(false)}>SERVICES</Link>
                        <Link to="/about" className="block px-3 py-2 text-base font-bold hover:text-primary" onClick={() => setIsOpen(false)}>ABOUT</Link>
                        <Link to="/contact" className="block w-full text-left px-3 py-2 text-base font-bold hover:text-primary" onClick={() => setIsOpen(false)}>START PROJECT</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
