import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Project Alpha',
    description: 'UI/UX Design, Web Development',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    aiHint: 'abstract technology',
  },
  {
    title: 'Project Beta',
    description: 'Branding, Mobile App Design',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    aiHint: 'modern architecture',
  },
  {
    title: 'Project Gamma',
    description: 'Visual Development, Interaction Design',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    aiHint: 'vibrant colors',
  },
  {
    title: 'Project Delta',
    description: 'Product Design, Prototyping',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    aiHint: 'minimalist design',
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-secondary/30 -mx-6 sm:-mx-10 lg:-mx-16 px-6 sm:px-10 lg:px-16">
      <div>
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline mb-12 text-center">
            Selected Work
          </h2>
        </ScrollFadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollFadeIn key={project.title} delay={`${index * 150}ms`}>
              <Link href="#" className="group block">
                <Card className="overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                  <CardContent className="p-0 relative">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={project.aiHint}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.description}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-background/80 text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
