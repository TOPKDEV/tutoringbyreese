'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const subjects = [
    'Elementary Math',
    'Middle School Math',
    'Algebra',
    'Geometry',
];

export function MathTutoring() {
    return (
        <section id="math-tutoring" className="py-14 md:py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-sm text-faint uppercase tracking-widest mb-4">
                            Math Tutoring
                        </p>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-text tracking-tight mb-6">
                            Get unstuck in math.
                        </h2>
                        <p className="text-muted leading-relaxed mb-8">
                            Whether you&apos;re in elementary school or working through high school geometry, I&apos;ll meet you exactly where you are. We&apos;ll find the gap, fill it in, and everything else starts clicking.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {subjects.map((subject) => (
                                <span
                                    key={subject}
                                    className="bg-surface text-text text-sm px-4 py-2 rounded-lg border border-edge"
                                >
                                    {subject}
                                </span>
                            ))}
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-serif font-medium text-text">$30</span>
                            <span className="text-faint ml-1">/hr</span>
                        </div>

                        <ul className="space-y-3 text-muted text-sm mb-8">
                            <li>1-on-1 over Zoom or Google Meet</li>
                            <li>Flexible scheduling &mdash; we&apos;ll find times that work</li>
                            <li>Session notes sent after every session</li>
                        </ul>

                        <Link
                            href="https://calendar.app.google/ZNECds3AgsXVxkG46"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-text hover:bg-text/80 text-base px-7 py-3.5 rounded-lg font-medium transition-colors"
                        >
                            Book a session <ArrowRight size={16} />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="bg-white rounded-lg border border-edge p-4 overflow-hidden">
                            <iframe
                                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1XXpYuRIVADudqNh0sNC9zwRgtF5CXCd6b4xXbrXPKJqcfhD8t7Ckok5GAcYCntEMXIhwI2ZLm?gv=true"
                                style={{ border: 0 }}
                                width="100%"
                                height="600"
                                className="rounded-lg"
                                title="Book a session with Reese"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
