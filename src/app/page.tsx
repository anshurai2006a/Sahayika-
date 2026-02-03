"use client";
import { motion } from "framer-motion";
import { Shield, Briefcase, Scale, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary-500/20 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[80px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-primary-400 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Empowering 10,000+ Women Globally</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-none text-white">
            Empowering Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">
              Future, Safely.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed italic">
            &quot;Your companion for career growth, legal rights, and ultimate safety. Built for women, by Data C.&quot;
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/dashboard" className="glass-button flex items-center gap-2">
              Enter Dashboard <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Quick Actions / Features */}
      <motion.section
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <motion.div variants={itemVars} className="glass-card p-10 group hover:border-primary-500/50 transition-colors">
          <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Shield className="w-8 h-8 text-red-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Instant SOS</h3>
          <p className="text-slate-400 mb-6">Real-time emergency alerts and location sharing with just one tap. Stay protected always.</p>
          <Link href="/safety" className="text-primary-400 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
            Open Safety Center <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div variants={itemVars} className="glass-card p-10 group hover:border-blue-500/50 transition-colors">
          <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Briefcase className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Career Hub</h3>
          <p className="text-slate-400 mb-6">Access curated job listings and skill development courses designed specifically for you.</p>
          <Link href="/career" className="text-primary-400 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
            Explore Jobs <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div variants={itemVars} className="glass-card p-10 group hover:border-violet-500/50 transition-colors">
          <div className="w-14 h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Scale className="w-8 h-8 text-violet-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Legal Support</h3>
          <p className="text-slate-400 mb-6">Empower yourself with knowledge of your legal rights and direct access to aid resources.</p>
          <Link href="/legal" className="text-primary-400 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
            Get Legal Aid <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
