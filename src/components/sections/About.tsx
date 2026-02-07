"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/content";

export function About() {
    const { language } = useLanguage();
    const t = content[language].about;

    return (
        <section className="py-24 overflow-hidden bg-stone-50/30 dark:bg-stone-900/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    {/* Image (Left on Desktop, Top on Mobile) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative mx-auto lg:mx-0 order-1 lg:order-1"
                    >
                        <div className="relative h-[400px] w-[300px] sm:w-[350px] overflow-hidden rounded-lg">
                            <Image
                                src="/images/about-portrait.jpg"
                                alt="About Valentina"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-stone-200 dark:bg-stone-800" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-2"
                    >
                        <h2 className="mb-8 text-3xl font-bold font-serif tracking-tight sm:text-4xl text-stone-900 dark:text-stone-50">
                            {t.title}
                        </h2>
                        <div className="space-y-6 text-lg text-stone-600 dark:text-stone-300 font-light leading-relaxed">
                            <p>
                                {t.description}
                            </p>
                        </div>
                        <div className="mt-8">
                            <Button variant="outline" className="gap-2 rounded-full border-stone-300 text-stone-700 hover:bg-stone-100" asChild>
                                <Link href="https://www.linkedin.com/in/valentina-dikanskaia/" target="_blank">
                                    <Linkedin className="h-4 w-4" />
                                    {t.linkedinParams}
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
