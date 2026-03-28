"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    threshold?: number;
}

export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 600,
    threshold = 0.1,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const element = ref.current;
        if (!element) return;

        // Set initial state
        element.style.opacity = "0";
        element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
        element.style.transitionDelay = `${delay}ms`;

        // Set initial transform based on direction
        switch (direction) {
            case "up":
                element.style.transform = "translateY(30px)";
                break;
            case "down":
                element.style.transform = "translateY(-30px)";
                break;
            case "left":
                element.style.transform = "translateX(30px)";
                break;
            case "right":
                element.style.transform = "translateX(-30px)";
                break;
            default:
                element.style.transform = "none";
        }

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        element.style.opacity = "1";
                        element.style.transform = "translate(0, 0)";
                        observer.unobserve(element);
                    }
                }
            },
            { threshold, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [mounted, delay, direction, duration, threshold]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

// Stagger container for multiple children
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 100,
}: StaggerContainerProps) {
    return (
        <div className={className}>
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <ScrollReveal key={index} delay={index * staggerDelay}>
                        {child}
                    </ScrollReveal>
                ))
                : children}
        </div>
    );
}

