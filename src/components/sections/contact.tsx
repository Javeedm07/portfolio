import { Button } from '@/components/ui/button';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { Twitter, Linkedin, Dribbble } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="text-center">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline mb-4">
            Let's talk
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground mb-8">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
          <Button asChild size="lg">
            <a href="mailto:hello@example.com">hello@example.com</a>
          </Button>
        </ScrollFadeIn>
        <ScrollFadeIn delay="200ms" className="mt-16">
          <p className="text-sm text-muted-foreground mb-4">Find me on social media</p>
          <div className="flex justify-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Dribbble className="h-6 w-6" />
            </Link>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
