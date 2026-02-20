import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'How We Work', path: '/how-we-work' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-6 sm:px-12">
                <Link to="/" className="mr-8 flex items-center transition-opacity hover:opacity-90">
                    <img src={logo} alt="SUDOKU PR." className="h-10 md:h-14 w-auto object-contain py-1" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide uppercase">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-slate-600'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="inline-flex items-center justify-center rounded-md md:hidden text-slate-900"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="sr-only">Toggle menu</span>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-slate-200 bg-white shadow-xl">
                    <div className="container flex flex-col space-y-4 py-6 px-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-base font-medium transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-slate-600'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
