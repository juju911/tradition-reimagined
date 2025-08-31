import { Check, MessageCircle, Calendar, CreditCard, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Contactez-nous",
      description: "Décrivez votre événement et vos préférences via WhatsApp, notre chatbot ou Facebook. Nous discutons de vos besoins spécifiques."
    },
    {
      icon: Sparkles,
      number: "02", 
      title: "Sélection personnalisée",
      description: "Nous vous présentons une sélection de tenues adaptées à votre événement : mariage, DOT, cérémonie, selon votre budget et style."
    },
    {
      icon: Calendar,
      number: "03",
      title: "Essayage & Réservation",
      description: "Prise de rendez-vous pour l'essayage dans notre boutique à Abidjan. Ajustements inclus pour un ajustement parfait."
    },
    {
      icon: CreditCard,
      number: "04",
      title: "Confirmation & Livraison",
      description: "Paiement sécurisé et récupération de votre tenue. Service de livraison disponible dans toute la Côte d'Ivoire."
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comment Louer une 
            <span className="text-luxury-gold animate-gold-shimmer block">Tenue Traditionnelle ?</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un processus simple et personnalisé pour vous garantir la tenue parfaite pour votre événement spécial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <Card key={index} className="relative overflow-hidden hover-lift border-luxury-gold/20 group">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-playfair font-bold text-luxury-gold/10 group-hover:text-luxury-gold/20 transition-colors duration-300">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex items-center justify-center w-20 h-20 bg-luxury-gold/10 rounded-full mb-6 mx-auto group-hover:bg-luxury-gold/20 transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-luxury-gold" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-luxury-gold/30" />
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-elegant rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-white mb-4">
              Prêt(e) à commencer ?
            </h3>
            <p className="text-white/80 mb-6">
              Contactez-nous dès maintenant pour discuter de votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/225566997785?text=Bonjour, je viens du Portfolio de SEKA C. VANESSA et je souhaite louer une tenue traditionnelle pour mon événement.', '_blank')}
                className="btn-gold"
              >
                WhatsApp : +225 05 66 99 77 85
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-elegant bg-white/10 border-white text-white hover:bg-white hover:text-deep-black"
              >
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;