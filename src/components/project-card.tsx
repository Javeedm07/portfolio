"use client"
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  project: {
    slug: string;
    title: string;
    tags: string[];
    description: string;
    details: string[];
    year: number;
    aiHint: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={`/work/${project.slug}`}>
        <div className="relative">
          {/* Folder Tab */}
          <div className="relative z-20 ml-6">
            <div className="inline-block">
              <div className="h-8 px-6 bg-card/80 backdrop-blur-sm rounded-t-lg border border-white/20 border-b-0 flex items-center">
                <span className="text-sm font-medium text-muted-foreground">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Folder Body */}
          <div className="relative z-10 -mt-px p-6 bg-card/80 backdrop-blur-sm rounded-lg rounded-tl-none border border-white/20 shadow-xl transition-all duration-300 group-hover:bg-card/90 group-hover:shadow-2xl group-hover:border-white/30">
            {/* Image container */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted/20 mb-4">
              <Image
                src={`https://picsum.photos/400/225?random=${project.slug}`}
                alt={project.title}
                width={400}
                height={225}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={project.aiHint}
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {project.tags.slice(0, 2).join(' • ')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                {/* Arrow icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Folder shadow/depth effect */}
          <div className="absolute inset-0 top-8 bg-card/40 rounded-lg rounded-tl-none border border-white/10 -z-10 translate-x-1 translate-y-1" />
        </div>
      </Link>
    </motion.div>
  );
}

// "use client"
// import Link from 'next/link';
// import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';
// import { motion } from 'framer-motion';

// type ProjectCardProps = {
//   project: {
//     slug: string;
//     title: string;
//     tags: string[];
//     description: string;
//     details: string[];
//     year: number;
//     aiHint: string;
//   };
// };

// export function ProjectCard({ project }: ProjectCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="group"
//     >
//       <Link href={`/work/${project.slug}`}>
//         <div className="relative rounded-t-xl overflow-hidden">
//           {/* Folder Tab */}
//           <div className="absolute top-0 left-4 h-6 w-32 bg-card/60 backdrop-blur-sm rounded-t-md flex items-center justify-center">
//             <span className="text-xs font-semibold text-muted-foreground">{project.year}</span>
//           </div>

//           {/* Folder Body */}
//           <div className="mt-4 p-4 bg-card/60 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg">
//             {/* Image container */}
//             <div className="relative aspect-video rounded-md overflow-hidden bg-primary/10">
//               <Image
//                 src={`https://picsum.photos/400/225?random=${project.slug}`}
//                 alt={project.title}
//                 width={400}
//                 height={225}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 data-ai-hint={project.aiHint}
//               />
//             </div>

//             {/* Content */}
//             <div className="pt-4">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="text-xs text-muted-foreground uppercase tracking-wider">{project.tags.slice(0, 2).join(' | ')}</p>
//                   <h3 className="text-lg font-semibold text-foreground mt-1">{project.title}</h3>
//                 </div>
//                 <div className="mt-2 p-2 rounded-full bg-secondary/0 group-hover:bg-secondary transition-colors duration-300">
//                   <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// }
