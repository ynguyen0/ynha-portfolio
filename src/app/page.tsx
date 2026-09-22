import Navigation from '@/components/Navigation';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#CFE1E2]">
      <Navigation />
      <About />
      <TechStack />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
