import { Button } from '@/components/ui/button';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { personalData } from '@/lib/data';

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
            <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
          </Button>
        </ScrollFadeIn>
        <ScrollFadeIn delay="200ms" className="mt-16">
          <p className="text-sm text-muted-foreground mb-4">Find me on social media</p>
          <div className="flex justify-center gap-6">
            <Link href={personalData.socialLinks.github} target="_blank" className="text-muted-foreground hover:text-foreground">
              <Github className="h-6 w-6" />
            </Link>
            <Link href={personalData.socialLinks.linkedin} target="_blank" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
