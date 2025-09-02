import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Work } from '@/components/sections/work';

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <Work />
      </main>
      <Footer />
    </div>
  );
}
