import React from 'react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        price: "$2,500",
        period: "/mo",
        description: "Perfect for small businesses looking to automate core processes.",
        features: [
            "Custom Workflow Automation (Up to 3)",
            "Basic CRM Integration",
            "Monthly Performance Report",
            "Email Support"
        ],
        cta: "Get Started",
        popular: false
    },
    {
        name: "Growth",
        price: "$5,000",
        period: "/mo",
        description: "Scale your operations with advanced automation and marketing.",
        features: [
            "Unlimited Workflow Automations",
            "Advanced CRM & Data Sync",
            "Paid Ad Campaign Management",
            "Weekly Strategy Calls",
            "Priority Support"
        ],
        cta: "Scale Now",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Full-scale digital transformation for large organizations.",
        features: [
            "Dedicated Engineering Team",
            "Custom Web App Development",
            "Enterprise Security & Compliance",
            "24/7 SLA Support",
            "On-premise Deployment Options"
        ],
        cta: "Contact Sales",
        popular: false
    }
];

const Pricing: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark">
            <section className="pt-32 pb-20 border-b-2 border-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 border-2 border-black bg-white dark:bg-neutral-800 rounded-full font-bold text-sm tracking-wide uppercase shadow-hard-sm transform -rotate-2">
                        💎 Transparent Pricing
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
                        Invest in <br />
                        <span className="text-primary">Growth</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                        Simple, transparent pricing. No hidden fees. Just ROI.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-white dark:bg-neutral-800 border-2 border-black rounded-xl p-8 shadow-hard transition-transform duration-300 hover:-translate-y-2 ${plan.popular ? 'md:-mt-8 md:mb-8 border-primary ring-4 ring-primary/20 z-10' : ''}`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full font-bold text-sm uppercase tracking-wide border-2 border-black shadow-sm">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-black uppercase mb-2">{plan.name}</h3>
                                <div className="flex items-end mb-4">
                                    <span className="text-4xl font-black">{plan.price}</span>
                                    <span className="text-neutral-500 font-bold mb-1 ml-1">{plan.period}</span>
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-300 mb-8 min-h-[3rem]">
                                    {plan.description}
                                </p>
                                <a
                                    href="/contact"
                                    className={`block w-full text-center py-4 font-bold text-lg border-2 border-black rounded shadow-hard-sm hover:translate-y-[-2px] hover:shadow-hard transition-all neo-button ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-white dark:bg-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-600'}`}
                                >
                                    {plan.cta}
                                </a>

                                <div className="mt-8 space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="mt-0.5 min-w-[1.25rem]">
                                                <Check className="w-5 h-5 text-primary" />
                                            </div>
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section Placeholder */}
            <section className="py-24 border-t-2 border-black bg-white dark:bg-neutral-900">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-black uppercase mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <details className="group border-2 border-black rounded-lg bg-background-light dark:bg-neutral-800 open:shadow-hard transition-all">
                            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg">
                                <span>How long does onboarding take?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-neutral-600 dark:text-neutral-300 p-6 pt-0 leading-relaxed">
                                Typically 2-3 weeks. We start with a deep-dive audit of your current stack and processes, then move rapidly to implementation.
                            </div>
                        </details>
                        <details className="group border-2 border-black rounded-lg bg-background-light dark:bg-neutral-800 open:shadow-hard transition-all">
                            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg">
                                <span>Do you work with startups?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-neutral-600 dark:text-neutral-300 p-6 pt-0 leading-relaxed">
                                Yes! We love high-growth startups. Our "Growth" package is specifically designed for teams scaling from Seed to Series A.
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
