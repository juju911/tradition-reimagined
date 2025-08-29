import { useState } from 'react';
import { Plus, Minus, MessageCircle, Calendar, Palette, Phone } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      icon: Calendar,
      question: "Pour quels événements proposez-vous des tenues ?",
      answer: "Nous couvrons tous types d'événements : DOT (Dot traditionnelle), mariages, baptêmes, anniversaires, shootings photo, clips vidéo, cérémonies culturelles, et bien plus encore. Chaque occasion mérite une tenue exceptionnelle qui honore nos traditions."
    },
    {
      icon: MessageCircle,
      question: "Est-ce uniquement de la location ou proposez-vous aussi la vente ?",
      answer: "Nous proposons à la fois la location et la vente de tenues traditionnelles. La location est parfaite pour les événements spéciaux, tandis que nos créations sur mesure sont disponibles à l'achat pour celles qui souhaitent posséder une pièce unique."
    },
    {
      icon: Palette,
      question: "Quelles ethnies et cultures sont représentées dans vos créations ?",
      answer: "Nos collections couvrent les traditions ivoiriennes (Akan, Gouro, Bété, Sénoufo, Dida) ainsi que d'autres cultures africaines comme les Peulhs et Nigérianes. Nous utilisons des tissus authentiques : rafia tissé (Didá), tapa (Bété), bazin, kente, et autres textiles traditionnels."
    },
    {
      icon: Phone,
      question: "Comment réserver une tenue ou prendre rendez-vous ?",
      answer: "Très simple ! Contactez-nous directement via WhatsApp au 07 78 18 30 92 ou à travers notre page Facebook. Nous discuterons de vos besoins, de l'événement, et nous vous proposerons les meilleures options selon votre style et votre budget."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Questions 
            <span className="text-luxury-gold animate-gold-shimmer block">Fréquentes</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez tout ce que vous devez savoir sur nos services de location et création de tenues traditionnelles
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(index);
            const IconComponent = item.icon;
            
            return (
              <Card key={index} className="overflow-hidden hover-lift border-luxury-gold/20">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-luxury-gold/5 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-luxury-gold/10 rounded-full">
                        <IconComponent className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-foreground">
                        {item.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {isOpen ? (
                        <Minus className="w-6 h-6 text-luxury-gold" />
                      ) : (
                        <Plus className="w-6 h-6 text-luxury-gold" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6 ml-16">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-elegant rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-white mb-4">
              Une autre question ?
            </h3>
            <p className="text-white/80 mb-6">
              N'hésitez pas à nous contacter directement pour toute information supplémentaire
            </p>
            <button
              onClick={() => window.open('https://wa.me/0778183092', '_blank')}
              className="btn-gold px-8 py-3 rounded-full"
            >
              Contactez-nous sur WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;