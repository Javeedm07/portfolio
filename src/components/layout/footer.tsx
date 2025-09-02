import { personalData } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} {personalData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
