import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer py-20 pb-10 bg-ignite-900 text-white">
            <div className="container">
                <div className="footer-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-15 mb-15">
                    <div className="footer-brand">
                        <div className="footer-logo font-display text-2xl text-white flex items-center gap-2.5">
                            <div className="logo-mark w-8 h-8 bg-gradient-to-br from-coral to-coral-light rounded-lg relative overflow-hidden after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-3/5 after:h-3/5 after:bg-white/30 after:rounded after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45"></div>
                            Ignite
                        </div>
                        <p className="text-[0.9375rem] text-ignite-300 leading-[1.7] max-w-[280px] mt-4">Helping Perth businesses build stronger teams, confident leaders, and cultures that fuel performance.</p>
                    </div>
                    <div className="footer-column">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-ignite-400 mb-6">Services</h4>
                        <ul className="list-none space-y-3">
                            <li><Link href="#" className="text-[0.9375rem] text-ignite-200 hover:text-white transition-colors">HR Strategy</Link></li>
                            <li><Link href="#" className="text-[0.9375rem] text-ignite-200 hover:text-white transition-colors">Workforce Planning</Link></li>
                            <li><Link href="#" className="text-[0.9375rem] text-ignite-200 hover:text-white transition-colors">Employee Engagement</Link></li>
                            <li><Link href="#" className="text-[0.9375rem] text-ignite-200 hover:text-white transition-colors">Leadership Development</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-ignite-400 mb-6">Company</h4>
                        <ul className="list-none space-y-3">
                            <li><Link href="#" className="text-[0.9375rem] text-ignite-200 hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#" className="text-[0.9375rem] text-ignite-200 hover:text-white transition-colors">Approach</Link></li>
                            <li><Link href="#" className="text-[0.9375rem] text-ignite-200 hover:text-white transition-colors">Journal</Link></li>
                            <li><Link href="#" className="text-[0.9375rem] text-ignite-200 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-ignite-400 mb-6">Connect</h4>
                        <ul className="list-none space-y-3">
                            <li><Link href="/cdn-cgi/l/email-protection#cba3aea7a7a48ba2aca5a2bfaebba8ace5a8a4a6e5aabe" className="text-[0.9375rem] text-ignite-200 hover:text-white transition-colors"><span className="__cf_email__" data-cfemail="066e636a6a69466f61686f72637665612865696b286773">[email&#160;protected]</span></Link></li>
                            <li><Link href="tel:+61893888888" className="text-[0.9375rem] text-ignite-200 hover:text-white transition-colors">08 9388 8888</Link></li>
                            <li><Link href="#" className="text-[0.9375rem] text-ignite-200 hover:text-white transition-colors">Perth, WA</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-5">
                    <p className="text-sm text-ignite-400">© 2025 Ignite PCG. All rights reserved.</p>
                    <div className="footer-social flex gap-4">
                        <Link href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-ignite-300 transition-all hover:bg-coral hover:text-white">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </Link>
                        <Link href="#" aria-label="Instagram" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-ignite-300 transition-all hover:bg-coral hover:text-white">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
