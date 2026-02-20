import CallToAction from "../components/CallToAction"
import { CheckCircle2 } from "lucide-react"

export default function HowWeWork() {
    const steps = [
        {
            title: "Understand the story",
            desc: "We dive deep into your brand's core values, mission, and objectives to find the authentic narrative.",
        },
        {
            title: "Shape the narrative",
            desc: "We craft compelling messages that resonate with your target audience and differentiate you from the noise.",
        },
        {
            title: "Communicate with purpose",
            desc: "We execute strategic campaigns across the right channels to ensure your message is heard, not just seen.",
        },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <section className="pt-16 py-24 md:py-32 bg-white text-slate-900">
                <div className="container px-6 sm:px-12 max-w-screen-2xl">
                    <div className="max-w-3xl mx-auto space-y-16">
                        <div className="text-center space-y-6">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-slate-900">Our Approach</h1>
                            <p className="text-xl text-slate-600">Simple. Strategic. Effective.</p>
                        </div>

                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-8 items-start p-8 rounded-sm border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900">{step.title}</h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center pt-16 border-t border-slate-100">
                            <p className="text-2xl font-serif font-medium text-slate-900">No vanity PR. No unnecessary noise.</p>
                            <p className="text-3xl font-bold mt-4 text-primary tracking-tight">Just clear, honest communication.</p>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction />
        </div>
    )
}
