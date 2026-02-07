import type { Metadata } from "next";
import { Nunito, Lora } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import { LanguageProvider } from "@/context/LanguageContext";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
    title: "Valentina Dikanskaia - Resume and Recruitment Services",
    description: "Resume, LinkedIn and Career Advice. Professional recruitment services.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(nunito.variable, lora.variable, "antialiased")}>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
