import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

export function Hero() {
  return (
    <section id="hero" className="flex items-center min-h-screen pt-20 -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="text-center w-full">
        <ScrollFadeIn>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 font-headline">
            Building digital products, brands, and experiences.
          </h1>
        </ScrollFadeIn>
        <ScrollFadeIn delay="200ms">
          <p className="max-w-3xl mx-auto text-base md:text-xl text-muted-foreground mb-10">
            A Product Designer and Visual Developer. I specialize in UI/UX Design, Responsive Web Design, and Visual Development.
          </p>
        </ScrollFadeIn>
        <ScrollFadeIn delay="400ms">
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#about">About Me</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#work">Latest Work</Link>
            </Button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
