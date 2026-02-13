import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Fintech Dashboard",
        category: "Web App / Dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
        description: "Complete redesign of a financial analytics platform, improving user retention by 40%."
    },
    {
        title: "E-Commerce Growth",
        category: "Marketing Automation",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
        description: "Automated email flows and ad campaigns generating $2M in incremental revenue."
    },
    {
        title: "SaaS Onboarding",
        category: "UX Design",
        image: "https://images.unsplash.com/photo-1551434678-e076c223602b?auto=format&fit=crop&q=80&w=2070",
        description: "Streamlined onboarding flow reducing success friction and support tickets."
    },
    {
        title: "HealthTech Portal",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
        description: "HIPAA-compliant patient portal with seamless EHR integration."
    }
];

const Work: React.FC = () => {
    return (
        <div className="bg-white dark:bg-background-dark">
            <section className="pt-32 pb-20 border-b-2 border-black bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block px-4 py-1.5 mb-6 border-2 border-black bg-white dark:bg-neutral-800 rounded-full font-bold text-sm tracking-wide uppercase shadow-hard-sm transform rotate-1">
                        📂 Selected Works
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
                        Proof in the <br />
                        <span className="text-primary">Numbers</span>
                    </h1>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {projects.map((project, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative mb-6 overflow-hidden border-2 border-black rounded-xl shadow-hard group-hover:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300">
                                    <div className="aspect-video bg-neutral-200">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                    <div className="absolute top-4 right-4 bg-white border-2 border-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="text-xs font-bold uppercase tracking-wider border border-black px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">{project.category}</span>
                                    </div>
                                    <h3 className="text-2xl font-black uppercase mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Work;
