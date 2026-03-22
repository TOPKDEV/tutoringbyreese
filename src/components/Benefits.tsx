'use client';

import { motion } from 'framer-motion';

const benefits = [
    {
        number: '01',
        title: 'We find the actual gap',
        description: 'A lot of the time, the issue isn\'t the new material — it\'s something from a year or two ago that no one caught. We\'ll find it together, fill it in, and the rest starts making way more sense.',
    },
    {
        number: '02',
        title: 'I explain things your way',
        description: 'Visual learner? Need to talk it out? Everyone\'s different. I figure out how you learn best and adjust — not the other way around.',
    },
    {
        number: '03',
        title: 'I get the schedule thing',
        description: 'I\'m balancing AP classes, college apps, and everything else too. I know how packed your week is. We\'ll find times that actually work for you.',
    },
];

export function Benefits() {
    return (
        <section id="benefits" className="py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <p className="text-sm text-faint uppercase tracking-widest mb-4">
                        Why it works
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-text tracking-tight">
                        Tutoring that actually feels like help.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <span className="text-sm text-faint font-medium mb-4 block">
                                {benefit.number}
                            </span>
                            <h3 className="text-xl font-medium text-text mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-muted leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
