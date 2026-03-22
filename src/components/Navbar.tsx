'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Math Tutoring', href: '#math-tutoring' },
    { name: 'SAT Prep', href: '#sat-prep' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled ? 'bg-base/90 backdrop-blur-md border-b border-edge py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-lg font-semibold tracking-tight text-text">
                    Tutoring By Reese
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm text-muted hover:text-text transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#sat-prep"
                        className="text-sm bg-text hover:bg-text/80 text-base px-5 py-2 rounded-lg font-medium transition-colors"
                    >
                        Get started
                    </Link>
                </div>

                <button
                    className="md:hidden p-2 text-muted"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-base border-b border-edge overflow-hidden"
                    >
                        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-muted hover:text-text py-2 block transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#sat-prep"
                                className="bg-text text-base text-center py-3 rounded-lg font-medium mt-2 block"
                                onClick={() => setIsOpen(false)}
                            >
                                Get started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
