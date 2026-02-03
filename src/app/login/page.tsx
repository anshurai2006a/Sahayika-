"use client";
import { motion } from "framer-motion";
import { Shield, Mail, Lock, ArrowRight, UserPlus } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card max-w-md w-full p-10 space-y-8 bg-white/5 backdrop-blur-2xl"
            >
                <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/20">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-black text-white tracking-tight">Welcome Back</h1>
                    <p className="text-slate-400">Secure access to your Sahayika space.</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-300 ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="glass-input pl-12"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-300 ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="glass-input pl-12"
                            />
                        </div>
                    </div>

                    <button type="submit" className="glass-button w-full flex items-center justify-center gap-2 text-lg">
                        Sign In <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <div className="pt-6 border-t border-white/10 text-center">
                    <p className="text-slate-400 text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-primary-400 font-bold hover:underline inline-flex items-center gap-1">
                            Create one now <UserPlus className="w-4 h-4" />
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
