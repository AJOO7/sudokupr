import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="border-t border-border/10 bg-secondary text-secondary-foreground pt-16 pb-8">
            <div className="container max-w-screen-2xl px-6 sm:px-12">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <span className="text-2xl font-serif font-bold tracking-tight text-white">SUDOKU PR.</span>
                        </Link>
                        <p className="text-slate-300 max-w-md text-lg leading-relaxed">
                            We shape perception. We build narratives. We manage reputation.
                            Helping brands and leaders communicate with clarity, credibility, and purpose.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
                        <ul className="space-y-4 text-slate-300">
                            <li>
                                <a href="mailto:hello@sudokupr.com" className="hover:text-white transition-colors">
                                    hello@sudokupr.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+918368960995" className="hover:text-white transition-colors">
                                    +91 83689-60995
                                </a>
                            </li>
                            <li>
                                <span className="block">Noida, Uttar Pradesh</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Links</h3>
                        <ul className="space-y-4 text-slate-300">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/how-we-work" className="hover:text-white transition-colors">How We Work</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} SUDOKU PR. All rights reserved.</p>
                    <p className="mt-2 text-xs uppercase tracking-widest opacity-60">Strategy first. Always.</p>
                </div>
            </div>
        </footer>
    )
}
