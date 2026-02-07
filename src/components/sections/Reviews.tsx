"use client";

import { content } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Reviews() {
    const { language } = useLanguage();
    const t = content[language].reviews;
    const [filter, setFilter] = useState<"All" | "Resume" | "LinkedIn" | "Career" | "Job Search">("All");
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile screen size
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const categories = ["All", "Resume", "LinkedIn", "Career"] as const;

    const filteredItems = t.items.filter(item =>
        filter === "All" ? true : item.category === filter
    );

    // Limit to 3 reviews on mobile unless showAll is true
    const displayedItems = (isMobile && !showAll) ? filteredItems.slice(0, 3) : filteredItems;
    const hasMore = isMobile && filteredItems.length > 3;

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-serif font-bold text-foreground sm:text-5xl">
                        {t.title}
                    </h2>
                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground font-light">
                        {t.subtitle}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-3 rounded-full text-base font-bold transition-all ${filter === cat
                                ? "bg-primary text-primary-foreground shadow-lg transform -translate-y-0.5"
                                : "bg-white text-muted-foreground hover:bg-white/80 hover:text-foreground border border-transparent shadow-sm"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                <motion.div
                    layout
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence>
                        {displayedItems.map((item, index) => (
                            <ReviewCard key={item.name + index} item={item} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Show All / Show Less Button - only on mobile */}
                {hasMore && (
                    <div className="mt-12 text-center sm:hidden">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base shadow-lg hover:bg-primary/90 transition-all"
                        >
                            {showAll ? t.showLess : t.showAll}
                            <ChevronDown className={`h-5 w-5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

function ReviewCard({ item }: { item: any }) {
    const isHighlight = item.isHighlight;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`
                relative bg-white p-10 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border-none
                ${isHighlight ? "lg:col-span-2 bg-gradient-to-br from-white to-muted/30" : "hover:shadow-lg transition-shadow"}
            `}
        >
            <Quote className={`absolute top-8 right-8 h-10 w-10 text-primary opacity-20 ${isHighlight ? "h-20 w-20 opacity-10" : ""}`} />

            <div className="mb-6">
                <p className={`font-serif leading-relaxed text-foreground ${isHighlight ? "text-2xl md:text-3xl font-medium italic" : "text-lg text-muted-foreground"}`}>
                    "{item.content}"
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center shrink-0 border border-border">
                    {item.image ? (
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <span className="text-xl font-bold text-primary">
                            {item.name.charAt(0)}
                        </span>
                    )}
                </div>
                <div>
                    <h4 className="font-bold text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
            </div>
        </motion.div>
    )
}
