"use client";
import { motion } from "framer-motion";
import { GraduationCap, PlayCircle, Star, Clock, Trophy } from "lucide-react";

const courses = [
    { title: "Self Defense Essentials", rating: 4.9, students: "2.4k", time: "3h 20m", category: "Safety" },
    { title: "Financial Independence", rating: 4.8, students: "1.8k", time: "5h 45m", category: "Career" },
    { title: "Digital Marketing Basics", rating: 4.7, students: "3.2k", time: "8h 15m", category: "Skills" },
    { title: "Public Speaking Mastery", rating: 4.9, students: "950", time: "4h 30m", category: "Professional" },
];

export default function SkillsPage() {
    return (
        <div className="space-y-12 pb-20">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-5xl font-black text-white">Skill Library</h1>
                    <p className="text-slate-400 mt-2 italic">&quot;Learn today, lead tomorrow. Your growth is our priority.&quot;</p>
                </div>
                <div className="p-4 glass-card flex items-center gap-4">
                    <div className="p-2 bg-yellow-500/20 rounded-lg">
                        <Trophy className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-black">Your Progress</p>
                        <p className="text-white font-bold">12/15 Badges</p>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="glass-card overflow-hidden group border-white/5 hover:border-primary-500/30 transition-all"
                    >
                        <div className="h-40 bg-slate-900 flex items-center justify-center relative group-hover:bg-primary-900/40 transition-colors">
                            <GraduationCap className="w-12 h-12 text-slate-800 group-hover:text-primary-500 transition-colors" />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer"
                            >
                                <PlayCircle className="w-12 h-12 text-white" />
                            </motion.div>
                        </div>
                        <div className="p-6 space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary-400 bg-primary-500/10 px-2 py-1 rounded">{course.category}</span>
                            <h3 className="text-lg font-bold text-white line-clamp-1">{course.title}</h3>
                            <div className="flex items-center justify-between text-xs text-slate-400">
                                <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> {course.rating}</span>
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.time}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
