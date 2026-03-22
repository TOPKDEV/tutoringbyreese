'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
    return (
        <section className="py-14 md:py-24 bg-text">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-base leading-tight tracking-tight mb-6">
                        Let&apos;s figure it out together.
                    </h2>
                    <p className="text-lg text-base/60 mb-10">
                        Whether it&apos;s math help or SAT prep, the first step is the same &mdash; a quick call to see where you&apos;re at. No commitment, no pressure. Just a conversation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="https://calendar.app.google/4tNZzZV9gwcjhVEu5"
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 bg-base text-text hover:bg-white px-7 py-3.5 rounded-lg font-medium transition-colors"
                        >
                            Book a free intro call <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="#sat-prep"
                            className="inline-flex items-center justify-center gap-2 text-base/70 hover:text-base border border-base/20 px-7 py-3.5 rounded-lg font-medium transition-colors"
                        >
                            See SAT summer program
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
