"use client";
import Link from "next/link";
import { Shield, Bell, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-primary-500 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                        <Shield className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">SAHAYIKA</span>
                </Link>

                <div className="flex items-center gap-6">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <Bell className="w-5 h-5" />
                    </motion.button>

                    <div className="h-6 w-px bg-white/10" />

                    <button className="flex items-center gap-3 group">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-medium text-white">Guest User</p>
                            <p className="text-xs text-slate-400 italic">Safety First</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-600 to-indigo-600 flex items-center justify-center border-2 border-white/10 group-hover:border-primary-400 transition-colors">
                            <User className="w-5 h-5 text-white" />
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
}
