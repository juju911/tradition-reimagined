import { Palette, Scissors, Sparkles, Users, CheckCircle, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const CreationProcessSection = () => {
  const processSteps = [
    {
      icon: Users,
      title: "Consultation & Inspiration",
      description: "Échange personnalisé pour comprendre vos besoins",
      details: [
        "Discussion sur l'événement et vos attentes",
        "Choix du style et de l'ethnie représentée",
        "Prise de mesures personnalisées",
        "Définition du budget et des délais"
      ],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Palette,
      title: "Sélection des Tissus Traditionnels",
      description: "Choix minutieux des matières authentiques",
      details: [
        "Rafia tissé (Didá) pour l'authenticité",
        "Tapa (Bété) aux motifs ancestraux", 
        "Bazin et Kente de qualité premium",
        "Accessoires traditionnels assortis"
      ],
      color: "bg-amber-500/10 text-amber-600"
    },
    {
      icon: Scissors,
      title: "Couture Artisanale",
      description: "Réalisation avec techniques ancestrales",
      details: [
        "Coupe selon les patrons traditionnels",
        "Assemblage à la main par nos artisanes",
        "Finitions avec broderies authentiques",
        "Respect des codes culturels"
      ],
      color: "bg-emerald-500/10 text-emerald-600"
    },
    {
      icon: Sparkles,
      title: "Essayage & Ajustements",
      description: "Perfectionnement pour un rendu impeccable",
      details: [
        "Essayage avec conseils styling", 
        "Retouches pour un ajustement parfait",
        "Vérification des proportions",
        "Conseils pour le port et l'entretien"
      ],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: CheckCircle,
      title: "Finitions & Livraison",
      description: "Derniers détails et remise de la création",
      details: [
        "Nettoyage et repassage professionnel",
        "Emballage soigné dans nos pochettes",
        "Livraison ou retrait en boutique",
        "Guide d'entretien personnalisé"
      ],
      color: "bg-rose-500/10 text-rose-600"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Notre Processus de 
            <span className="text-luxury-gold animate-gold-shimmer block">Création</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            De l'idée à la réalisation, découvrez notre approche artisanale qui allie tradition ancestrale et excellence moderne
          </p>
        </div>

        {/* Timeline Interactive */}
        <div className="relative max-w-6xl mx-auto">
          {/* Ligne de connexion */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-luxury-gold via-luxury-gold/50 to-luxury-gold hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-16`}>
                  
                  {/* Numéro d'étape (desktop) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-white font-bold text-xl z-10 hidden lg:flex">
                    {index + 1}
                  </div>
                  
                  {/* Contenu */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <Card className="hover-lift border-luxury-gold/20 overflow-hidden">
                      <CardContent className="p-8">
                        <div className={`flex items-center mb-6 ${
                          isEven ? 'lg:justify-end' : 'lg:justify-start'
                        } justify-center`}>
                          <div className={`flex items-center justify-center w-16 h-16 rounded-full ${step.color}`}>
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <div className="ml-4 lg:hidden">
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-luxury-gold rounded-full text-white font-bold text-sm">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                          {step.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                          {step.description}
                        </p>
                        
                        <ul className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start text-sm text-muted-foreground">
                              <Heart className="w-4 h-4 text-luxury-gold mt-0.5 mr-3 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Espace pour l'autre côté */}
                  <div className="w-full lg:w-5/12 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-elegant rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-white mb-4">
              Prêt à créer votre tenue de rêve ?
            </h3>
            <p className="text-white/80 mb-6">
              Commençons ensemble votre projet de création traditionnelle
            </p>
            <button
              onClick={() => window.open('https://wa.me/0778183092', '_blank')}
              className="btn-gold px-8 py-3 rounded-full"
            >
              Démarrer mon projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreationProcessSection;