import Image from 'next/image';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline mb-12 text-center">
            About Me
          </h2>
        </ScrollFadeIn>
        <ScrollFadeIn delay="200ms" className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight font-headline">
              I'm a designer with a passion for creating.
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a passionate product designer with a knack for creating intuitive and beautiful user experiences. My journey into design started with a curiosity for how things work, which quickly evolved into a full-fledged passion for crafting digital products that are not only functional but also delightful to use.
              </p>
              <p>
                Over the years, I've had the opportunity to work on a variety of projects, from mobile apps to large-scale web applications. I believe in a user-centered design approach, and I always strive to understand the needs and pain points of the end-users to create solutions that truly make a difference.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <Card className="overflow-hidden shadow-lg rounded-xl">
              <CardContent className="p-0">
                <Image
                  src="https://picsum.photos/600/750"
                  alt="About me"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  data-ai-hint="portrait person"
                />
              </CardContent>
            </Card>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
