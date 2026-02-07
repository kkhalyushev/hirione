"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/content";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { language } = useLanguage();
    const t = content[language];

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md border-b border-stone-200 py-3 dark:bg-stone-950/90 dark:border-stone-800"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-xl font-bold font-serif tracking-tight hover:opacity-80 text-stone-900 dark:text-stone-50">
                        Valentina Dikanskaia
                    </Link>
                    <LanguageSwitcher className="hidden sm:flex" />
                </div>

                <nav className="flex items-center gap-4 sm:gap-6">
                    <Link
                        href="#contact"
                        className="text-sm font-medium transition-colors hover:text-stone-900 dark:hover:text-stone-50 text-stone-600 dark:text-stone-300"
                    >
                        {t.hero.ctaPrimary}
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-sm font-medium transition-colors hover:text-stone-900 dark:hover:text-stone-50 text-stone-600 dark:text-stone-300"
                    >
                        {t.hero.ctaSecondary}
                    </Link>
                    <LanguageSwitcher className="flex sm:hidden" />
                </nav>
            </div>
        </header>
    );
}
