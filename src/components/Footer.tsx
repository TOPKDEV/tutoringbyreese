import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-10 border-t border-edge">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <p className="text-sm font-medium text-text">Tutoring By Reese</p>
                        <p className="text-xs text-faint mt-1">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-6 text-sm text-faint">
                        <Link href="#about" className="hover:text-text transition-colors">About</Link>
                        <Link href="#math-tutoring" className="hover:text-text transition-colors">Math Tutoring</Link>
                        <Link href="#sat-prep" className="hover:text-text transition-colors">SAT Prep</Link>
                        <Link href="#faq" className="hover:text-text transition-colors">FAQ</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
