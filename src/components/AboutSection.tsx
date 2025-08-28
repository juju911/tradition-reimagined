import { Heart, Star, Sparkles } from 'lucide-react';
import vanessaPortrait from '@/assets/vanessa-portrait.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury hover-lift">
              <img 
                src={vanessaPortrait}
                alt="Portrait de SEKA Vanessa"
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
                <span className="text-luxury-gold animate-gold-shimmer block">Vanessa</span>
              </h2>
              <div className="w-24 h-1 bg-luxury-gold mb-8" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Passionnée par la richesse culturelle africaine depuis son plus jeune âge, 
                SEKA Vanessa a consacré sa vie à perpétuer et moderniser l'art vestimentaire traditionnel.
              </p>
              
              <p>
                Formée aux techniques ancestrales de couture et enrichie par des études en design moderne, 
                elle crée des pièces uniques qui racontent une histoire, celle d'un continent aux mille couleurs 
                et aux traditions millénaires.
              </p>
              
              <p>
                Chaque création de son atelier reflète cette philosophie : 
                <span className="text-luxury-gold font-semibold italic"> honorer le passé tout en embrassant l'avenir</span>, 
                pour des femmes qui portent fièrement leur héritage.
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