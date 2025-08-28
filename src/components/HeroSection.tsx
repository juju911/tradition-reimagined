import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Création traditionnelle africaine élégante"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            SEKA Vanessa
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            Fondatrice & Créatrice de Tenues Traditionnelles
          </p>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-playfair text-white mb-12 italic max-w-3xl mx-auto leading-relaxed">
            « Sublimer la tradition à travers l'art vestimentaire »
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="btn-gold text-lg px-10 py-6 rounded-full shadow-glow"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir mes créations
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="btn-elegant text-lg px-10 py-6 rounded-full border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-deep-black"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Mon histoire
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white/70 hover:text-luxury-gold transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-luxury-gold/30 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-luxury-gold/30 rounded-full animate-float animation-delay-1000 hidden lg:block" />
    </section>
  );
};

export default HeroSection;