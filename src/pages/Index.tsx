import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { About } from '@/components/About';
import { FeaturedBooks } from '@/components/FeaturedBooks';
import { NewArrivals } from '@/components/NewArrivals';
import { Reviews } from '@/components/Reviews';
import { DigitalBook } from '@/components/DigitalBook';
import { Blog } from '@/components/Blog';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <FeaturedBooks />
        <NewArrivals />
        <Reviews />
        <DigitalBook />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
