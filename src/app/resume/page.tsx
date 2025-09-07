import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { personalData, resumeData } from '@/lib/data';
import { ScrollFadeIn } from '@/components/scroll-fade-in';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          
          <ScrollFadeIn>
            <section className="flex flex-col sm:flex-row items-start gap-8 mb-16">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary/10 shadow-lg">
                <Image
                  src="/image.png"
                  alt={personalData.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="space-y-3 flex-grow">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{personalData.name}</h1>
                <p className="text-xl font-medium text-muted-foreground uppercase tracking-widest">{personalData.jobTitle}</p>
                <p className="text-muted-foreground">{personalData.location}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={personalData.socialLinks.linkedin} target="_blank">
                      LinkedIn <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={personalData.resumeUrl} target="_blank">
                      Download Resume <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <div className="space-y-16">
            <ScrollFadeIn delay="200ms">
              <section>
                <h2 className="text-2xl font-semibold uppercase tracking-widest mb-8">Work Experience</h2>
                <div className="space-y-10">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="grid md:grid-cols-4 gap-x-6">
                      <div className="md:col-span-1 text-muted-foreground text-sm">
                        <p>{exp.period.split('|')[0]}</p>
                      </div>
                      <div className="md:col-span-3">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="font-medium text-muted-foreground mb-3">
                           {exp.link ? (
                            <Link href={exp.link} target="_blank" className="hover:underline hover:text-foreground transition-colors">
                              {exp.company}
                            </Link>
                          ) : (
                            exp.company
                          )} | {exp.period.split('|')[1]?.trim()}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollFadeIn>

            <ScrollFadeIn delay="400ms">
               <section>
                <h2 className="text-2xl font-semibold uppercase tracking-widest mb-8">Education</h2>
                <div className="space-y-8">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="grid md:grid-cols-4 gap-x-6">
                      <div className="md:col-span-1 text-muted-foreground text-sm">
                        <p>{edu.period.split('|')[0]}</p>
                      </div>
                      <div className="md:col-span-3">
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="font-medium text-muted-foreground mb-1">{edu.institution} | {edu.period.split('|')[1]?.trim()}</p>
                         <p className="text-sm text-muted-foreground">{edu.grade}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollFadeIn>
            
            <ScrollFadeIn delay="600ms">
              <section>
                <h2 className="text-2xl font-semibold uppercase tracking-widest mb-8">Skills</h2>
                <Card>
                  <CardContent className="space-y-4 pt-6">
                    {Object.entries(resumeData.skills).map(([category, skills]) => (
                      <div key={category}>
                        <h4 className="font-semibold mb-3 capitalize text-muted-foreground">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </section>
            </ScrollFadeIn>
            
            <ScrollFadeIn delay="800ms">
              <section>
                <h2 className="text-2xl font-semibold uppercase tracking-widest mb-8">Certifications</h2>
                <div className="space-y-3 text-muted-foreground">
                  {resumeData.certifications.map((cert, index) => (
                    <p key={index}>{cert}</p>
                  ))}
                </div>
              </section>
            </ScrollFadeIn>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
