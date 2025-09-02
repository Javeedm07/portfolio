import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-48 py-16">
          <Card className="overflow-hidden">
            <div className="relative h-96 w-full">
              <Image
                src={`https://picsum.photos/1200/800?random=${project.slug}`}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={project.aiHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-4xl font-bold">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-lg">{project.description}</p>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Key Details</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.details.map((detail, i) => <li key={i}>{detail}</li>)}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
