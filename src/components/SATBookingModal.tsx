'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, BookOpen, Check } from 'lucide-react';

interface SATBookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    variant: 'summer' | 'session';
}

const SUMMER_EMBED = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1XXpYuRIVADudqNh0sNC9zwRgtF5CXCd6b4xXbrXPKJqcfhD8t7Ckok5GAcYCntEMXIhwI2ZLm?gv=true';
const SESSION_EMBED = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0GAWYqPKaAWXPsUmStO6GXeSa_bqPKOq_O11764eOx3RMz-XVPYpYllMuunS3IQw9ZBX-muEEG?gv=true';

export function SATBookingModal({ isOpen, onClose, variant }: SATBookingModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    const isSummer = variant === 'summer';

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-text/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.25 }}
                        className="relative z-10 bg-base rounded-xl shadow-2xl w-[95vw] max-w-5xl max-h-[95dvh] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="sticky top-0 z-10 bg-base border-b border-edge px-6 py-4 flex items-center justify-between rounded-t-xl">
                            <div>
                                <h3 className="text-lg font-serif font-medium text-text">
                                    {isSummer ? 'Book your discovery call' : 'Book your first SAT session'}
                                </h3>
                                <p className="text-sm text-muted mt-0.5">
                                    {isSummer
                                        ? 'Quick 30-minute call to talk through goals and the summer program.'
                                        : 'Pick a time for your 1.5-hour SAT prep session.'}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-faint hover:text-text transition-colors rounded-lg hover:bg-surface shrink-0 ml-4"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className={isSummer ? 'grid md:grid-cols-[1fr,1.5fr] gap-0' : ''}>
                            {/* Summer program info sidebar */}
                            {isSummer && (
                                <div className="p-6 border-b md:border-b-0 md:border-r border-edge">
                                    <p className="text-sm text-muted leading-relaxed mb-6">
                                        We&apos;ll talk through the program, your goals, and your timeline. If it&apos;s the right fit, the week before the 8 weeks start you&apos;ll come in for a free full-length practice SAT (~2.5 hours) so I can see exactly where you&apos;re at.
                                    </p>

                                    <div className="space-y-3 text-sm text-muted">
                                        <div className="flex items-start gap-2">
                                            <Calendar size={13} className="text-faint mt-0.5 shrink-0" />
                                            The program runs for specific weeks in the summer &mdash; we&apos;ll confirm dates on the call
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Clock size={13} className="text-faint mt-0.5 shrink-0" />
                                            The practice test is about 2.5 hours &mdash; a real full-length SAT
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <BookOpen size={13} className="text-faint mt-0.5 shrink-0" />
                                            Parents, please join the beginning of the call &mdash; it helps to be on the same page
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Check size={13} className="text-faint mt-0.5 shrink-0" />
                                            The practice test is free and doesn&apos;t count toward your 24 sessions
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Calendar embed */}
                            <div className="p-4">
                                <iframe
                                    src={isSummer ? SUMMER_EMBED : SESSION_EMBED}
                                    style={{ border: 0 }}
                                    width="100%"
                                    className="rounded-lg h-[calc(100dvh-280px)] md:h-[calc(100dvh-200px)] min-h-[400px]"
                                    title={isSummer ? 'Book your summer program discovery call' : 'Book your SAT prep session'}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
