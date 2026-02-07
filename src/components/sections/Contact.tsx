"use client";

import Link from "next/link";
import { Send, Linkedin, Instagram, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/content";
import { motion } from "framer-motion";

export function Contact() {
    const { language } = useLanguage();
    const t = content[language].contact;

    return (
        <section id="contact" className="py-32 overflow-hidden relative bg-[#FDFBF7]">
            {/* Soft Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8A87C]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 text-center md:px-6 relative z-10">

                {/* Header - Delicate & Tracking */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-stone-500"
                >
                    {t.header}
                </motion.h2>

                {/* Large Links - Editorial Style - Dark Text */}
                <div className="flex flex-col items-center gap-6 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Link
                            href="https://t.me/vdikanskaya"
                            target="_blank"
                            className="group relative inline-block"
                        >
                            <span className="text-4xl sm:text-6xl md:text-7xl font-serif font-medium text-stone-800 transition-colors group-hover:text-stone-600">
                                {t.telegramValue}
                            </span>
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#E8A87C] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="mailto:valentina.dikanskaia@gmail.com"
                            className="group relative inline-block"
                        >
                            <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-medium text-stone-500 transition-colors group-hover:text-stone-700">
                                {t.emailValue}
                            </span>
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#E8A87C] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </motion.div>
                </div>

                {/* Social Media - Minimal Floating Icons - Light Theme */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center gap-8"
                >
                    <p className="text-base text-stone-400 font-light tracking-wide">
                        {t.subHeader}
                    </p>

                    <div className="flex items-center gap-8">
                        <SocialLink href="https://www.linkedin.com/in/valentina-dikanskaia/" icon={<Linkedin className="h-6 w-6" />} label="LinkedIn" />
                        <SocialLink href="https://www.instagram.com/satheda/" icon={<Instagram className="h-6 w-6" />} label="Instagram" />
                        <SocialLink href="https://t.me/vdikanskaya" icon={<Send className="h-6 w-6 pr-0.5" />} label="Telegram" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            className="group flex flex-col items-center gap-2"
            aria-label={label}
        >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-400 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#E8A87C] group-hover:text-[#E8A87C]">
                {icon}
            </div>
        </Link>
    );
}
