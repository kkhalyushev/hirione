import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { PricingCTA } from "@/components/sections/PricingCTA";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground">
            <Header />
            <Hero />
            <About />
            <Services />
            <PricingCTA />
            <Reviews />
            <Contact />
            <Footer />
        </main>
    );
}

