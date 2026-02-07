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
                    ? "bg-[hsl(var(--background))]/90 backdrop-blur-md border-b border-border py-3 shadow-sm"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
                <Link href="/" className="text-xl font-bold font-serif tracking-tight hover:opacity-80 text-foreground">
                    Valentina Dikanskaia
                </Link>

                <div className="flex items-center gap-6">
                    <nav className="hidden sm:flex items-center gap-6">
                        <Link
                            href="#contact"
                            className="text-base font-medium transition-colors hover:text-foreground text-muted-foreground"
                        >
                            {t.hero.ctaPrimary}
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-base font-medium transition-colors hover:text-foreground text-muted-foreground"
                        >
                            {t.hero.ctaSecondary}
                        </Link>
                    </nav>

                    {/* Single Switcher, Right Aligned */}
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
}
