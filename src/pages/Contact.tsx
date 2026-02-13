import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent! (Mock)');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <section className="pt-32 pb-20 border-b-2 border-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 border-2 border-black bg-white dark:bg-neutral-800 rounded-full font-bold text-sm tracking-wide uppercase shadow-hard-sm transform rotate-2">
                        📬 Get in Touch
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
                        Let's Build <br />
                        <span className="text-primary">Something Great</span>
                    </h1>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-black uppercase mb-8">Contact Info</h2>
                            <div className="space-y-8 text-lg">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-white border-2 border-black rounded flex items-center justify-center shrink-0 shadow-hard-sm">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Email Us</h3>
                                        <p className="text-neutral-600 dark:text-neutral-400">hello@adphinity.agency</p>
                                        <p className="text-neutral-600 dark:text-neutral-400">support@adphinity.agency</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-white border-2 border-black rounded flex items-center justify-center shrink-0 shadow-hard-sm">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Call Us</h3>
                                        <p className="text-neutral-600 dark:text-neutral-400">+1 (555) 123-4567</p>
                                        <p className="text-neutral-500 text-sm">Mon-Fri, 9am - 6pm EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-white border-2 border-black rounded flex items-center justify-center shrink-0 shadow-hard-sm">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Visit Us</h3>
                                        <p className="text-neutral-600 dark:text-neutral-400">
                                            123 Growth Ave, Suite 400<br />
                                            New York, NY 10001
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-8 bg-neutral-100 dark:bg-neutral-800 border-2 border-black rounded-lg">
                                <h3 className="font-bold text-xl mb-4">Ready to start?</h3>
                                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                                    Check out our pricing packages or schedule a free discovery call.
                                </p>
                                <a href="/services" className="text-primary font-bold underline decoration-2 underline-offset-4 hover:text-black dark:hover:text-white">View Services</a>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white dark:bg-neutral-900 border-2 border-black p-8 md:p-12 rounded-xl shadow-hard">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold uppercase mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-background-light dark:bg-neutral-800 border-2 border-black rounded focus:outline-none focus:border-primary focus:shadow-[4px_4px_0px_0px_#ff6933] transition-all"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold uppercase mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-background-light dark:bg-neutral-800 border-2 border-black rounded focus:outline-none focus:border-primary focus:shadow-[4px_4px_0px_0px_#ff6933] transition-all"
                                        placeholder="john@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold uppercase mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 bg-background-light dark:bg-neutral-800 border-2 border-black rounded focus:outline-none focus:border-primary focus:shadow-[4px_4px_0px_0px_#ff6933] transition-all"
                                        placeholder="Tell us about your project..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-primary text-white font-bold text-lg border-2 border-black shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000000] neo-button rounded flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
