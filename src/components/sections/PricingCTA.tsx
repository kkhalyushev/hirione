"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/content";

export function PricingCTA() {
    const { language } = useLanguage();
    const t = content[language].pricing;

    return (
        <section id="pricing" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-border/50 p-12 text-center md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    {/* Decorative Blur */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                    <h2 className="mb-6 text-3xl font-serif font-bold tracking-tight sm:text-4xl text-foreground relative z-10">
                        {t.title}
                    </h2>
                    <p className="mb-10 text-lg text-muted-foreground font-light relative z-10">
                        {t.description}
                    </p>
                    <Button size="lg" className="relative z-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40" asChild>
                        <Link
                            href={t.docUrl}
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            {t.cta}
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
