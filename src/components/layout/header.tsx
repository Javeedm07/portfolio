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
                  "absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-2 bg-no-repeat bg-bottom opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  pathname === link.href ? "opacity-100" : ""
                )}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 2.5" preserveAspectRatio="none"><path d="M.5 1.5c4.2-.8 8.4-.8 12.5-.2 2.5.4 4.9.8 7.4 1.2 5.2.7 10.3.7 15.5.2 2.5-.2 4.9-.5 7.4-.7 4.2-.3 8.4-.3 12.5.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')`,
                  backgroundSize: '100% auto',
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
