export default function WelcomeMessage() {
    return (
        <section className="py-32 bg-slate-900 text-white relative">
            <div className="container px-6 sm:px-12 max-w-screen-2xl">
                <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Big Statement */}
                    <div className="md:col-span-12 lg:col-span-7">
                        <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter text-white leading-[1.1] mb-8">
                            Are you being <span className="italic text-primary">heard</span>, <br />
                            or just being seen?
                        </h2>
                        <div className="h-1 w-32 bg-primary mb-8"></div>
                        <p className="text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
                            In a noisy world, <span className="text-white font-medium">clarity is the ultimate currency</span>.
                            We strip away the vanity metrics to focus on what matters: credible, effective communication that moves the needle.
                        </p>
                    </div>

                    {/* Right Column: Key Pillars */}
                    <div className="md:col-span-12 lg:col-span-5 space-y-px bg-slate-800 border-t border-b border-slate-800">
                        {/* List Item 1 */}
                        <div className="p-8 bg-slate-900 border-t border-slate-700 hover:bg-slate-800 transition-colors group">
                            <span className="hidden md:block text-xs font-mono text-slate-500 mb-2">01</span>
                            <h4 className="font-serif font-bold text-2xl text-white mb-2 group-hover:text-primary transition-colors">Narrative Building</h4>
                            <p className="text-slate-400">Structuring your story to resonate with the people who matter most.</p>
                        </div>

                        {/* List Item 2 */}
                        <div className="p-8 bg-slate-900 border-t border-slate-700 hover:bg-slate-800 transition-colors group">
                            <span className="hidden md:block text-xs font-mono text-slate-500 mb-2">02</span>
                            <h4 className="font-serif font-bold text-2xl text-white mb-2 group-hover:text-primary transition-colors">Reputation Management</h4>
                            <p className="text-slate-400">Protecting and enhancing your brand equity in a volatile world.</p>
                        </div>

                        {/* List Item 3 */}
                        <div className="p-8 bg-slate-900 border-t border-b border-slate-700 hover:bg-slate-800 transition-colors group">
                            <span className="hidden md:block text-xs font-mono text-slate-500 mb-2">03</span>
                            <h4 className="font-serif font-bold text-2xl text-white mb-2 group-hover:text-primary transition-colors">Strategic Execution</h4>
                            <p className="text-slate-400">Campaigns that deliver measurable business results, not just buzz.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
