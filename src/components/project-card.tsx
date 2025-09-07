"use client"
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/data';

type ProjectCardProps = {
  project: Project;
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
