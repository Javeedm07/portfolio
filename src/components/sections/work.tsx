import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';


export function Work() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div>
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline mb-12 text-center">
            Selected Work
          </h2>
        </ScrollFadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollFadeIn key={project.title} delay={`${index * 150}ms`}>
              <Link href={project.link || '#'} target={project.link ? '_blank' : '_self'} className="group block">
                <Card className="overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl h-full flex flex-col">
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.details.map((detail, i) => <li key={i}>{detail}</li>)}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                      <div className="flex items-center text-sm text-primary">
                        View Project
                        <ArrowUpRight className="h-4 w-4 ml-1" />
                      </div>
                  </div>
                </Card>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
