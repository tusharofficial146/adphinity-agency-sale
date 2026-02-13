import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark text-neutral-dark dark:text-white overflow-x-hidden selection:bg-primary selection:text-white">
            <div className="bg-grain"></div>
            <Navbar />
            <main className="flex-grow z-10 relative">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
