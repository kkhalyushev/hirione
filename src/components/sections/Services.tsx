"use client";

import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { X, ArrowRight, Check } from "lucide-react";

export function Services() {
    const { language } = useLanguage();
    const t = content[language];
    const tServices = t.services;

    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

    const selectedService = tServices.items.find(s => s.id === selectedServiceId);

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-serif font-bold text-foreground sm:text-5xl">{tServices.title}</h2>
                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground font-sans font-light">
                        {tServices.subtitle}
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {tServices.items.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, ease: "easeOut" }}
                            onClick={() => setSelectedServiceId(service.id)}
                            className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[hsl(var(--background))] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-2 hover:shadow-xl border-none flex flex-col justify-between h-full"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div>
                                <h3 className="mb-4 text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                {/* Bullets */}
                                <ul className="mb-8 space-y-3">
                                    {service.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start text-base text-muted-foreground">
                                            <div className="mt-1.5 mr-3 h-2 w-2 rounded-full bg-primary shrink-0 opacity-60" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center text-base font-bold text-primary">
                                {t.ui.readMore} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </div>
                        </motion.div>
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
                            className="fixed inset-y-0 right-0 z-50 h-full w-full max-w-xl bg-background p-6 shadow-2xl sm:p-10 overflow-y-auto"
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <h3 className="text-3xl font-serif font-bold text-foreground">{selectedService.title}</h3>
                                <Button variant="ghost" size="icon" onClick={() => setSelectedServiceId(null)} className="rounded-full hover:bg-muted">
                                    <X className="h-6 w-6" />
                                    <span className="sr-only">{t.ui.close}</span>
                                </Button>
                            </div>

                            <div className="space-y-8">
                                <p className="text-xl text-muted-foreground leading-relaxed font-sans">{selectedService.description}</p>
                                <div className="h-px w-full bg-border" />

                                <div className="space-y-8">
                                    {selectedService.details.map((detail, idx) => (
                                        <div key={idx}>
                                            <h4 className="font-serif font-bold text-xl mb-3 text-foreground">{detail.title}</h4>
                                            <p className="text-muted-foreground leading-relaxed text-lg">{detail.content}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8">
                                    <Button size="lg" className="w-full h-14 text-lg rounded-full" asChild>
                                        <Link href="#contact" onClick={() => setSelectedServiceId(null)}>{t.hero.ctaPrimary}</Link>
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
