"use client";
import { motion } from "framer-motion";
import { Shield, User, Mail, Lock, Sparkles, LogIn } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card max-w-xl w-full p-10 space-y-8 bg-white/5"
            >
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-[10px] font-black uppercase tracking-widest mb-4">
                        <Sparkles className="w-3 h-3" />
                        <span>Join the Sisterhood</span>
                    </div>
                    <h1 className="text-4xl font-black text-white tracking-tight leading-tight">Create Your Empowered <br />Profile Today</h1>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 col-span-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
                            <input type="text" placeholder="Sarah Johnson" className="glass-input pl-12" />
                        </div>
                    </div>

                    <div className="space-y-2 md:col-span-1">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
                            <input type="email" placeholder="sarah@example.com" className="glass-input pl-12" />
                        </div>
                    </div>

                    <div className="space-y-2 md:col-span-1">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
                            <input type="password" placeholder="••••••••" className="glass-input pl-12" />
                        </div>
                    </div>

                    <div className="col-span-2 space-y-4 pt-4">
                        <button type="submit" className="glass-button w-full flex items-center justify-center gap-2 text-lg">
                            Create Account <Shield className="w-5 h-5" />
                        </button>
                        <p className="text-center text-slate-500 text-sm">
                            Already part of the network?{" "}
                            <Link href="/login" className="text-white font-bold hover:underline inline-flex items-center gap-1">
                                Login <LogIn className="w-4 h-4" />
                            </Link>
                        </p>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
