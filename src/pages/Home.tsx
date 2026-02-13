import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Bolt, Brush, Megaphone, BrainCircuit, Activity } from 'lucide-react';

const Home: React.FC = () => {
    return (
        <div className="">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                {/* Abstract Shapes Background */}
                <div className="absolute top-20 right-0 -z-10 opacity-30 pointer-events-none">
                    <div className="w-96 h-96 bg-primary rounded-full blur-3xl blob-anim mix-blend-multiply dark:mix-blend-normal"></div>
                </div>
                <div className="absolute bottom-0 left-10 -z-10 opacity-20 pointer-events-none">
                    <div className="w-72 h-72 bg-purple-500 rounded-full blur-3xl blob-anim mix-blend-multiply dark:mix-blend-normal" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <div className="inline-block px-4 py-1.5 mb-6 border-2 border-black bg-white dark:bg-neutral-800 rounded-full font-bold text-sm tracking-wide uppercase shadow-hard-sm transform -rotate-1">
                                🚀 The Future of Growth is Here
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-8 text-black dark:text-white">
                                AI-POWERED <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">GROWTH</span> <br />
                                SYSTEMS
                            </h1>
                            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl mb-10 font-medium leading-relaxed border-l-4 border-primary pl-6">
                                We build the automated engines that scale modern businesses. Stop manual grinding, start algorithmic scaling.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white font-bold text-lg border-2 border-black shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000000] neo-button rounded">
                                    Get Free Consultation
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link to="/work" className="inline-flex justify-center items-center px-8 py-4 bg-white dark:bg-neutral-800 text-black dark:text-white font-bold text-lg border-2 border-black shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000000] neo-button rounded">
                                    View Case Studies
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-4 relative hidden lg:block">
                            {/* 3D Organic Object Placeholder */}
                            <div className="relative w-full aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 border-2 border-black rounded-3xl shadow-hard overflow-hidden">
                                <img
                                    alt="Abstract Art"
                                    className="object-cover w-full h-full mix-blend-overlay opacity-80"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsrBDG_r_1N3_iXLZC_QMIjKOL6myhxOvUZnSAcgiaObrzFkpwazb_BGlMVtRtsWgR107Oriy-D-p-Sw9TAj5QgBJHD2vmZ22iYq8F9oLTr8dtekOOGplzSkOTzLz-6zhJ8lBcX4Y6trR1DeIDtGvIuPEu7CZgVqBcVl_e1cksqLMCPpdHKQaHTlAY2q00tMu3fEAVHJ8CiF10fD3Xrni-NWTDL2P1v8Qg3HzfqlqJfj9Vi68Bbs9PcXRg-BSyE-JgxNxeFNQC3U63"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/90 backdrop-blur-sm p-6 border-2 border-black shadow-hard-sm max-w-[200px] text-center transform rotate-3">
                                        <span className="text-4xl font-black text-primary block mb-1">350%</span>
                                        <span className="text-xs font-bold uppercase tracking-wider">Average ROI Increase</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marquee Section */}
            <div className="border-y-2 border-black bg-primary overflow-hidden py-4 relative z-20">
                <div className="whitespace-nowrap flex animate-marquee">
                    <span className="text-2xl font-black text-white px-8 uppercase tracking-wider flex items-center">
                        Automation <Bolt className="mx-4 text-black w-6 h-6" />
                        Design <Brush className="mx-4 text-black w-6 h-6" />
                        Marketing <Megaphone className="mx-4 text-black w-6 h-6" />
                        Strategy <BrainCircuit className="mx-4 text-black w-6 h-6" />
                        AI Solutions <Activity className="mx-4 text-black w-6 h-6" />
                    </span>
                    <span className="text-2xl font-black text-white px-8 uppercase tracking-wider flex items-center">
                        Automation <Bolt className="mx-4 text-black w-6 h-6" />
                        Design <Brush className="mx-4 text-black w-6 h-6" />
                        Marketing <Megaphone className="mx-4 text-black w-6 h-6" />
                        Strategy <BrainCircuit className="mx-4 text-black w-6 h-6" />
                        AI Solutions <Activity className="mx-4 text-black w-6 h-6" />
                    </span>
                    <span className="text-2xl font-black text-white px-8 uppercase tracking-wider flex items-center">
                        Automation <Bolt className="mx-4 text-black w-6 h-6" />
                        Design <Brush className="mx-4 text-black w-6 h-6" />
                        Marketing <Megaphone className="mx-4 text-black w-6 h-6" />
                        Strategy <BrainCircuit className="mx-4 text-black w-6 h-6" />
                        AI Solutions <Activity className="mx-4 text-black w-6 h-6" />
                    </span>
                </div>
            </div>

            {/* Stats Section */}
            <section className="bg-white dark:bg-background-dark py-20 border-b-2 border-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black border-2 border-black shadow-hard bg-background-light dark:bg-neutral-900">
                        <div className="p-8 text-center hover:bg-primary/5 transition-colors">
                            <span className="block text-5xl md:text-6xl font-black text-primary mb-2">$10M+</span>
                            <span className="text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Revenue Generated</span>
                        </div>
                        <div className="p-8 text-center hover:bg-primary/5 transition-colors">
                            <span className="block text-5xl md:text-6xl font-black text-primary mb-2">150+</span>
                            <span className="text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Automations Built</span>
                        </div>
                        <div className="p-8 text-center hover:bg-primary/5 transition-colors">
                            <span className="block text-5xl md:text-6xl font-black text-primary mb-2">98%</span>
                            <span className="text-sm font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Client Retention</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 relative bg-background-light dark:bg-background-dark">
                {/* Decoration */}
                <div className="absolute right-0 top-1/4 w-32 h-32 border-4 border-black rounded-full opacity-10"></div>
                <div className="absolute left-10 bottom-10 w-16 h-16 bg-primary rounded-none transform rotate-45 opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Core Capabilities</h2>
                            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-xl">We don't just make things look good. We engineer systems that perform.</p>
                        </div>
                        <Link to="/services" className="text-primary font-black text-lg underline decoration-2 underline-offset-4 hover:text-black dark:hover:text-white transition-colors">View All Services</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <div className="group relative bg-white dark:bg-neutral-800 border-2 border-black p-8 rounded-lg shadow-hard hover:shadow-[8px_8px_0px_0px_#000000] hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 bg-primary/20 border-2 border-black rounded flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Bolt className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Workflow Automation</h3>
                            <p className="text-neutral-600 dark:text-neutral-300 mb-6">Cut manual tasks by 80%. We build custom Zapier & Make scenarios that connect your entire tech stack.</p>
                            <Link to="/services/automation" className="inline-flex items-center font-bold text-sm uppercase tracking-wide border-b-2 border-transparent group-hover:border-primary transition-all">
                                Explore Automation
                                <ArrowUpRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>

                        {/* Service Card 2 */}
                        <div className="group relative bg-white dark:bg-neutral-800 border-2 border-black p-8 rounded-lg shadow-hard hover:shadow-[8px_8px_0px_0px_#000000] hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-100 border-2 border-black rounded flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <Megaphone className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Growth Marketing</h3>
                            <p className="text-neutral-600 dark:text-neutral-300 mb-6">Data-driven acquisition campaigns. We optimize your funnel from impression to conversion.</p>
                            <Link to="/services/marketing" className="inline-flex items-center font-bold text-sm uppercase tracking-wide border-b-2 border-transparent group-hover:border-blue-500 transition-all">
                                See Strategies
                                <ArrowUpRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>

                        {/* Service Card 3 */}
                        <div className="group relative bg-white dark:bg-neutral-800 border-2 border-black p-8 rounded-lg shadow-hard hover:shadow-[8px_8px_0px_0px_#000000] hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 bg-purple-100 border-2 border-black rounded flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <BrainCircuit className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Web Experience</h3>
                            <p className="text-neutral-600 dark:text-neutral-300 mb-6">High-performance landing pages and sites designed to convert visitors into loyal customers.</p>
                            <Link to="/services/web" className="inline-flex items-center font-bold text-sm uppercase tracking-wide border-b-2 border-transparent group-hover:border-purple-500 transition-all">
                                View Examples
                                <ArrowUpRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - Added to mimic scrolling/length */}
            <section className="py-24 border-y-2 border-black bg-white dark:bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Our Process</h2>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">From chaos to clarity in three steps.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { number: "01", title: "Audit & Strategy", desc: "We dive deep into your current stack and data to find the bottlenecks." },
                            { number: "02", title: "Build & Automate", desc: "We deploy the systems, connect the APIs, and build the growth engines." },
                            { number: "03", title: "Scale & Optimize", desc: "We launch, test, and relentlessly refactor for maximum ROI." }
                        ].map((step, idx) => (
                            <div key={idx} className="relative p-8 border-2 border-black bg-background-light dark:bg-neutral-800 shadow-hard rounded-lg">
                                <span className="absolute -top-6 left-6 text-6xl font-black text-transparent text-stroke-2 text-stroke-black dark:text-stroke-white opacity-20">{step.number}</span>
                                <h3 className="text-2xl font-bold uppercase mb-4 mt-2 relative z-10">{step.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-300 relative z-10">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects (Grid Split) */}
            <section className="bg-white dark:bg-neutral-900 border-b-2 border-black">
                {/* Project 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-black">
                    <div className="p-12 lg:p-20 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-black">
                        <span className="text-primary font-black uppercase tracking-widest mb-4">Featured Case Study</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">SCALING FINTECH TO $50M ARR</h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-md">
                            We implemented a full-stack automation system for PayFlow, reducing customer onboarding time from 3 days to 4 minutes.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <span className="px-3 py-1 border-2 border-black rounded-full text-xs font-bold uppercase bg-neutral-100 dark:bg-neutral-800">Hubspot API</span>
                            <span className="px-3 py-1 border-2 border-black rounded-full text-xs font-bold uppercase bg-neutral-100 dark:bg-neutral-800">React</span>
                            <span className="px-3 py-1 border-2 border-black rounded-full text-xs font-bold uppercase bg-neutral-100 dark:bg-neutral-800">Data Enrichment</span>
                        </div>
                    </div>
                    <div className="relative min-h-[400px] bg-neutral-100 dark:bg-neutral-800 group overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
                            alt="Fintech Case Study"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0"></div>
                        <div className="absolute bottom-8 right-8">
                            <Link to="/work/payflow" className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-hard hover:scale-110 transition-transform">
                                <ArrowRight className="w-8 h-8 text-black" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Project 2 - Added to increase length */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative min-h-[400px] bg-neutral-100 dark:bg-neutral-800 group overflow-hidden order-2 lg:order-1 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
                            alt="E-Commerce Growth"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-blue-500/20 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0"></div>
                        <div className="absolute bottom-8 left-8">
                            <Link to="/work/fashion-co" className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-hard hover:scale-110 transition-transform">
                                <ArrowRight className="w-8 h-8 text-black" />
                            </Link>
                        </div>
                    </div>
                    <div className="p-12 lg:p-20 flex flex-col justify-center order-1 lg:order-2">
                        <span className="text-primary font-black uppercase tracking-widest mb-4">Featured Case Study</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">ECOMMERCE REVENUE ENGINE</h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-md">
                            Automated email flows and ad campaigns generating $2M in incremental revenue for a fashion retailer.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <span className="px-3 py-1 border-2 border-black rounded-full text-xs font-bold uppercase bg-neutral-100 dark:bg-neutral-800">Shopify</span>
                            <span className="px-3 py-1 border-2 border-black rounded-full text-xs font-bold uppercase bg-neutral-100 dark:bg-neutral-800">Klaviyo</span>
                            <span className="px-3 py-1 border-2 border-black rounded-full text-xs font-bold uppercase bg-neutral-100 dark:bg-neutral-800">Meta Ads</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials - Added to mimic scrolling */}
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 text-center">Trust</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-neutral-800 p-8 border-2 border-black shadow-hard rounded-lg">
                            <p className="text-lg font-medium mb-6">"Adphinity completely transformed our lead gen. We went from manual outreach to a fully automated machine."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-neutral-200 rounded-full border border-black"></div>
                                <div>
                                    <div className="font-bold">Alex Chen</div>
                                    <div className="text-sm text-neutral-500">CTO, FinTech Co</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-neutral-800 p-8 border-2 border-black shadow-hard rounded-lg">
                            <p className="text-lg font-medium mb-6">"The ROI was immediate. These guys know how to build systems that actually print money. Highly recommended."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-neutral-200 rounded-full border border-black"></div>
                                <div>
                                    <div className="font-bold">Sarah Jones</div>
                                    <div className="text-sm text-neutral-500">CMO, RetailBrand</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-neutral-800 p-8 border-2 border-black shadow-hard rounded-lg">
                            <p className="text-lg font-medium mb-6">"Their design team is on another level. Our new site looks incredible and converts 3x better than the old one."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-neutral-200 rounded-full border border-black"></div>
                                <div>
                                    <div className="font-bold">Mike Ross</div>
                                    <div className="text-sm text-neutral-500">Founder, StartupX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black mb-8">READY TO SCALE?</h2>
                    <p className="text-2xl mb-12 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300">Stop guessing. Start growing. Get your custom growth roadmap today.</p>
                    <form className="max-w-md mx-auto mb-8 relative">
                        <div className="relative">
                            <input
                                className="w-full px-6 py-4 bg-white dark:bg-neutral-800 border-2 border-black rounded shadow-hard focus:outline-none focus:ring-0 focus:border-primary text-lg placeholder-neutral-400"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white font-bold border-2 border-black rounded hover:bg-primary-dark transition-colors" type="button">
                                JOIN
                            </button>
                        </div>
                    </form>
                    <p className="text-sm text-neutral-500 font-medium">No spam. Only growth tactics.</p>
                </div>

                <div className="absolute left-10 top-20 w-24 h-24 border-4 border-black rounded-full opacity-20"></div>
                <div className="absolute right-20 bottom-20 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20"></div>
            </section>
        </div>
    );
};

export default Home;
