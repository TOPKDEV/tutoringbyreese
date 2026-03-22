'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: '1470', label: 'SAT Score' },
    { value: '100+', label: 'Sessions Taught' },
    { value: '4.0', label: 'GPA' },
    { value: '$30', label: 'Starting at /hr' },
];

export function SocialProof() {
    return (
        <section className="py-10 border-y border-edge bg-surface">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
                >
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <span className="block text-2xl md:text-3xl font-serif font-medium text-text">
                                {stat.value}
                            </span>
                            <span className="text-sm text-faint mt-1 block">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
