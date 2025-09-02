"use client";

import Link from 'next/link';
import * as React from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { personalData } from '@/lib/data';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-48">
        <Link href="/" className="text-xl font-bold text-foreground">
          {personalData.name}
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-sm font-medium transition-colors",
                  pathname === link.href ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.label}
                <span className={cn(
                    "absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100",
                    pathname === link.href ? "scale-x-100" : ""
                  )}
                  style={{
                    transformOrigin: 'center',
                    backgroundImage: 'linear-gradient(45deg, transparent 45%, currentColor 45%, currentColor 55%, transparent 55%), linear-gradient(-45deg, transparent 45%, currentColor 45%, currentColor 55%, transparent 55%)',
                    backgroundSize: '8px 8px',
                    backgroundRepeat: 'repeat-x',
                    backgroundColor: 'transparent'
                  }}
                ></span>
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full py-4">
                  <nav className="flex flex-col space-y-4 mb-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-lg font-medium text-foreground/70 transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto flex justify-center">
                     <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
