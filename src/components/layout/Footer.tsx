import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t-2 border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-b border-neutral-800 pb-12">
                    <div className="md:col-span-5">
                        <Link to="/" className="block text-4xl font-black mb-6">ADPHINITY</Link>
                        <p className="text-neutral-400 text-lg mb-8 max-w-sm">
                            Combining creative strategy with technical automation to build unstoppable growth engines.
                        </p>
                        <div className="flex space-x-4">
                            {['LN', 'TW', 'IG'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
                                >
                                    <span className="text-xs font-bold">{social}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Company</h4>
                            <ul className="space-y-4">
                                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                                <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                                <li><Link to="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
                                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Services</h4>
                            <ul className="space-y-4">
                                <li><Link to="/services" className="hover:text-primary transition-colors">Automation</Link></li>
                                <li><Link to="/services" className="hover:text-primary transition-colors">Web Design</Link></li>
                                <li><Link to="/services" className="hover:text-primary transition-colors">SEO & Content</Link></li>
                                <li><Link to="/services" className="hover:text-primary transition-colors">Paid Media</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Resources</h4>
                            <ul className="space-y-4">
                                <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                                <li><Link to="/work" className="hover:text-primary transition-colors">Case Studies</Link></li>
                                <li><Link to="/community" className="hover:text-primary transition-colors">Community</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8">
                    <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Adphinity Inc. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="text-sm text-neutral-500 hover:text-white">Privacy Policy</Link>
                        <Link to="/terms" className="text-sm text-neutral-500 hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
