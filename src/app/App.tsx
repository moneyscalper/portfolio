import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { FeaturedProjects } from '@/app/components/FeaturedProjects';
import { About } from '@/app/components/About';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}