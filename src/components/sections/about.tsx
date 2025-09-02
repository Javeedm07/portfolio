import Image from 'next/image';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { Card, CardContent } from '@/components/ui/card';
import { personalData } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div>
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline mb-12 text-center">
            About Me
          </h2>
        </ScrollFadeIn>
        <ScrollFadeIn delay="200ms" className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight font-headline">
              {personalData.aboutTitle}
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {personalData.about}
              </p>
              <p>
                I thrive on building things for the web and have a strong foundation in both front-end and back-end technologies. My expertise lies in creating seamless user experiences and robust, scalable applications. I'm always eager to learn and apply new technologies to solve real-world problems.
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
