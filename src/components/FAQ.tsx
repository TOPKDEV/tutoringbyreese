'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'What subjects do you cover?',
        answer: 'For math tutoring: Elementary Math, Middle School Math, Algebra, and Geometry. For SAT prep: both the math and reading/writing sections. If you\'re not sure whether I can help with your specific class, just ask and I\'ll be honest.',
    },
    {
        question: 'How do sessions work?',
        answer: 'We meet over Zoom or Google Meet. I share my screen, we work through problems together, and I send you notes after so you can review on your own.',
    },
    {
        question: 'How long is each session?',
        answer: 'Math tutoring sessions are 1 hour. SAT prep sessions are 1.5 hours — you need the extra time to really work through test strategy.',
    },
    {
        question: 'What\'s the difference between a single SAT session and the summer program?',
        answer: 'Single sessions and 5-packs are great if you want targeted help on specific sections. The 8-week summer program is a full prep plan — 3 sessions a week, practice tests, a personalized study plan, and support between sessions. If you\'re serious about raising your score before the August SAT, the summer program is the move.',
    },
    {
        question: 'What happens in the free practice test before the summer program?',
        answer: 'The week before the program starts, you\'ll take a full-length practice SAT with me proctoring over Zoom. It\'s free and doesn\'t count toward your 24 sessions. I use your results to build a study plan that targets exactly where you need the most improvement.',
    },
    {
        question: 'How does the payment plan work for the summer program?',
        answer: 'The full program is $1,200, split into 4 payments of $300. You pay the first $300 to reserve your spot, and the remaining payments are spread over the 8 weeks.',
    },
    {
        question: 'What if I need to reschedule?',
        answer: 'Life happens. Just give me 24 hours notice and we\'ll find another time. No penalty.',
    },
    {
        question: 'Do you tutor in person?',
        answer: 'Not right now — everything is online. Most of my students actually prefer it since you can join from wherever you\'re comfortable.',
    },
    {
        question: 'What makes you different from other tutors?',
        answer: 'I actually took the SAT recently — I\'m not someone who\'s been teaching test prep for 20 years and forgot what it\'s like to be a student. I scored a 1470, I know what\'s actually on the test, and I remember the strategies that worked for me. Plus, I\'m way more affordable than the big prep companies.',
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 md:py-28">
            <div className="max-w-3xl mx-auto px-6">
                <div className="mb-12">
                    <p className="text-sm text-faint uppercase tracking-widest mb-4">
                        FAQ
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-text tracking-tight">
                        Questions? Answers.
                    </h2>
                </div>

                <div className="divide-y divide-edge">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-5 text-left group"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-medium text-text group-hover:text-muted transition-colors pr-4">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus size={16} className="text-faint shrink-0" />
                                ) : (
                                    <Plus size={16} className="text-faint shrink-0" />
                                )}
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-5 text-muted leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
