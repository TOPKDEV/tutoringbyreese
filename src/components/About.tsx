'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
    return (
        <section id="about" className="py-14 md:py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="aspect-[4/3] md:aspect-[4/5] bg-surface rounded-lg overflow-hidden relative">
                            <Image
                                src="/reese.jpeg"
                                alt="Reese Kicklighter"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:pt-8"
                    >
                        <p className="text-sm text-faint uppercase tracking-widest mb-4">
                            About me
                        </p>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-text tracking-tight mb-8">
                            I&apos;m Reese Kicklighter.
                        </h2>

                        <div className="space-y-5 text-muted leading-relaxed">
                            <p>
                                I&apos;m a junior dual-enrolled at a College Academy &mdash; taking college classes while still in high school. I was fortunate enough to score a 1470 on the SAT, and I&apos;ve managed to keep straight A&apos;s so far.
                            </p>
                            <p>
                                But honestly, that&apos;s not really the point. What I think helps most is that I still remember what it feels like to not get it. Staring at a problem set at 11pm thinking &ldquo;I have no idea what&apos;s going on.&rdquo; A lot of tutors have been at this so long they&apos;ve forgotten that feeling.
                            </p>
                            <p>
                                I try to figure out where you actually got lost &mdash; sometimes it&apos;s something from a year or two ago &mdash; and we work through it together. That&apos;s usually when things start clicking.
                            </p>
                        </div>

                        <div className="mt-10 flex gap-10">
                            <div>
                                <span className="block text-3xl font-serif font-medium text-text">1470</span>
                                <span className="text-sm text-faint">SAT score</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-serif font-medium text-text">100+</span>
                                <span className="text-sm text-faint">Sessions taught</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
