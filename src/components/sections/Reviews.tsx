"use client";

import { content } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Reviews() {
    const { language } = useLanguage();
    const t = content[language].reviews;

    return (
        <section className="bg-stone-50 py-24 dark:bg-stone-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl text-stone-900 dark:text-stone-50">{t.title}</h2>
                    <p className="mt-4 text-center text-stone-500 dark:text-stone-400">
                        {t.subtitle}
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {t.items.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="break-inside-avoid"
                        >
                            <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-stone-950">
                                <CardHeader className="pb-3 flex flex-row items-start gap-4 space-y-0">
                                    <div className="rounded-full bg-stone-100 p-2 dark:bg-stone-800 text-stone-400">
                                        <Quote className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-base font-serif font-semibold text-stone-900 dark:text-stone-50">{review.name}</CardTitle>
                                        <CardDescription className="text-xs text-stone-500">{review.role}</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-stone-600 dark:text-stone-300 italic leading-relaxed">
                                        "{review.content}"
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
