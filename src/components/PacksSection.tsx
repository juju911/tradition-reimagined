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
            Nos <span className="text-luxury-gold animate-gold-shimmer">Packs</span>
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
                    href="https://wa.me/22507781830920"
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
              Tarification Personnalisée
            </h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Pour connaître les tarifs individuels des tenues ou le détail complet des packs, 
            veuillez nous contacter via le ChatBot, WhatsApp, appel ou email. 
            Nous établirons un devis personnalisé selon vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/22507781830920"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-luxury-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-hover hover:shadow-glow transition-all duration-300"
            >
              WhatsApp: 07 78 18 30 92
            </a>
            <a 
              href="tel:+22507781830920"
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