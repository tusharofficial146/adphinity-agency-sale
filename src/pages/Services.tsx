import React from 'react';
import { Bolt, Filter, Layers, BarChart3, Globe, Code2, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark">
            {/* Header */}
            <section className="pt-32 pb-20 border-b-2 border-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block px-4 py-1.5 mb-6 border-2 border-black bg-white dark:bg-neutral-800 rounded-full font-bold text-sm tracking-wide uppercase shadow-hard-sm transform -rotate-1">
                        🛠️ Our Capabilities
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
                        Tailored Digital <br />
                        <span className="text-primary">Solutions</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
                        From intelligent automation to high-conversion web experiences, we engineer the systems that power modern business growth.
                    </p>
                </div>
            </section>

            {/* Service Categories */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                    {/* Automation */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="w-16 h-16 bg-primary/20 border-2 border-black rounded flex items-center justify-center mb-8">
                                <Bolt className="w-8 h-8 text-primary-dark" />
                            </div>
                            <h2 className="text-4xl font-black uppercase mb-6">Workflow Automation</h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                                Eliminate repetitive tasks and human error. We build custom automated workflows that connect your apps and data, saving your team hundreds of hours per month.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Custom Zapier / Make Integrations', 'CRM Architecture & Data Sync', 'Automated Client Onboarding', 'Reporting & Dashboard Automation'].map((item) => (
                                    <li key={item} className="flex items-center font-bold">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex items-center font-bold text-lg underline decoration-2 underline-offset-4 hover:text-primary transition-colors">
                                Explore Automation Services
                            </a>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 rounded-xl"></div>
                            <div className="relative bg-white dark:bg-neutral-800 border-2 border-black rounded-xl p-8 shadow-hard aspect-square flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                <Layers className="w-32 h-32 text-neutral-200" />
                            </div>
                        </div>
                    </div>

                    {/* Growth Marketing */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                        <div className="order-last lg:order-first relative group">
                            <div className="absolute inset-0 bg-black -translate-x-4 translate-y-4 rounded-xl"></div>
                            <div className="relative bg-white dark:bg-neutral-800 border-2 border-black rounded-xl p-8 shadow-hard aspect-square flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                <BarChart3 className="w-32 h-32 text-neutral-200" />
                            </div>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-blue-100 border-2 border-black rounded flex items-center justify-center mb-8">
                                <Filter className="w-8 h-8 text-blue-600" />
                            </div>
                            <h2 className="text-4xl font-black uppercase mb-6">Growth Marketing</h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                                Data-driven strategies to acquire, retain, and monetize customers. We optimize every stage of your funnel for maximum ROI.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Paid Acquisition (Ads)', 'Conversion Rate Optimization', 'Email & SMS Marketing', 'Funnel Architecture'].map((item) => (
                                    <li key={item} className="flex items-center font-bold">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex items-center font-bold text-lg underline decoration-2 underline-offset-4 hover:text-blue-600 transition-colors">
                                View Growth Strategies
                            </a>
                        </div>
                    </div>

                    {/* Web Experience */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="w-16 h-16 bg-purple-100 border-2 border-black rounded flex items-center justify-center mb-8">
                                <Globe className="w-8 h-8 text-purple-600" />
                            </div>
                            <h2 className="text-4xl font-black uppercase mb-6">Web Experience</h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                                Your website is your best salesperson. We design and build high-performance, visually stunning sites that convert visitors into customers.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Custom Web Design & Development', 'Landing Page Optimization', 'CMS Implementation', 'Web Content Strategy'].map((item) => (
                                    <li key={item} className="flex items-center font-bold">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex items-center font-bold text-lg underline decoration-2 underline-offset-4 hover:text-purple-600 transition-colors">
                                See Concept Gallery
                            </a>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 rounded-xl"></div>
                            <div className="relative bg-white dark:bg-neutral-800 border-2 border-black rounded-xl p-8 shadow-hard aspect-square flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                <Code2 className="w-32 h-32 text-neutral-200" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-neutral-900 text-white relative overflow-hidden border-t-2 border-black">
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-8">Need something specific?</h2>
                    <p className="text-xl mb-12 text-neutral-400">
                        We build custom solutions for unique challenges. Let's discuss your specific needs.
                    </p>
                    <a href="/contact" className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white font-bold text-lg border-2 border-white shadow-[4px_4px_0px_0px_#ffffff] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#ffffff] neo-button rounded">
                        Book a Discovery Call
                        <ArrowUpRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Services;
