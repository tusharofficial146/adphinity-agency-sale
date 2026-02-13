import React from 'react';
import { ArrowRight, CheckCircle2, Users } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark">
            <section className="pt-32 pb-20 border-b-2 border-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block px-4 py-1.5 mb-6 border-2 border-black bg-white dark:bg-neutral-800 rounded-full font-bold text-sm tracking-wide uppercase shadow-hard-sm transform -rotate-1">
                        👋 Who We Are
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
                        Builders of the <br />
                        <span className="text-primary">Next Web</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
                        Adphinity is a collective of engineers, designers, and strategists obsessed with performance. We don't just build websites; we build growth engines.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b-2 border-black bg-white dark:bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 border-2 border-black translate-x-4 translate-y-4 rounded-xl bg-neutral-100 dark:bg-neutral-800"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                                alt="Team working"
                                className="relative rounded-xl border-2 border-black shadow-hard z-10"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black uppercase mb-6">Our Philosophy</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Performance First</h3>
                                        <p className="text-neutral-600 dark:text-neutral-300">Speed is a feature. We optimize every pixel and line of code for maximum velocity.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Data Driven</h3>
                                        <p className="text-neutral-600 dark:text-neutral-300">We don't guess. We test, measure, and iterate based on real user data.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Transparency</h3>
                                        <p className="text-neutral-600 dark:text-neutral-300">No black boxes. You own your data, your code, and your strategy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team CTA */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <Users className="w-16 h-16 mx-auto mb-6 text-black" />
                    <h2 className="text-4xl md:text-5xl font-black mb-8 text-black">JOIN THE TEAM</h2>
                    <p className="text-xl mb-12 text-white/90 font-medium">
                        We're always looking for exceptional talent. If you're obsessed with quality, let's talk.
                    </p>
                    <a href="/careers" className="inline-flex justify-center items-center px-8 py-4 bg-black text-white font-bold text-lg border-2 border-white shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#ffffff] neo-button rounded">
                        View Openings
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
