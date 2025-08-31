import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import ServicesSection from '../components/ServicesSection';
import PacksSection from '../components/PacksSection';
import ProcessSection from '../components/ProcessSection';
import WhyChooseSection from '../components/WhyChooseSection';
import FAQSection from '../components/FAQSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Chatbot } from '../components/Chatbot';
import WhatsAppButton from '../components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';

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
        <ProcessSection />
        <WhyChooseSection />
        <FAQSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
      <Toaster />
    </div>
  );
};

export default Index;
