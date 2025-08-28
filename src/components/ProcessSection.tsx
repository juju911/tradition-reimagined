import { Palette, Scissors, Sparkles, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Palette,
      title: 'Conception & Croquis',
      description: 'Échange sur vos envies, création des premiers croquis et choix du style général',
      details: ['Consultation personnalisée', 'Esquisse des premières idées', 'Validation du concept'],
      color: 'from-luxury-gold to-primary-hover'
    },
    {
      icon: Scissors,
      title: 'Sélection des Tissus',
      description: 'Choix minutieux des matières nobles : wax authentique, soie, coton premium',
      details: ['Tissus d\'exception', 'Couleurs harmonieuses', 'Textures authentiques'],
      color: 'from-deep-black to-foreground'
    },
    {
      icon: Sparkles,
      title: 'Couture Artisanale',
      description: 'Réalisation à la main avec techniques traditionnelles et finitions modernes',
      details: ['Couture main experte', 'Broderies personnalisées', 'Détails raffinés'],
      color: 'from-luxury-gold to-primary-hover'
    },
    {
      icon: CheckCircle,
      title: 'Finitions & Livraison',
      description: 'Retouches finales, essayage et livraison de votre pièce unique',
      details: ['Ajustements parfaits', 'Contrôle qualité', 'Livraison soignée'],
      color: 'from-deep-black to-foreground'
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Mon <span className="text-luxury-gold animate-gold-shimmer">Processus</span> Créatif
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De l'idée à la réalisation, chaque étape est pensée pour créer 
            la pièce parfaite qui vous ressemble
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-20 bottom-20 w-1 bg-gradient-to-b from-luxury-gold via-luxury-gold to-luxury-gold rounded-full" />

          <div className="space-y-16 lg:space-y-32">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 lg:w-1/2">
                  <div 
                    className={`bg-card rounded-2xl p-8 shadow-elegant hover-lift animate-fade-up ${
                      index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-luxury`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-luxury-gold mb-2 block">
                          Étape {index + 1}
                        </span>
                        <h3 className="font-playfair text-2xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-20 h-20 bg-luxury-gold rounded-full items-center justify-center shadow-glow relative z-10">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="font-playfair font-bold text-luxury-gold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="flex-1 lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 p-8 bg-gradient-elegant rounded-2xl shadow-luxury">
          <h3 className="font-playfair text-3xl font-bold text-white mb-4">
            Prêt à commencer votre projet ?
          </h3>
          <p className="text-white/80 mb-8 text-lg">
            Chaque création commence par une conversation. Parlons de vos rêves !
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-luxury-gold text-deep-black px-10 py-4 rounded-full font-semibold hover:bg-white hover:shadow-glow transition-all duration-300"
          >
            Démarrer mon projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;