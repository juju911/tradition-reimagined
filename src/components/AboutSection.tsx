import { Heart, Star, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury hover-lift">
              <img 
                src="/lovable-uploads/8bf2f39d-7ec8-48af-8ded-68bd390ddcd5.png"
                alt="Portrait de SEKA C. VANESSA"
                className="w-full h-[600px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/20 to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-luxury-gold rounded-full opacity-60" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-luxury-gold/10 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
              À propos de 
              <span className="text-luxury-gold animate-gold-shimmer block">SEKA C. VANESSA</span>
            </h2>
              <div className="w-24 h-1 bg-luxury-gold mb-8" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Passionnée de culture et de mode, SEKA C. VANESSA met en valeur la richesse du patrimoine africain à travers ses créations. 
                Sa boutique, TENUE TRADITIONNELLE, propose la location et la vente de tenues issues des traditions ivoiriennes 
                (Akan, Gouro, Bété, Sénoufo…), mais aussi des créations inspirées des peuples Peulhs et nigérians.
              </p>
              
              {/* Logo de la boutique */}
              <div className="flex justify-center py-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-luxury-gold/20">
                  <img 
                    src="/lovable-uploads/706179a4-8a32-4fcb-8ea8-f79e2066a54c.png?v=2"
                    alt="Tenue Traditionnelle - Logo de la boutique"
                    className="h-16 w-auto object-contain max-w-[200px] mx-auto"
                    onError={(e) => {
                      console.log('Boutique logo failed to load');
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <p className="text-center text-sm text-luxury-gold mt-2 font-medium">
                    TENUE TRADITIONNELLE - Sa boutique
                  </p>
                </div>
              </div>
              
              <p>
                Chaque tenue incarne une histoire, une identité et une élégance intemporelle. 
                Formée aux techniques ancestrales de tissage et enrichie par une vision moderne du design, 
                elle utilise des tissus authentiques comme le rafia tissé (Didá) et le tapa (Bété).
              </p>
              
              <p>
                Sa philosophie : 
                <span className="text-luxury-gold font-semibold italic"> « Sublimer la tradition africaine pour révéler la beauté authentique de chaque femme »</span>, 
                en créant des pièces qui transcendent les générations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-luxury-gold/20">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-4 mx-auto">
                  <Star className="w-8 h-8 text-luxury-gold" />
                </div>
                <div className="font-playfair text-3xl font-bold text-foreground mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-4 mx-auto">
                  <Heart className="w-8 h-8 text-luxury-gold" />
                </div>
                <div className="font-playfair text-3xl font-bold text-foreground mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Clientes satisfaites</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-4 mx-auto">
                  <Sparkles className="w-8 h-8 text-luxury-gold" />
                </div>
                <div className="font-playfair text-3xl font-bold text-foreground mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Créations uniques</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;