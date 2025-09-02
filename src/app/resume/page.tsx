import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-48 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight">My Resume</h1>
          <p className="mt-4 text-lg text-muted-foreground">This page is under construction. Check back soon for my resume!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
