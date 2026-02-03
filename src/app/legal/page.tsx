"use client";
import { motion } from "framer-motion";
import { Scale, Book, ShieldCheck, HeartHandshake, ArrowRight, MessageCircle } from "lucide-react";

export default function LegalPage() {
    const articles = [
        { title: "Understanding Your Property Rights", time: "5 min read", tag: "Property Law" },
        { title: "Workplace Harassment: Protection Laws", time: "8 min read", tag: "Labor Law" },
        { title: "Family Law & Empowerment", time: "6 min read", tag: "Civil Rights" },
        { title: "Cybersecurity for Women", time: "4 min read", tag: "Digital Safety" },
    ];

    return (
        <div className="space-y-12 pb-20">
            <header className="max-w-3xl">
                <h1 className="text-5xl font-black text-white">Legal Empowerment</h1>
                <p className="text-slate-400 mt-4 leading-relaxed">
                    Knowledge is power. Access resources to understand your rights and get legal assistance from verified professionals who care about your safety.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-10 bg-gradient-to-br from-primary-900/40 to-indigo-900/40 border-primary-500/30 group">
                    <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                        <HeartHandshake className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white">Direct Legal Aid</h2>
                    <p className="text-slate-300 mb-8 leading-relaxed">Connect with our network of pro-bono lawyers and legal consultants specializing in women&apos;s rights.</p>
                    <button className="glass-button flex items-center gap-2">
                        Speak to a Lawyer <MessageCircle className="w-5 h-5" />
                    </button>
                </div>

                <div className="glass-card p-10 group bg-slate-900/50">
                    <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center mb-8">
                        <Scale className="w-10 h-10 text-slate-400 group-hover:text-primary-400 transition-colors" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white">Know Your Rights</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">Browse our curated library of legal articles simplified for everyone to understand. No complex jargon.</p>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-green-500" />
                            <span className="text-xs font-semibold">Verified info</span>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                            <Book className="w-4 h-4 text-blue-500" />
                            <span className="text-xs font-semibold">Easy reading</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    Latest Legal Resources <div className="h-px flex-1 bg-white/10" />
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {articles.map((art, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 border border-white/5 hover:border-primary-500/30 transition-all cursor-pointer"
                        >
                            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-primary-400 mb-2 block">{art.tag}</span>
                            <h4 className="font-bold text-white mb-4 line-clamp-2">{art.title}</h4>
                            <div className="flex items-center justify-between text-xs text-slate-500 mt-auto">
                                <span>{art.time}</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
