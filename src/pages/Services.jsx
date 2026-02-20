import CallToAction from "../components/CallToAction"
import { Newspaper, Target, Smartphone, Video, Mic, BarChart, GraduationCap } from "lucide-react"

export default function Services() {
    const services = [
        {
            icon: <Newspaper className="h-10 w-10 mb-6 text-primary" />,
            title: "“We need visibility.”",
            subtitle: "Public Relations & Media Engagement",
            items: ["Media outreach", "PR strategy", "Reputation building", "Crisis communication"],
        },
        {
            icon: <Target className="h-10 w-10 mb-6 text-primary" />,
            title: "“Our story isn’t clear.”",
            subtitle: "Brand & Strategic Communication",
            items: ["Narrative building", "Positioning", "Corporate storytelling"],
        },
        {
            icon: <Smartphone className="h-10 w-10 mb-6 text-primary" />,
            title: "“Our digital presence feels scattered.”",
            subtitle: "Digital & Social Media Strategy",
            items: ["Content planning", "Campaign execution"],
        },
        {
            icon: <Video className="h-10 w-10 mb-6 text-primary" />,
            title: "“We need better content.”",
            subtitle: "Content & Audio-Visual",
            items: ["Articles", "Scripts", "Videos", "Podcasts"],
        },
        {
            icon: <Mic className="h-10 w-10 mb-6 text-primary" />,
            title: "“Our leaders need to communicate better.”",
            subtitle: "Media Training & Leadership Communication",
            items: [],
        },
        {
            icon: <BarChart className="h-10 w-10 mb-6 text-primary" />,
            title: "“We need clarity before action.”",
            subtitle: "Research & Communication Insights",
            items: [],
        },
        {
            icon: <GraduationCap className="h-10 w-10 mb-6 text-primary" />,
            title: "“Our teams need communication skills.”",
            subtitle: "Workshops & Training",
            items: [],
        },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <section className="pt-16 py-24 md:py-32 bg-white text-slate-900 border-b border-slate-200">
                <div className="container px-6 sm:px-12 max-w-screen-2xl">
                    <div className="max-w-4xl mb-20">
                        <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-8 text-slate-900 leading-[0.9]">
                            What we <span className="text-primary italic">do.</span>
                        </h1>
                        <p className="text-2xl text-slate-600 font-light leading-relaxed max-w-2xl">
                            Comprehensive communication solutions aimed at clarity and impact. We don't guess; we strategize.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col p-10 border-r border-b border-slate-200 group hover:bg-slate-50 transition-colors duration-300 min-h-[320px]">
                                <div className="mb-auto">
                                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                        {service.subtitle}
                                    </h3>
                                    <p className="font-serif italic text-slate-400 text-lg mb-6">
                                        {service.title}
                                    </p>
                                </div>

                                {service.items.length > 0 && (
                                    <ul className="mt-6 space-y-2">
                                        {service.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center text-slate-600 text-sm font-medium uppercase tracking-wide">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CallToAction />
        </div>
    )
}
