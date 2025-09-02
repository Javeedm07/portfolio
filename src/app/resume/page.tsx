import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { resumeData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-48 py-16">
          <ScrollFadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-center mb-12">My Resume</h1>
          </ScrollFadeIn>

          <div className="space-y-12">
            <ScrollFadeIn delay="200ms">
              <Card>
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company} | {exp.period}</p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                        {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollFadeIn>

            <ScrollFadeIn delay="400ms">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {resumeData.education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution} | {edu.period}</p>
                      <p className="text-sm text-muted-foreground">{edu.grade}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollFadeIn>

            <ScrollFadeIn delay="600ms">
              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(resumeData.skills).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="font-semibold mb-2 capitalize">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollFadeIn>
            
            <ScrollFadeIn delay="800ms">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {resumeData.certifications.map((cert, index) => (
                      <p key={index} className="text-muted-foreground">{cert}</p>
                    ))}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Awards</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {resumeData.awards.map((award, index) => (
                      <p key={index} className="text-muted-foreground">{award}</p>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
