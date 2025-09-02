"use client"

import * as React from "react"
import { useTheme } from "next-themes"

function TasselIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M12 12c0-3.9-4-4.5-4-8.5 0-2.2 1.8-4 4-4s4 1.8 4 4c0 4-4 4.6-4 8.5Z" />
            <path d="M12 12V2" />
            <path d="M10 16c0 1.7 1.3 3 3 3s3-1.3 3-3" />
            <path d="M10.5 22c0-1.7 1.1-3 2.5-3s2.5 1.3 2.5 3" />
            <path d="m8 16 1.5-1.5" />
            <path d="M14.5 14.5 16 16" />
        </svg>
    )
}

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [isPulled, setIsPulled] = React.useState(false);

    const handleToggle = () => {
        setIsPulled(true);
        setTheme(theme === "light" ? "dark" : "light");
        setTimeout(() => setIsPulled(false), 300);
    }

    return (
        <button
            onClick={handleToggle}
            className="fixed top-8 right-8 z-[999] p-4 transition-transform duration-300 ease-in-out text-muted-foreground hover:text-foreground"
            style={{ transform: isPulled ? 'translateY(10px)' : 'translateY(0)' }}
            aria-label="Toggle theme"
        >
            <div className="relative">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-foreground/50"></div>
                <TasselIcon className="h-6 w-6" />
            </div>
        </button>
    )
}
