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
        <section className="relative flex min-h-[92vh] items-center px-4 pt-32 pb-20 md:px-6 lg:pt-40 overflow-hidden bg-background">
            {/* Fresh & Trust Background Decoration */}
            <div className="absolute top-0 right-0 -z-10 h-[80vh] w-[80vw] bg-gradient-to-bl from-primary/20 via-secondary/20 to-transparent rounded-bl-[100px] blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 -z-10 h-[60vh] w-[60vw] bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-[100px] blur-3xl opacity-40" />

            <div className="container mx-auto grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-5xl font-bold font-serif tracking-tight sm:text-7xl lg:text-8xl leading-[1.1] text-foreground">
                            {t.title}
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-[600px] text-xl text-muted-foreground font-sans leading-relaxed"
                    >
                        {t.description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-4 sm:flex-row"
                    >
                        {/* Primary CTA - Coral Pill */}
                        <Button size="lg" className="h-14 px-10 text-lg shadow-[0_10px_20px_rgba(224,122,95,0.25)]" asChild>
                            <Link href="#contact">
                                {t.ctaPrimary}
                                <MoveRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>

                        {/* Secondary CTA - Outline */}
                        <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-2" asChild>
                            <Link href="#pricing">{t.ctaSecondary}</Link>
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                    <div className="relative h-[140px] w-[100px] sm:h-[550px] sm:w-[400px] lg:h-[650px] lg:w-[480px]">
                        {/* Arch Shape Mask */}
                        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent rounded-t-[240px] rounded-b-[40px] -rotate-3 scale-105" />

                        <div className="relative h-full w-full overflow-hidden rounded-t-[240px] rounded-b-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white">
                            <Image
                                src="/images/hero-portrait.jpg"
                                alt="Valentina Dikanskaia"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Decor elements */}
                        <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-primary opacity-20 blur-xl" />
                        <div className="absolute top-10 -right-10 h-32 w-32 rounded-full bg-secondary opacity-20 blur-xl" />
                    </div>
                </motion.div>
            </div>
        </section>
    );

}
