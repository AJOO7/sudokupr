import CallToAction from "../components/CallToAction"

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <section className="pt-16 py-24 md:py-32 bg-white text-slate-900">
                <div className="container px-6 sm:px-12 max-w-screen-2xl">
                    {/* Header Section */}
                    <div className="max-w-4xl mb-24">
                        <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter text-slate-900 mb-8 border-l-8 border-primary pl-8 leading-[0.9]">
                            About Us.
                        </h1>
                        <p className="text-3xl text-slate-900 font-light leading-snug pl-8 max-w-3xl">
                            We are the <span className="font-serif italic text-primary font-bold">architects</span> of perception.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
                        {/* Left Column: The "What" */}
                        <div className="md:col-span-12 lg:col-span-6">
                            <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-serif">
                                <span className="font-bold text-primary">SUDOKU PR</span> is a strategic communications firm based in Noida.
                                We work with founders and institutions who want communication that is <span className="border-b-2 border-primary/20">thoughtful</span>, <span className="border-b-2 border-primary/20">credible</span>, and <span className="border-b-2 border-primary/20">effective</span>.
                            </p>
                            <div className="mt-12 p-8 bg-slate-50 border-l-4 border-slate-900">
                                <h3 className="text-xl font-bold uppercase tracking-widest text-slate-500 mb-4">Our Core</h3>
                                <p className="text-lg text-slate-800 font-medium">Logical. Structured. Problem-solving oriented.</p>
                            </div>
                        </div>

                        {/* Right Column: The "Why" (Philosophy) */}
                        <div className="md:col-span-12 lg:col-span-6 space-y-8">
                            <div>
                                <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">The Philosophy</h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    We believe that in a noisy world, the most powerful thing you can be is clear. Our name, <strong>SUDOKU</strong>, reflects our approach: we don't just add noise; we solve the puzzle of perception.
                                </p>
                            </div>

                            <blockquote className="relative p-8 bg-slate-900 text-white text-2xl font-serif italic leading-relaxed">
                                <span className="absolute top-0 left-0 text-6xl text-primary opacity-50 transform -translate-x-1/2 -translate-y-1/2">"</span>
                                No vanity PR. No unnecessary noise. Just clear, honest communication.
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction />
        </div>
    )
}
