import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { Briefcase } from 'lucide-react';

export function Work() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div>
        <ScrollFadeIn>
          <div className="flex items-center gap-4 mb-12">
             <div className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary">
                <Briefcase className="w-8 h-8 text-secondary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">
                Work
              </h2>
              <p className="text-muted-foreground mt-1">Curated Collection of Design Work</p>
            </div>
          </div>
        </ScrollFadeIn>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
             <ScrollFadeIn key={project.slug} delay={`${index * 100}ms`}>
                <ProjectCard project={project} />
             </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
