"use client";
import { motion } from "framer-motion";
import { Users, Heart, Share2, MessageCircle, TrendingUp, Sparkles } from "lucide-react";

export default function CommunityPage() {
    const posts = [
        { author: "Ananya", time: "2h ago", content: "I just finished the Self Defense 101 course! Feeling so much more confident walking home tonight. Big thanks to Sahayika! 💜", likes: 24, comments: 5 },
        { author: "Sara", time: "5h ago", content: "Is anyone interested in starting a weekend study group for the Data Analyst certification? Let's empower each other!", likes: 12, comments: 8 },
        { author: "Sneha", time: "1d ago", content: "Sharing some safety tips for the upcoming festival season. Stay bright and stay safe, sisters! 🌸", likes: 45, comments: 12 },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
            <div className="lg:col-span-2 space-y-8">
                <header>
                    <h1 className="text-5xl font-black text-white">Sisterhood</h1>
                    <p className="text-slate-400 mt-2">A safe space for talking, sharing, and growing together.</p>
                </header>

                {/* Create Post */}
                <div className="glass-card p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex-shrink-0" />
                    <div className="flex-1 space-y-4">
                        <textarea
                            placeholder="What&apos;s on your mind? Share with the community..."
                            className="glass-input h-24 resize-none"
                        />
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 text-slate-500">
                                <button className="p-2 hover:bg-white/5 rounded-lg"><Heart className="w-5 h-5" /></button>
                                <button className="p-2 hover:bg-white/5 rounded-lg"><Share2 className="w-5 h-5" /></button>
                            </div>
                            <button className="glass-button py-2 text-sm">Post to Community</button>
                        </div>
                    </div>
                </div>

                {/* Feed */}
                <div className="space-y-6">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-card p-8 border hover:border-white/15 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-500 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg">
                                    {post.author[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{post.author}</h4>
                                    <span className="text-xs text-slate-500">{post.time}</span>
                                </div>
                            </div>
                            <p className="text-slate-300 leading-relaxed mb-6">{post.content}</p>
                            <div className="flex gap-6 text-sm text-slate-400">
                                <button className="flex items-center gap-2 hover:text-red-400 transition-colors"><Heart className="w-4 h-4" /> {post.likes}</button>
                                <button className="flex items-center gap-2 hover:text-primary-400 transition-colors"><MessageCircle className="w-4 h-4" /> {post.comments}</button>
                                <button className="flex items-center gap-2 hover:text-white transition-colors ml-auto"><Share2 className="w-4 h-4" /></button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Community Sidebar */}
            <div className="space-y-6">
                <div className="glass-card p-6">
                    <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-400" /> Trending Groups
                    </h3>
                    <div className="space-y-4">
                        {["Tech Sisters", "Safe Travelers", "Legal Rights Hub"].map(group => (
                            <div key={group} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 cursor-pointer transition-all">
                                <span className="font-medium text-slate-300">#{group}</span>
                                <Sparkles className="w-4 h-4 text-primary-400" />
                            </div>
                        ))}
                    </div>
                    <button className="mt-6 w-full py-2 text-primary-400 font-bold hover:underline">Explore all groups</button>
                </div>

                <div className="glass-card p-8 bg-gradient-to-t from-primary-900/50 to-transparent">
                    <Heart className="w-12 h-12 text-primary-500 mb-6 mx-auto animate-pulse" />
                    <h3 className="text-center text-xl font-bold text-white mb-2">Volunteer Network</h3>
                    <p className="text-center text-sm text-slate-400 mb-6">Join our network of 500+ volunteers mentoring women worldwide.</p>
                    <button className="w-full glass-button">Become a Volunteer</button>
                </div>
            </div>
        </div>
    );
}
