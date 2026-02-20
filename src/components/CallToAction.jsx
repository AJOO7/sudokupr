import { Link } from 'react-router-dom'
import { Button } from "../ui/button"

export default function CallToAction() {
    return (
        <section className="w-full py-24 md:py-32 bg-slate-50 text-slate-900 border-t border-slate-200">
            <div className="container px-6 sm:px-12 max-w-screen-2xl">
                <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-slate-900">
                            Let’s talk strategy.
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Tell us what you’re working on. We’ll tell you how we can help.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Link to="/contact">
                            <Button size="lg" className="w-full sm:w-auto px-8 bg-primary text-white hover:bg-primary/90 rounded-sm text-base font-semibold shadow-md">
                                Contact Us
                            </Button>
                        </Link>
                        <Link to="/services">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-sm text-base font-medium">
                                View Services
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm text-slate-500 mt-8 pt-8 border-t border-slate-200 w-full max-w-md mx-auto">
                        Because good communication solves more problems than it creates.
                    </p>
                </div>
            </div>
        </section>
    )
}
