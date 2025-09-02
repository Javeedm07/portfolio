"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    const isDark = theme === 'dark';

    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
    }

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-[999] flex items-center justify-center rounded-full bg-secondary/50 p-1 w-24 h-10 text-sm font-bold text-foreground/80"
            aria-label="Toggle theme"
        >
            <div className={cn(
                "absolute left-1 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ease-in-out",
                isDark ? "translate-x-14 bg-primary" : "translate-x-0 bg-primary"
            )}>
            </div>
            <span className={cn("absolute left-10 transition-opacity duration-200", isDark ? 'opacity-100' : 'opacity-0')}>ON</span>
            <span className={cn("absolute right-10 transition-opacity duration-200", isDark ? 'opacity-0' : 'opacity-100')}>OFF</span>
        </button>
    )
}
