import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
    className?: string;
}

export function AccordionItem({ title, children, isOpen, onClick, className }: AccordionItemProps) {
    return (
        <div className={cn("border-b border-zinc-200 dark:border-zinc-800", className)}>
            <button
                onClick={onClick}
                className="flex flex-1 w-full items-center justify-between py-4 font-medium transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 [&[data-state=open]>svg]:rotate-180"
            >
                {title}
                <ChevronDown
                    className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-200 text-zinc-500 dark:text-zinc-400",
                        isOpen && "rotate-180"
                    )}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 pt-0 text-sm text-zinc-600 dark:text-zinc-300">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Accordion({ children, className }: { children: React.ReactNode; className?: string }) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={cn("w-full", className)}>
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as any, {
                        isOpen: openIndex === index,
                        onClick: () => handleItemClick(index),
                    });
                }
                return child;
            })}
        </div>
    );
}
