"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/data/content";

export function Footer() {
    const { language } = useLanguage();
    const t = content[language].contact;

    return (
        <footer className="border-t border-stone-200 bg-white py-12 dark:border-stone-800 dark:bg-stone-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center text-center text-sm text-stone-400 dark:text-stone-500 font-light space-y-4">
                    <p>© {new Date().getFullYear()} Valentina Dikanskaia. {t.soleTrader}</p>

                    <p className="max-w-md mx-auto text-xs">
                        {t.disclaimer}
                    </p>

                    <p className="text-xs text-stone-300 dark:text-stone-600 pt-4">
                        {t.madeBy} <Link href={t.authorUrl} target="_blank" className="hover:text-stone-500 dark:hover:text-stone-400 transition-colors underline decoration-stone-200 underline-offset-2">{t.authorName}</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
