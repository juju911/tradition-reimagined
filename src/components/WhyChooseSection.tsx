import { Crown, Shield, Heart, Star, Sparkles, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Crown,
      title: "Authenticité Garantie",
      description: "Tissus traditionnels authentiques : pagne rafia tissé (Didá), tapa (Bété), kente (Akan). Chaque pièce respecte les codes culturels ancestraux."
    },
    {
      icon: Sparkles,
      title: "Créations Modernes",
      description: "Alliance parfaite entre tradition et modernité. Nos créations subliment votre silhouette tout en honorant notre patrimoine culturel."
    },
    {
      icon: Shield,
      title: "Service Premium",
      description: "Accompagnement personnalisé de A à Z. Conseils stylistiques, ajustements inclus, service client dédié pour votre événement."
    },
    {
      icon: Heart,
      title: "Passion & Expertise",
      description: "Plus de 8 années d'expérience dans la création de tenues traditionnelles. Une passion transmise avec amour et professionnalisme."
    },
    {
      icon: Star,
      title: "Qualité Exceptionnelle", 
      description: "Matériaux nobles, finitions impeccables, attention aux détails. Chaque tenue est une œuvre d'art portée avec fierté."
    },
    {
      icon: Users,
      title: "Clientèle Satisfaite",
      description: "Plus de 200 clientes satisfaites, des témoignages élogieux. Votre satisfaction est notre priorité absolue."
    }
  ];

  return (
    <section id="why-choose" className="py-24 bg-gradient-to-br from-secondary/10 via-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pourquoi Choisir 
            <span className="text-luxury-gold animate-gold-shimmer block">SEKA Vanessa ?</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez les raisons qui font de SEKA Vanessa votre partenaire privilégié pour sublimer vos événements avec des tenues traditionnelles d'exception
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            
            return (
              <Card key={index} className="relative overflow-hidden hover-lift border-luxury-gold/20 group">
                <CardContent className="p-8 text-center">
                  {/* Background Decoration */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-luxury-gold/5 rounded-full group-hover:bg-luxury-gold/10 transition-colors duration-500" />
                  
                  {/* Icon */}
                  <div className="relative flex items-center justify-center w-20 h-20 bg-luxury-gold/10 rounded-full mb-6 mx-auto group-hover:bg-luxury-gold/20 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-10 h-10 text-luxury-gold" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonial Quote */}
        <div className="text-center mt-16">
          <div className="bg-gradient-elegant rounded-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Quote marks decoration */}
            <div className="absolute top-6 left-6 text-6xl text-luxury-gold/20 font-playfair">"</div>
            <div className="absolute bottom-6 right-6 text-6xl text-luxury-gold/20 font-playfair rotate-180">"</div>
            
            <blockquote className="text-xl md:text-2xl text-white font-playfair italic leading-relaxed mb-6">
              Sublimer la tradition africaine pour révéler la beauté authentique de chaque femme, 
              en créant des pièces qui transcendent les générations
            </blockquote>
            <cite className="text-luxury-gold font-medium text-lg">
              — SEKA C. Vanessa, Fondatrice & Créatrice
            </cite>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
            Rejoignez nos clientes satisfaites
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Faites confiance à notre expertise pour votre prochain événement spécial
          </p>
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold"
          >
            Découvrir nos créations
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;