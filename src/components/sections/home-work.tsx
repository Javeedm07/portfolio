import Link from 'next/link';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import { ArrowRight, Briefcase } from 'lucide-react';
import { projects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';


export function HomeWork() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <ScrollFadeIn className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/80 backdrop-blur-sm border border-white/20">
                <Briefcase className="w-8 h-8 text-secondary-foreground" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
                Work
              </h2>
              <p className="text-muted-foreground mt-2 text-lg">Curated Collection of Design Work</p>
            </div>
          </div>
          <Button asChild variant="outline" size="lg" className="bg-card/50 backdrop-blur-sm border-white/20 hover:bg-card/80">
            <Link href="/work">
              All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </ScrollFadeIn>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.slice(0, 4).map((project, index) => (
            <ScrollFadeIn key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// import Link from 'next/link';
// import { ScrollFadeIn } from '@/components/scroll-fade-in';
// import { ArrowRight, Briefcase } from 'lucide-react';
// import { projects } from '@/lib/data';
// import { Button } from '@/components/ui/button';
// import { ProjectCard } from '@/components/project-card';


// export function HomeWork() {
//   return (
//     <section id="work" className="py-24 lg:py-32">
//       <div>
//         <ScrollFadeIn className="flex justify-between items-center mb-12">
//           <div className="flex items-center gap-4">
//             <div className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary">
//                 <Briefcase className="w-8 h-8 text-secondary-foreground" />
//             </div>
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">
//                 Work
//               </h2>
//               <p className="text-muted-foreground mt-1">Curated Collection of Design Work</p>
//             </div>
//           </div>
//           <Button asChild variant="outline">
//             <Link href="/work">
//               All Projects
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Link>
//           </Button>
//         </ScrollFadeIn>
//         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//           {projects.slice(0, 4).map((project, index) => (
//             <ProjectCard key={project.slug} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
