import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import ServicesSection from '../components/ServicesSection';
import PacksSection from '../components/PacksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import { Chatbot } from '../components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ServicesSection />
        <PacksSection />
        <FAQSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
