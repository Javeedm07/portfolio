"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
    }

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-6 right-12 z-[999] flex items-center justify-center rounded-full bg-secondary/50 p-1 w-24 h-10 text-sm font-bold text-foreground/80"
            aria-label="Toggle theme"
        >
            <div className={cn(
                "absolute flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ease-in-out",
                isDark ? "translate-x-[2.25rem] bg-primary text-primary-foreground" : "translate-x-[-0.75rem] bg-primary text-primary-foreground"
            )}>
                O
            </div>
            <span className="transition-opacity duration-200">
                <span className={cn("opacity-0", isDark && "opacity-100")}>N</span>
                <span className={cn("opacity-100", isDark && "opacity-0")}>FF</span>
            </span>
        </button>
    )
}
