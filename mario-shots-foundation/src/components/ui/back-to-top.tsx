"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [mounted]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Don't render until mounted on client
    if (!mounted) return null;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`
                fixed bottom-24 right-6 z-40
                p-3 rounded-full
                bg-primary text-primary-foreground
                shadow-lg shadow-primary/25
                transition-all duration-300 ease-out
                hover:scale-110 hover:shadow-xl hover:shadow-primary/30
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0 pointer-events-none"
                }
            `}
            aria-label="Back to top"
        >
            <ArrowUp className="h-5 w-5" />
        </button>
    );
}

