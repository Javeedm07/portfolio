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
      className="group relative"
    >
      <Link href={`/work/${project.slug}`}>
        <div className="relative">
          {/* Folder Tab with curved edge */}
          <div className="relative z-20 ml-4">
            <div 
              className="inline-block bg-stone-600 border border-stone-500"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, calc(100% - 10px) 50%, 100% 100%, 0 100%)',
                borderRadius: '12px 12px 0 0',
                height: '44px',
                width: '120px',
                paddingLeft: '16px',
                paddingRight: '24px'
              }}
            >
              <div className="flex items-center justify-center h-full">
                <span className="text-sm font-medium text-stone-200">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Main Folder Body */}
          <div 
            className="relative z-10 bg-stone-600 border border-stone-500 shadow-2xl transition-all duration-300 group-hover:shadow-3xl overflow-hidden"
            style={{
              marginTop: '-1px',
              borderRadius: '20px',
              borderTopLeftRadius: '4px'
            }}
          >
            {/* Image container */}
            <div className="relative aspect-video overflow-hidden m-4 rounded-xl">
              <Image
                src={`https://picsum.photos/400/225?random=${project.slug}`}
                alt={project.title}
                width={400}
                height={225}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={project.aiHint}
              />
            </div>

            {/* Content */}
            <div className="px-5 pb-5">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
                      {project.tags.slice(0, 2).join(' • ')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                {/* Arrow icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-700/80 group-hover:bg-green-500/20 transition-all duration-300 group-hover:scale-110 ml-3 mt-2">
                  <ArrowRight className="h-5 w-5 text-stone-300 group-hover:text-green-400 transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Folder back layer for depth */}
          <div 
            className="absolute bg-stone-700/70 border border-stone-600/50 -z-10"
            style={{
              top: '48px',
              left: '8px',
              right: '-4px',
              bottom: '-4px',
              borderRadius: '20px',
              borderTopLeftRadius: '4px'
            }}
          />
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
//       className="group relative"
//     >
//       <Link href={`/work/${project.slug}`}>
//         <div className="relative">
//           {/* Folder Tab with angled edge */}
//           <div className="relative z-20">
//             <div 
//               className="inline-block bg-zinc-700/90 backdrop-blur-sm border border-zinc-600/50"
//               style={{
//                 clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)',
//                 height: '40px',
//                 width: '140px',
//                 paddingLeft: '20px',
//                 paddingRight: '35px'
//               }}
//             >
//               <div className="flex items-center justify-center h-full">
//                 <span className="text-sm font-medium text-zinc-300">{project.year}</span>
//               </div>
//             </div>
//           </div>

//           {/* Folder Body */}
//           <div className="relative z-10 -mt-px bg-zinc-700/90 backdrop-blur-sm border border-zinc-600/50 rounded-lg rounded-tl-none shadow-2xl transition-all duration-300 group-hover:bg-zinc-600/90 group-hover:shadow-3xl overflow-hidden">
//             {/* Image container */}
//             <div className="relative aspect-video overflow-hidden bg-zinc-800/50 m-4 rounded-lg">
//               <Image
//                 src={`https://picsum.photos/400/225?random=${project.slug}`}
//                 alt={project.title}
//                 width={400}
//                 height={225}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 data-ai-hint={project.aiHint}
//               />
              
//               {/* Overlay gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
//               {/* Corner gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
//             </div>

//             {/* Content */}
//             <div className="px-4 pb-4">
//               <div className="flex justify-between items-start">
//                 <div className="flex-1">
//                   <div className="mb-2">
//                     <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
//                       {project.tags.slice(0, 2).join(' • ')}
//                     </span>
//                   </div>
//                   <h3 className="text-lg font-bold text-white leading-tight">
//                     {project.title}
//                   </h3>
//                 </div>
                
//                 {/* Arrow icon */}
//                 <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-600/50 group-hover:bg-emerald-500/20 transition-all duration-300 group-hover:scale-110 ml-3">
//                   <ArrowRight className="h-4 w-4 text-zinc-400 group-hover:text-emerald-400 transition-all duration-300 group-hover:translate-x-0.5" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Folder back layer for depth */}
//           <div 
//             className="absolute top-8 left-1 right-0 bottom-0 bg-zinc-800/60 rounded-lg rounded-tl-none border border-zinc-700/30 -z-10"
//             style={{ transform: 'translateY(4px)' }}
//           />
//         </div>
//       </Link>
//     </motion.div>
//   );
// }

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
//         <div className="relative">
//           {/* Folder Tab */}
//           <div className="relative z-20 ml-6">
//             <div className="inline-block">
//               <div className="h-8 px-6 bg-card/80 backdrop-blur-sm rounded-t-lg border border-white/20 border-b-0 flex items-center">
//                 <span className="text-sm font-medium text-muted-foreground">{project.year}</span>
//               </div>
//             </div>
//           </div>

//           {/* Folder Body */}
//           <div className="relative z-10 -mt-px p-6 bg-card/80 backdrop-blur-sm rounded-lg rounded-tl-none border border-white/20 shadow-xl transition-all duration-300 group-hover:bg-card/90 group-hover:shadow-2xl group-hover:border-white/30">
//             {/* Image container */}
//             <div className="relative aspect-video rounded-lg overflow-hidden bg-muted/20 mb-4">
//               <Image
//                 src={`https://picsum.photos/400/225?random=${project.slug}`}
//                 alt={project.title}
//                 width={400}
//                 height={225}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 data-ai-hint={project.aiHint}
//               />
              
//               {/* Overlay gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </div>

//             {/* Content */}
//             <div className="space-y-3">
//               <div className="flex justify-between items-start">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-2">
//                     <span className="text-xs font-semibold text-primary uppercase tracking-wider">
//                       {project.tags.slice(0, 2).join(' • ')}
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                 </div>
                
//                 {/* Arrow icon */}
//                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
//                   <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Folder shadow/depth effect */}
//           <div className="absolute inset-0 top-8 bg-card/40 rounded-lg rounded-tl-none border border-white/10 -z-10 translate-x-1 translate-y-1" />
//         </div>
//       </Link>
//     </motion.div>
//   );
// }
