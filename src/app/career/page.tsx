"use client";
import { motion } from "framer-motion";
import { Briefcase, Search, BadgeCheck, Clock, MapPin, ExternalLink } from "lucide-react";

const jobs = [
    { id: 1, title: "Content Strategist", company: "WomenReach Inc.", location: "Remote", type: "Full-time", salary: "$30k - $45k" },
    { id: 2, title: "Community Lead", company: "Local Support NGO", location: "Bangalore, India", type: "Hybrid", salary: "$12k - $18k" },
    { id: 3, title: "Data Analyst Intern", company: "TechForGood", location: "Pune, India", type: "Remote", salary: "$5k - $8k" },
    { id: 4, title: "Graphic Designer", company: "Creative Sisters", location: "Remote", type: "Contract", salary: "$25/hr" },
];

export default function CareerPage() {
    return (
        <div className="space-y-12 pb-20">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-white">Career Hub</h1>
                    <p className="text-slate-400 mt-2">Find opportunities that value your skills and respect your growth.</p>
                </div>
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search roles, companies..."
                        className="glass-input pl-12"
                    />
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Filters Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="glass-card p-6">
                        <h3 className="font-bold mb-4 text-white uppercase text-xs tracking-widest opacity-50">Filter by Category</h3>
                        <div className="space-y-2">
                            {["Technology", "Healthcare", "Education", "Admin", "Creative"].map(cat => (
                                <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                                    <div className="w-5 h-5 border border-white/10 rounded bg-white/5 group-hover:border-primary-500 transition-colors" />
                                    <span className="text-sm text-slate-400 group-hover:text-white transition-colors">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card p-6 bg-primary-950/20 border-primary-500/20">
                        <h3 className="font-bold mb-2 text-white">Skill Up?</h3>
                        <p className="text-sm text-slate-400 mb-4">Improve your resume with our curated courses.</p>
                        <button className="w-full glass-button text-xs py-2">Go to Skills</button>
                    </div>
                </div>

                {/* Jobs List */}
                <div className="lg:col-span-3 space-y-4">
                    {jobs.map((job, idx) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-primary-500/30 transition-all cursor-pointer"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-primary-500/50 transition-colors">
                                    <Briefcase className="w-8 h-8 text-primary-400" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                                        <span className="flex items-center gap-1"><BadgeCheck className="w-4 h-4 text-green-500" /> {job.company}</span>
                                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between md:flex-col md:items-end gap-3">
                                <span className="text-lg font-bold text-white tracking-tight">{job.salary}</span>
                                <button className="text-sm font-semibold text-primary-400 flex items-center gap-1 hover:underline">
                                    Apply Now <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}

                    <button className="w-full py-4 border-2 border-dashed border-white/5 rounded-2xl text-slate-500 font-medium hover:border-white/20 transition-all">
                        Load More Opportunities
                    </button>
                </div>
            </div>
        </div>
    );
}
