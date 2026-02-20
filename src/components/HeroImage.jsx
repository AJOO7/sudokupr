export default function HeroImage() {
    return (
        <div className="relative w-full min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-teal-900/40 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-slate-800/40 rounded-full blur-[100px]"></div>
            </div>

            <div className="container relative z-10 px-6 sm:px-12 pt-16">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                        Strategy <br />
                        <span className="text-primary italic">First.</span>
                    </h1>
                    <p className="mt-8 text-2xl md:text-3xl text-slate-300 font-light max-w-3xl mx-auto leading-normal">
                        We don't just add noise. <span className="text-white font-medium">We define the narrative.</span>
                    </p>

                    <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="/contact" className="px-10 py-4 bg-primary hover:bg-primary/90 text-white text-lg font-semibold tracking-wide transition-all rounded-sm uppercase">
                            Start the Conversation
                        </a>
                        <a href="/services" className="px-10 py-4 bg-transparent border border-white/20 text-slate-300 hover:text-white hover:border-white text-lg font-medium tracking-wide transition-all rounded-sm uppercase">
                            Explore Services
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-xs uppercase tracking-widest text-slate-400">Scroll</span>
                <div className="w-[1px] h-12 bg-slate-400"></div>
            </div>
        </div>
    )
}
