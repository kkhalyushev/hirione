"use client";

import { content } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Reviews() {
    const { language } = useLanguage();
    const t = content[language].reviews;
    const [filter, setFilter] = useState<"All" | "Resume" | "LinkedIn" | "Career" | "Job Search">("All");

    const categories = ["All", "Resume", "LinkedIn", "Career"] as const;

    const filteredItems = t.items.filter(item =>
        filter === "All" ? true : item.category === filter
    );

    return (
        <section className="py-24 bg-[#FAF9F6]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 sm:text-4xl">
                        {t.title}
                    </h2>
                    <p className="mx-auto max-w-[700px] text-lg text-stone-500 dark:text-stone-400 font-light">
                        {t.subtitle}
                    </p>
                </div>

                {/* Filter Tabs */}
                {/* <div className="flex flex-wrap justify-center gap-2 mb-12"> // User wanted simple filters
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                filter === cat
                                    ? "bg-stone-900 text-white shadow-md"
                                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div> */}
                {/* Commenting out filters for v1 simplicity as requested 'readability' first. 
                   Actually user asked for filters: "фильтр/группировка". Enabling.
                */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? "bg-[#E8A87C] text-white shadow-md transform scale-105"
                                    : "bg-white text-stone-500 hover:bg-stone-50 border border-stone-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                <motion.div
                    layout
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence>
                        {filteredItems.map((item, index) => (
                            <ReviewCard key={item.name + index} item={item} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

function ReviewCard({ item }: { item: any }) {
    const isHighlight = item.isHighlight;
    const [isExpanded, setIsExpanded] = useState(false);

    // Simple truncation logic: show first 150 chars if not expanded
    const shouldTruncate = item.content.length > 200;
    const displayContent = isExpanded || !shouldTruncate
        ? item.content
        : item.content.slice(0, 200) + "...";

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`
                relative bg-white p-8 rounded-3xl shadow-sm border border-stone-100 dark:bg-stone-900 dark:border-stone-800
                ${isHighlight ? "lg:col-span-2 bg-[#FDFBF7] ring-1 ring-[#E8A87C]/20" : ""}
            `}
        >
            <Quote className={`absolute top-6 right-6 h-8 w-8 text-stone-200 ${isHighlight ? "text-[#E8A87C]/20 h-16 w-16" : ""}`} />

            <div className="mb-6">
                <p className={`font-serif leading-relaxed text-stone-700 dark:text-stone-300 ${isHighlight ? "text-xl md:text-2xl font-medium" : "text-base"}`}>
                    "{displayContent}"
                </p>
                {shouldTruncate && !isExpanded && (
                    <button
                        onClick={() => setIsExpanded(true)}
                        className="mt-2 text-sm font-medium text-[#E8A87C] hover:underline"
                    >
                        Read full
                    </button>
                )}
            </div>

            <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-serif font-bold ${isHighlight ? "bg-[#E8A87C]" : "bg-stone-300"}`}>
                    {item.name[0]}
                </div>
                <div>
                    <div className="font-bold text-stone-900 dark:text-stone-100">{item.name}</div>
                    <div className="text-sm text-stone-500">{item.role}</div>
                </div>
            </div>
        </motion.div>
    )
}
