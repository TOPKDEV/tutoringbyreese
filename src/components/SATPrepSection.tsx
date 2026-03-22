'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Calendar, Clock, BookOpen } from 'lucide-react';

export function SATPrepSection() {
    return (
        <section id="sat-prep" className="py-14 md:py-24 bg-surface">
            <div className="max-w-6xl mx-auto px-6">
                {/* SAT Hero Copy */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mb-12"
                >
                    <p className="text-sm text-faint uppercase tracking-widest mb-4">
                        SAT Prep
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-text tracking-tight leading-tight mb-6">
                        Studying for the SAT is hard. What&apos;s worse? Finding a tutor who <span className="italic">actually knows</span> what&apos;s on the test.
                    </h2>
                    <p className="text-lg text-muted leading-relaxed">
                        I scored a 1470. I know what&apos;s on every section, what the College Board is really testing, and the shortcuts that actually work. No generic worksheets &mdash; just real strategy from someone who took the test recently enough to remember it.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {/* Single SAT Session */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="bg-base p-6 lg:p-8 rounded-lg border border-edge"
                    >
                        <p className="text-xs text-faint uppercase tracking-widest mb-6">Single session</p>
                        <div className="mb-1">
                            <span className="text-4xl font-serif font-medium text-text">$80</span>
                        </div>
                        <p className="text-sm text-faint mb-6">1.5 hours</p>
                        <ul className="space-y-3 text-muted text-sm mb-8">
                            <li className="flex items-start gap-2">
                                <Check size={14} className="text-faint mt-0.5 shrink-0" />
                                1-on-1 over Zoom or Google Meet
                            </li>
                            <li className="flex items-start gap-2">
                                <Check size={14} className="text-faint mt-0.5 shrink-0" />
                                Targeted practice on weak areas
                            </li>
                            <li className="flex items-start gap-2">
                                <Check size={14} className="text-faint mt-0.5 shrink-0" />
                                Session notes &amp; resources sent after
                            </li>
                        </ul>
                        <Link
                            href="https://calendar.app.google/4tNZzZV9gwcjhVEu5"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-sm font-medium text-text hover:text-muted transition-colors"
                        >
                            Book a session <ArrowRight size={14} />
                        </Link>
                    </motion.div>

                    {/* 5-Session Pack */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="bg-base p-6 lg:p-8 rounded-lg border border-edge"
                    >
                        <p className="text-xs text-faint uppercase tracking-widest mb-6">5-session pack</p>
                        <div className="mb-1">
                            <span className="text-4xl font-serif font-medium text-text">$350</span>
                        </div>
                        <p className="text-sm text-faint mb-6">$70/session &middot; save $50</p>
                        <ul className="space-y-3 text-muted text-sm mb-8">
                            <li className="flex items-start gap-2">
                                <Check size={14} className="text-faint mt-0.5 shrink-0" />
                                5 &times; 1.5-hour sessions
                            </li>
                            <li className="flex items-start gap-2">
                                <Check size={14} className="text-faint mt-0.5 shrink-0" />
                                Priority scheduling
                            </li>
                            <li className="flex items-start gap-2">
                                <Check size={14} className="text-faint mt-0.5 shrink-0" />
                                Progress tracking between sessions
                            </li>
                            <li className="flex items-start gap-2">
                                <Check size={14} className="text-faint mt-0.5 shrink-0" />
                                Session notes &amp; resources
                            </li>
                        </ul>
                        <Link
                            href="https://calendar.app.google/4tNZzZV9gwcjhVEu5"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-sm font-medium text-text hover:text-muted transition-colors"
                        >
                            Get started <ArrowRight size={14} />
                        </Link>
                    </motion.div>

                    {/* Summer Program - FEATURED */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="bg-text p-6 lg:p-8 rounded-lg relative lg:scale-105 lg:-my-2 shadow-lg sm:col-span-2 lg:col-span-1"
                    >
                        <div className="absolute -top-3 left-8 bg-[#d4919e] text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                            Best value
                        </div>
                        <p className="text-xs text-base/50 uppercase tracking-widest mb-6 mt-1">8-Week Summer Program</p>
                        <div className="mb-1">
                            <span className="text-4xl font-serif font-medium text-base">$1,200</span>
                        </div>
                        <p className="text-sm text-base/50 mb-6">4 payments of $300</p>
                        <ul className="space-y-3 text-base/60 text-sm mb-8">
                            <li className="flex items-start gap-2">
                                <Check size={14} className="text-base/50 mt-0.5 shrink-0" />
                                8 weeks leading up to August SAT
                            </li>
                            <li className="flex items-start gap-2">
                                <Check size={14} className="text-base/50 mt-0.5 shrink-0" />
                                3 sessions per week (24 total)
                            </li>
                            <li className="flex items-start gap-2">
                                <Check size={14} className="text-base/50 mt-0.5 shrink-0" />
                                Full-length practice tests
                            </li>
                            <li className="flex items-start gap-2">
                                <Check size={14} className="text-base/50 mt-0.5 shrink-0" />
                                Personalized study plan
                            </li>
                            <li className="flex items-start gap-2">
                                <Check size={14} className="text-base/50 mt-0.5 shrink-0" />
                                Priority text/email support
                            </li>
                            <li className="flex items-start gap-2">
                                <Check size={14} className="text-base/50 mt-0.5 shrink-0" />
                                Free introduction session before start
                            </li>
                        </ul>
                        <Link
                            href="#sat-booking"
                            className="inline-flex items-center gap-2 bg-base text-text hover:bg-white px-6 py-3 rounded-lg text-sm font-medium transition-colors w-full justify-center"
                        >
                            Reserve your spot <ArrowRight size={14} />
                        </Link>
                    </motion.div>
                </div>

                {/* Book Your Introduction Call */}
                <div id="sat-booking" className="scroll-mt-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-serif font-medium text-text tracking-tight mb-4">
                                    Book your introduction call
                                </h3>
                                <p className="text-muted leading-relaxed mb-6">
                                    The week before the 8-week program starts, you&apos;ll have a free session with me &mdash; not counted toward your 24 sessions. You&apos;ll get to know me, take a practice test so I can see where you&apos;re at, and we&apos;ll build your study plan from there.
                                </p>

                                <div className="bg-base rounded-lg border border-edge p-4 mb-6">
                                    <p className="text-xs text-faint uppercase tracking-widest mb-3">Come prepared</p>
                                    <ul className="space-y-2 text-sm text-muted">
                                        <li className="flex items-start gap-2">
                                            <Clock size={13} className="text-faint mt-0.5 shrink-0" />
                                            Block off about an hour &mdash; 20 min with parents, 45 min with the student
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <BookOpen size={13} className="text-faint mt-0.5 shrink-0" />
                                            The student will take a practice SAT section so I can see where they&apos;re at
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check size={13} className="text-faint mt-0.5 shrink-0" />
                                            Be honest &mdash; cheating only hurts you. The whole point is to find the gaps so we can fix them
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg border border-edge p-4 overflow-hidden">
                                <iframe
                                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1XXpYuRIVADudqNh0sNC9zwRgtF5CXCd6b4xXbrXPKJqcfhD8t7Ckok5GAcYCntEMXIhwI2ZLm?gv=true"
                                    style={{ border: 0 }}
                                    width="100%"
                                    height="600"
                                    className="rounded-lg"
                                    title="Book your introduction call"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
