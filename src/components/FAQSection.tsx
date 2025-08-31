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
      question: "Pour quels événements proposez-vous la location de tenues traditionnelles ?",
      answer: "Nous couvrons tous types d'événements : DOT (Dot traditionnelle), mariages africains, baptêmes, anniversaires, shootings photo, clips vidéo, cérémonies culturelles, événements d'entreprise. Chaque occasion mérite une tenue exceptionnelle qui honore nos traditions ivoiriennes et africaines."
    },
    {
      icon: MessageCircle,
      question: "Proposez-vous la vente ou uniquement la location de tenues africaines ?",
      answer: "Nous proposons à la fois la location et la vente de tenues traditionnelles. La location (packages de 65 000 à 100 000 FCFA) est parfaite pour les événements spéciaux, tandis que nos créations sur mesure sont disponibles à l'achat pour celles qui souhaitent posséder une pièce unique."
    },
    {
      icon: Palette,
      question: "Quelles cultures ivoiriennes et africaines sont représentées ?",
      answer: "Nos collections couvrent les traditions ivoiriennes (Akan, Gouro, Bété, Sénoufo, Dida) ainsi que d'autres cultures africaines (Peulhs, Nigérianes, Burkinabé). Nous utilisons des tissus authentiques : pagne rafia tissé (Didá), tapa (Bété), bazin, kente, et autres textiles traditionnels de qualité premium."
    },
    {
      icon: Phone,
      question: "Comment louer une tenue traditionnelle ivoirienne à Abidjan ?",
      answer: "Très simple ! Contactez-nous via WhatsApp au +225 05 66 99 77 85, par notre chatbot sur le site, ou sur Facebook. Nous discuterons de vos besoins, de l'événement (mariage africain, cérémonie DOT, baptême), et vous proposerons les meilleures options selon votre style et budget. Nous sommes basés à Yopougon Sicogi - Pont Vagabond, Abidjan."
    },
    {
      icon: Calendar,
      question: "Quels sont les délais pour la location d'une tenue traditionnelle ?",
      answer: "Nous recommandons de réserver au moins 2 semaines avant votre événement pour garantir la disponibilité. Pour les créations sur mesure, comptez 3-4 semaines. Les ajustements sont inclus dans nos services pour un ajustement parfait."
    },
    {
      icon: MessageCircle,
      question: "Quels sont vos tarifs de location pour tenues traditionnelles africaines ?",
      answer: "Nos tarifs varient selon le type de tenue et le package choisi : Package Argent (65 000 FCFA - 3 tenues), Package Or (80 000 FCFA - inclut tenues AKAN or), Package Diamant (100 000 FCFA - avec parapluie traditionnel). Tenues individuelles de 30 000 à 40 000 FCFA. Demoiselles/garçons d'honneur : 20 000 FCFA. Contactez-nous pour un devis personnalisé selon votre événement et vos besoins."
    },
    {
      icon: Palette,
      question: "Livrez-vous en dehors d'Abidjan et à l'international ?",
      answer: "Oui ! Nous livrons dans toute la Côte d'Ivoire et proposons également nos services à l'international. Les frais de livraison sont calculés selon la destination. Notre clientèle s'étend au-delà des frontières ivoiriennes."
    },
    {
      icon: Phone,
      question: "Proposez-vous des tenues pour hommes et enfants ?",
      answer: "Absolument ! Nos collections incluent des tenues traditionnelles pour toute la famille : hommes, femmes, enfants. Nous créons des ensembles harmonieux pour les couples et familles lors d'événements spéciaux comme les mariages ou cérémonies DOT."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Questions Fréquentes sur la 
            <span className="text-luxury-gold animate-gold-shimmer block">Location de Tenues Traditionnelles</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tout ce que vous devez savoir sur nos services de location et création de tenues traditionnelles ivoiriennes à Abidjan
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