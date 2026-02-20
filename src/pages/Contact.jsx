
export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <section className="pt-32 py-24 md:py-48 bg-slate-50 text-slate-900 min-h-[85vh] flex items-center">
                <div className="container px-6 sm:px-12 max-w-screen-2xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-7xl md:text-9xl font-serif font-bold tracking-tighter mb-12 text-slate-900 leading-[0.8]">
                            Let’s <br /><span className="text-primary italic">Talk.</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed mb-24 font-light max-w-2xl mx-auto">
                            Ready to control the narrative? Reach out to us directly and let's solve the puzzle of your brand's perception.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-slate-200 pt-24">
                            <div className="space-y-4">
                                <h3 className="font-bold text-slate-400 uppercase tracking-[0.2em] text-xs">Our Location</h3>
                                <p className="font-serif text-3xl font-medium text-slate-900">Noida, Uttar Pradesh</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-slate-400 uppercase tracking-[0.2em] text-xs">Email Us</h3>
                                <a href="mailto:hello@sudokupr.com" className="font-serif text-3xl font-medium text-slate-900 hover:text-primary transition-colors block">
                                    hello@sudokupr.com
                                </a>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-slate-400 uppercase tracking-[0.2em] text-xs">Call Us</h3>
                                <a href="tel:+918368960995" className="font-serif text-3xl font-medium text-slate-900 hover:text-primary transition-colors block">
                                    +91 83689-60995
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
