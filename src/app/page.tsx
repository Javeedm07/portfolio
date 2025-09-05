import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { HomeWork } from '@/components/sections/home-work';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-48">
          <Hero />
          <About />
          <HomeWork />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
