"use client";

import { Button } from "@/components/ui/Button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/content";

export function Hero() {
    const { language } = useLanguage();
    const t = content[language].hero;

    return (
        <section className="relative flex min-h-[95vh] items-center px-4 pt-20 md:px-6 lg:pt-0 overflow-hidden bg-[rgb(var(--background))]">
            {/* Background decoration - Warm & Soft */}
            <div className="absolute top-0 right-0 -z-10 h-[70vh] w-[70vw] rounded-bl-full bg-[#E8A87C]/10 blur-3xl" />

            <div className="container mx-auto grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl font-bold font-serif tracking-tight sm:text-6xl lg:text-7xl leading-tight">
                            <span className="block text-stone-800 dark:text-stone-100">{t.title}</span>
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-[600px] text-lg text-stone-600 dark:text-stone-400 sm:text-xl font-light leading-relaxed"
                    >
                        {t.description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col gap-4 sm:flex-row"
                    >
                        {/* Primary CTA - Soft Terracotta */}
                        <Button size="lg" className="group rounded-full px-8 bg-[#E8A87C] text-white hover:bg-[#D6966B] transition-colors" asChild>
                            <Link href="#contact">
                                {t.ctaPrimary}
                                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>

                        {/* Secondary CTA - Soft Border */}
                        <Button size="lg" variant="outline" className="rounded-full px-8 border-stone-300 text-stone-600 hover:bg-stone-100 hover:text-stone-900 dark:border-stone-700 dark:text-stone-300" asChild>
                            <Link href="#pricing">{t.ctaSecondary}</Link>
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                    <div className="relative h-[400px] w-[300px] sm:h-[500px] sm:w-[380px] lg:h-[600px] lg:w-[450px]">
                        {/* Image Frame - Minimal & Warm */}
                        <div className="absolute inset-0 translate-x-4 translate-y-4 border border-[#E8A87C]/30 rounded-full" />
                        <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-[200px] bg-stone-200 shadow-2xl shadow-[#E8A87C]/20">
                            <Image
                                src="/images/hero-portrait.jpg"
                                alt="Valentina Dikanskaia"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );

}
