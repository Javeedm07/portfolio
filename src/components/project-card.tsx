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
        <div className="relative rounded-t-xl overflow-hidden">
          {/* Folder Tab */}
          <div className="absolute top-0 left-4 h-6 w-32 bg-card/60 backdrop-blur-sm rounded-t-md flex items-center justify-center">
            <span className="text-xs font-semibold text-muted-foreground">{project.year}</span>
          </div>

          {/* Folder Body */}
          <div className="mt-4 p-4 bg-card/60 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg">
            {/* Image container */}
            <div className="relative aspect-video rounded-md overflow-hidden bg-primary/10">
              <Image
                src={`https://picsum.photos/400/225?random=${project.slug}`}
                alt={project.title}
                width={400}
                height={225}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.aiHint}
              />
            </div>

            {/* Content */}
            <div className="pt-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{project.tags.slice(0, 2).join(' | ')}</p>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{project.title}</h3>
                </div>
                <div className="mt-2 p-2 rounded-full bg-secondary/0 group-hover:bg-secondary transition-colors duration-300">
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
