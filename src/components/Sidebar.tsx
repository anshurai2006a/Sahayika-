"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Briefcase,
    GraduationCap,
    ShieldAlert,
    Users,
    Scale,
    Settings,
    LogOut
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: ShieldAlert, label: "Safety SOS", href: "/safety" },
    { icon: Briefcase, label: "Career Info", href: "/career" },
    { icon: GraduationCap, label: "Skill Library", href: "/skills" },
    { icon: Users, label: "Community", href: "/community" },
    { icon: Scale, label: "Legal Aid", href: "/legal" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-6 top-28 bottom-6 w-64 z-40 hidden lg:block">
            <div className="h-full glass-card flex flex-col p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden">
                <div className="flex-1 space-y-2">
                    {menuItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <motion.div
                                whileHover={{ x: 5 }}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group",
                                    pathname === item.href
                                        ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <item.icon className={cn(
                                    "w-5 h-5 transition-transform group-hover:scale-110",
                                    pathname === item.href ? "text-white" : "group-hover:text-primary-400"
                                )} />
                                <span className="font-medium">{item.label}</span>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                        <Settings className="w-5 h-5 text-slate-400" />
                        <span className="font-medium">Settings</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
