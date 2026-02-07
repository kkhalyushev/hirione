"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/components/ui/Button";

export function LanguageSwitcher({ className }: { className?: string }) {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={cn("flex items-center rounded-full bg-stone-100 p-1 dark:bg-stone-800", className)}>
            <button
                onClick={() => setLanguage("en")}
                className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-all",
                    language === "en"
                        ? "bg-white text-stone-900 shadow-sm dark:bg-stone-600 dark:text-white"
                        : "text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
                )}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage("ru")}
                className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-all",
                    language === "ru"
                        ? "bg-white text-stone-900 shadow-sm dark:bg-stone-600 dark:text-white"
                        : "text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
                )}
            >
                RU
            </button>
        </div>
    );
}
