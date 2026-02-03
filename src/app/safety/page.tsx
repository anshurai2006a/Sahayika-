"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Phone, Users, MapPin, AlertTriangle } from "lucide-react";

export default function SafetyPage() {
    const [isSOSActive, setIsSOSActive] = useState(false);

    return (
        <div className="space-y-12 pb-20">
            <header className="text-center space-y-4">
                <h1 className="text-5xl font-black text-white">Safety Center</h1>
                <p className="text-slate-400 max-w-xl mx-auto italic">&quot;Your immediate protection, just one tap away. Stay safe, stay empowered.&quot;</p>
            </header>

            <div className="flex justify-center py-10 relative">
                <AnimatePresence>
                    {isSOSActive && (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 0.2 }}
                            exit={{ scale: 2, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="absolute w-64 h-64 bg-red-600 rounded-full blur-3xl -z-10"
                        />
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSOSActive(!isSOSActive)}
                    className={`w-64 h-64 rounded-full flex flex-col items-center justify-center gap-4 border-8 transition-all duration-500 shadow-[0_0_50px_rgba(239,68,68,0.3)] ${isSOSActive
                        ? "bg-red-600 border-red-400 rotate-12"
                        : "bg-red-500/10 border-red-500/20 hover:border-red-500/40"
                        }`}
                >
                    <ShieldAlert className={`w-20 h-20 ${isSOSActive ? "text-white animate-pulse" : "text-red-500"}`} />
                    <span className={`text-2xl font-black tracking-widest ${isSOSActive ? "text-white" : "text-red-500"}`}>
                        {isSOSActive ? "SOS SENT" : "SEND SOS"}
                    </span>
                </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="glass-card p-8 group hover:border-primary-500/30 transition-all">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary-500/10 rounded-xl group-hover:rotate-12 transition-transform">
                            <Phone className="w-6 h-6 text-primary-400" />
                        </div>
                        <h3 className="text-xl font-bold">Helpline Numbers</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-slate-300">Women Helpline</span>
                            <span className="text-primary-400 font-bold">1091</span>
                        </li>
                        <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-slate-300">Police</span>
                            <span className="text-primary-400 font-bold">100</span>
                        </li>
                        <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-slate-300">Domestic Abuse</span>
                            <span className="text-primary-400 font-bold">181</span>
                        </li>
                    </ul>
                </div>

                <div className="glass-card p-8 group hover:border-orange-500/30 transition-all">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-orange-500/10 rounded-xl">
                            <AlertTriangle className="w-6 h-6 text-orange-400" />
                        </div>
                        <h3 className="text-xl font-bold">Safe Zones Near You</h3>
                    </div>
                    <div className="space-y-4 text-slate-400 text-sm">
                        <p className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                            <span>Police Station - 1.2km away (Open 24/7)</span>
                        </p>
                        <p className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                            <span>Sahayika Shelter - 3.5km away</span>
                        </p>
                        <div className="h-24 bg-slate-900 rounded-xl border border-white/5 flex items-center justify-center">
                            <span className="text-xs italic opacity-50">Map View Placeholder</span>
                        </div>
                    </div>
                </div>

                <div className="glass-card p-8 group hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-500/10 rounded-xl">
                            <Users className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold">Circle of Trust</h3>
                    </div>
                    <p className="text-sm text-slate-400 mb-6 italic">Who gets notified when you press SOS?</p>
                    <div className="flex -space-x-3 mb-6">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold">
                                C{i}
                            </div>
                        ))}
                        <button className="w-10 h-10 rounded-full border-2 border-dashed border-white/10 bg-white/5 flex items-center justify-center text-xs text-slate-500 hover:border-blue-500/50 transition-colors">
                            +
                        </button>
                    </div>
                    <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-semibold transition-all">
                        Manage Contacts
                    </button>
                </div>
            </div>
        </div>
    );
}
