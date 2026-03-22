'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Claudia Z.',
        context: 'Parent',
        quote: 'Not only has Reese\'s tutoring helped my daughter improve her grade, but her affordable prices and flexible scheduling makes her service extremely convenient.',
    },
    {
        name: 'Nathea C.',
        context: 'Student',
        quote: 'I am a visual learner, and she is great at accommodating to my learning style. After each session I understand the topics much more than I did before.',
    },
    {
        name: 'Cybelle M.',
        context: 'Student',
        quote: 'Reese comes prepared for each lesson, and provides me with extra notes that are very helpful.',
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 md:py-28 bg-surface">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <p className="text-sm text-faint uppercase tracking-widest mb-4">
                        Real reviews
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-text tracking-tight">
                        Don&apos;t take my word for it.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="bg-base rounded-lg p-8 border border-edge"
                        >
                            <p className="text-muted leading-relaxed mb-6">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>
                            <div>
                                <p className="font-medium text-text text-sm">
                                    {testimonial.name}
                                </p>
                                <p className="text-sm text-faint">
                                    {testimonial.context}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
