"use client";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    MapPin,
    Send,
    BookOpen,
    ArrowUpRight,
    Plus
} from "lucide-react";

export default function Dashboard() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-bold text-white">Dashboard Overview</h1>
                    <p className="text-slate-400">Welcome back! Here's what's happening today.</p>
                </div>
                <button className="glass-button w-fit flex items-center gap-2">
                    <Plus className="w-5 h-5" /> New Activity
                </button>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Safety Quick Stats */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-card p-6 border-l-4 border-l-red-500">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-red-500/10 rounded-xl">
                                <ShieldCheck className="w-6 h-6 text-red-500" />
                            </div>
                            <span className="text-xs font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded">ACTIVE PROTECT</span>
                        </div>
                        <h3 className="text-lg font-bold">Safety Status</h3>
                        <p className="text-3xl font-bold mt-2 text-white">SECURE</p>
                        <p className="text-sm text-slate-400 mt-1">Last check-in: 12 mins ago</p>
                    </div>

                    <div className="glass-card p-6 border-l-4 border-l-primary-500">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-primary-500/10 rounded-xl">
                                <MapPin className="w-6 h-6 text-primary-500" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold">Location Sharing</h3>
                        <p className="text-3xl font-bold mt-2 text-white">4 Contacts</p>
                        <p className="text-sm text-slate-400 mt-1">Watching your journey</p>
                    </div>

                    <div className="glass-card p-6 md:col-span-2">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                            <Send className="w-5 h-5 text-primary-400" /> Quick SOS Setup
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex-1 min-w-[150px] p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 mx-auto mb-3 border border-white/10" />
                                    <p className="font-medium text-sm">Emergency C{i}</p>
                                </div>
                            ))}
                            <button className="flex-1 min-w-[150px] border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center p-4 hover:border-primary-500/50 transition-colors group">
                                <Plus className="w-6 h-6 text-slate-400 group-hover:text-primary-400" />
                                <span className="text-xs text-slate-500 mt-1">Add Contact</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar Widgets */}
                <div className="space-y-6">
                    <div className="glass-card p-6">
                        <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-blue-400" /> Learning Progress
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Self Defense 101</span>
                                    <span className="text-blue-400 font-bold">85%</span>
                                </div>
                                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[85%]" />
                                </div>
                            </div>
                            <button className="w-full py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-1">
                                View all courses <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="glass-card p-6 bg-gradient-to-br from-indigo-600/20 to-primary-600/20">
                        <h3 className="text-xl font-bold mb-2 text-white">Community Alert</h3>
                        <p className="text-sm text-slate-300">New volunteer opportunity in your area! 3 sisters already joined.</p>
                        <button className="mt-4 w-full py-2 bg-white text-slate-950 font-bold rounded-xl text-sm transition-transform hover:scale-[1.02]">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
