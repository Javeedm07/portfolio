import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Work } from '@/components/sections/work';

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-48">
          <Work />
        </div>
      </main>
      <Footer />
    </div>
  );
}
