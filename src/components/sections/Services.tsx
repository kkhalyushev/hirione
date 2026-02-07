"use client";

import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

export function Services() {
    const { language } = useLanguage();
    const t = content[language];
    const tServices = t.services;

    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

    const selectedService = tServices.items.find(s => s.id === selectedServiceId);

    return (
        <section id="services" className="py-24 bg-[#FDFBF7]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 sm:text-4xl">{tServices.title}</h2>
                    <p className="mx-auto max-w-[700px] text-lg text-stone-500 dark:text-stone-400 font-light">
                        {tServices.subtitle}
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {tServices.items.map((service, index) => (
                        <div
                            key={service.id}
                            onClick={() => setSelectedServiceId(service.id)}
                            className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] dark:bg-stone-900 border border-stone-100 dark:border-stone-800"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8A87C]/10 text-[#E8A87C]">
                                {index === 0 && <span className="text-xl">📄</span>}
                                {index === 1 && <span className="text-xl">💼</span>}
                                {index === 2 && <span className="text-xl">🧭</span>}
                                {index === 3 && <span className="text-xl">💬</span>}
                                {index === 4 && <span className="text-xl">🔍</span>}
                                {index === 5 && <span className="text-xl">👥</span>}
                                {index === 6 && <span className="text-xl">⚙️</span>}
                            </div>
                            <h3 className="mb-3 text-xl font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#D6966B] transition-colors">{service.title}</h3>
                            <p className="text-stone-500 dark:text-stone-400 leading-relaxed font-light line-clamp-3">
                                {service.description}
                            </p>

                            <div className="mt-6 flex items-center text-sm font-medium text-[#E8A87C] opacity-0 transition-opacity group-hover:opacity-100">
                                {t.ui.readMore} <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Side Sheet / Modal for Details */}
            <AnimatePresence>
                {selectedService && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedServiceId(null)}
                            className="fixed inset-0 z-50 bg-stone-950/20 backdrop-blur-sm dark:bg-stone-950/50"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 z-50 h-full w-full max-w-xl bg-white p-6 shadow-2xl dark:bg-stone-900 sm:p-10 overflow-y-auto"
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-50">{selectedService.title}</h3>
                                <Button variant="ghost" size="icon" onClick={() => setSelectedServiceId(null)} className="rounded-full">
                                    <X className="h-5 w-5" />
                                    <span className="sr-only">{t.ui.close}</span>
                                </Button>
                            </div>

                            <div className="space-y-8">
                                <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">{selectedService.description}</p>
                                <div className="h-px w-full bg-stone-100 dark:bg-stone-800" />

                                <div className="space-y-8">
                                    {selectedService.details.map((detail, idx) => (
                                        <div key={idx}>
                                            <h4 className="font-semibold text-lg mb-2 text-stone-900 dark:text-stone-100">{detail.title}</h4>
                                            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{detail.content}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8">
                                    <Button size="lg" className="w-full rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900" asChild>
                                        <Link href="#contact">{t.hero.ctaPrimary}</Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
