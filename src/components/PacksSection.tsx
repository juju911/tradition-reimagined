import { Star, Crown, Diamond, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PacksSection = () => {
  const packs = [
    {
      icon: Star,
      name: 'Pack Argent',
      subtitle: 'L\'essentiel pour vos cérémonies',
      description: 'Pack complet avec 3 tenues soigneusement sélectionnées pour votre événement.',
      includes: [
        '1 tenue de présentation',
        '2 tenues couples traditionnelles',
        'Sauf tenues Bété & Dida',
        'Accessoires de base inclus'
      ],
      popular: false,
      gradient: 'from-muted/50 to-secondary/30'
    },
    {
      icon: Crown,
      name: 'Pack Or',
      subtitle: 'Le raffinement à son apogée',
      description: 'Combinaison parfaite entre tradition et élégance avec des pièces d\'exception.',
      includes: [
        '1 tenue de présentation',
        '1 tenue couple Akan Or',
        '1 tenue couple Bété ou Dida',
        'Finitions premium'
      ],
      popular: true,
      gradient: 'from-luxury-gold/20 to-primary-hover/10'
    },
    {
      icon: Diamond,
      name: 'Pack Diamant',
      subtitle: 'L\'excellence absolue',
      description: 'Notre offre la plus prestigieuse avec parapluie traditionnel et sélection exclusive.',
      includes: [
        '1 tenue couple Akan Diamant',
        'Parapluie traditionnel inclus',
        '1 tenue couple Bété',
        '1 tenue couple au choix',
        'Service VIP complet'
      ],
      popular: false,
      gradient: 'from-deep-black/10 to-foreground/5'
    }
  ];

  return (
    <section id="packs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Location de Tenues Traditionnelles
            <span className="text-luxury-gold animate-gold-shimmer block">Packages Premium</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des formules complètes pensées pour répondre à tous vos besoins, 
            du plus simple au plus prestigieux
          </p>
        </div>

        {/* Packs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packs.map((pack, index) => (
            <Card 
              key={index}
              className={`relative hover-lift animate-fade-up border-0 shadow-elegant hover:shadow-luxury transition-all duration-300 ${
                pack.popular ? 'ring-2 ring-luxury-gold ring-opacity-50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pack.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-luxury-gold text-white px-6 py-2 rounded-full text-sm font-semibold shadow-luxury">
                    Plus Populaire
                  </div>
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${pack.gradient} rounded-lg`} />
              
              <CardHeader className="relative pb-4 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-primary-hover rounded-full flex items-center justify-center mx-auto mb-4 shadow-luxury">
                  <pack.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="font-playfair text-2xl text-foreground mb-2">
                  {pack.name}
                </CardTitle>
                <CardDescription className="text-luxury-gold font-medium">
                  {pack.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative">
                <p className="text-muted-foreground mb-6 text-center">
                  {pack.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-foreground mb-3">Inclus dans ce pack :</h4>
                  {pack.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <a 
                    href="https://wa.me/225566997785?text=Bonjour, je viens du Portfolio de SEKA C. VANESSA et je souhaite louer une tenue traditionnelle."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center ${
                      pack.popular 
                        ? 'bg-luxury-gold text-white hover:bg-primary-hover hover:shadow-glow' 
                        : 'border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white'
                    }`}
                  >
                    Demander un devis
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Info */}
        <div className="bg-secondary/30 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Phone className="w-6 h-6 text-luxury-gold mr-3" />
            <h3 className="font-playfair text-2xl font-bold text-foreground">
              Nos Tarifs de Location
            </h3>
          </div>
          
          {/* Prix des packs */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 rounded-lg p-6 border border-luxury-gold/20">
              <h4 className="font-playfair text-xl font-bold text-luxury-gold mb-2">Package Argent</h4>
              <p className="text-3xl font-bold text-foreground mb-2">65 000 FCFA</p>
              <p className="text-sm text-muted-foreground">3 tenues complètes</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-luxury-gold/20 ring-2 ring-luxury-gold/30">
              <h4 className="font-playfair text-xl font-bold text-luxury-gold mb-2">Package Or</h4>
              <p className="text-3xl font-bold text-foreground mb-2">80 000 FCFA</p>
              <p className="text-sm text-muted-foreground">3 tenues dont Akan & Bété/Dida</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-luxury-gold/20">
              <h4 className="font-playfair text-xl font-bold text-luxury-gold mb-2">Package Diamant</h4>
              <p className="text-3xl font-bold text-foreground mb-2">Prix sur devis</p>
              <p className="text-sm text-muted-foreground">Service VIP complet</p>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            <strong>Tenues individuelles :</strong> Akan & Bété & Dida (couple : 70 000 F, individuelle : 40 000 F), 
            Gouro & Peulh & Nigériane (couple : 60 000 F, individuelle : 35 000 F), 
            Guéré & Sénoufo & Yacouba & Burkinabé (couple : 50 000 F, individuelle : 30 000 F).
            <br/><br/>
            Contactez-nous via le ChatBot, WhatsApp, appel ou email pour un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/225566997785?text=Bonjour, je viens du Portfolio de SEKA C. VANESSA et je souhaite louer une tenue traditionnelle pour mon événement."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-luxury-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-hover hover:shadow-glow transition-all duration-300"
              >
                WhatsApp: +225 05 66 99 77 85
              </a>
              <a 
                href="tel:+225566997785"
                className="border-2 border-luxury-gold text-luxury-gold px-8 py-3 rounded-full font-semibold hover:bg-luxury-gold hover:text-white transition-all duration-300"
              >
                Appeler directement
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PacksSection;