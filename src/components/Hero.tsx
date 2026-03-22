'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function NotebookGraphic() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full max-w-sm mx-auto md:mx-0"
        >
            <div className="relative">
                <div className="absolute inset-2 bg-text/5 rounded-lg blur-xl" />
                <div className="relative bg-white rounded-lg shadow-sm border border-edge overflow-hidden">
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-edge" />
                    <div className="absolute left-5 top-0 bottom-0 flex flex-col justify-evenly py-4">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="w-3 h-3 rounded-full border-2 border-edge bg-base -ml-1" />
                        ))}
                    </div>
                    <div className="h-12 border-b border-edge/60" />
                    <div className="pl-10 pr-6 py-4 space-y-0">
                        <div className="border-b border-edge/30 py-3">
                            <span className="text-text/70 font-serif italic text-sm">f(x) = 2x&sup2; + 3x - 5</span>
                        </div>
                        <div className="border-b border-edge/30 py-3">
                            <span className="text-text/70 font-serif italic text-sm">f&apos;(x) = 4x + 3</span>
                        </div>
                        <div className="border-b border-edge/30 py-3">
                            <span className="text-text/70 font-serif italic text-sm">set f&apos;(x) = 0</span>
                        </div>
                        <div className="border-b border-edge/30 py-3">
                            <span className="text-text/70 font-serif italic text-sm">x = -3/4 &nbsp; &#10003;</span>
                        </div>
                        <div className="border-b border-edge/30 py-3" />
                        <div className="border-b border-edge/30 py-3" />
                        <div className="border-b border-edge/30 py-3" />
                        <div className="border-b border-edge/30 py-3" />
                    </div>
                </div>
                <div className="absolute -bottom-3 -right-3 rotate-[-30deg]">
                    <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-text/60 rotate-45 -mr-px" />
                        <div className="w-20 h-3 bg-[#f4c542] rounded-r-sm" />
                        <div className="w-4 h-3 bg-[#e8a0a0] rounded-r-sm" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function Hero() {
    return (
        <section className="pt-32 pb-16 md:pt-44 md:pb-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-center md:gap-16 lg:gap-24">
                    <div className="max-w-2xl md:flex-1">
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm text-faint uppercase tracking-widest mb-6"
                        >
                            Math tutoring &amp; SAT prep
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.08 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-text leading-[1.1] tracking-tight mb-8"
                        >
                            You&apos;re not bad at math.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.16 }}
                            className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-xl"
                        >
                            I&apos;m Reese, a high school junior who tutors math and SAT prep. I&apos;ve been where you are &mdash; staring at a textbook at midnight wondering what went wrong. I got through it, and I can help you do the same.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.24 }}
                            className="flex flex-col sm:flex-row items-start gap-4"
                        >
                            <Link
                                href="https://calendar.app.google/4tNZzZV9gwcjhVEu5"
                                target="_blank"
                                className="bg-text hover:bg-text/80 text-base px-7 py-3.5 rounded-lg font-medium transition-colors flex items-center gap-2"
                            >
                                Book a free intro call <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="#sat-prep"
                                className="text-muted hover:text-text px-4 py-3.5 font-medium transition-colors"
                            >
                                See SAT summer program
                            </Link>
                        </motion.div>
                    </div>

                    <div className="hidden md:block md:flex-shrink-0 md:w-[320px] lg:w-[360px]">
                        <NotebookGraphic />
                    </div>
                </div>
            </div>
        </section>
    );
}
