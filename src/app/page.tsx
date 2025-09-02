import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Work } from '@/components/sections/work';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 sm:px-10 lg:px-16">
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
