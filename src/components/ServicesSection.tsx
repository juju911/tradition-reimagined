import { Crown, Users, Sparkles, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Crown,
      title: 'Location de Tenues Traditionnelles',
      description: 'Découvrez notre collection exclusive de tenues traditionnelles ivoiriennes authentiques.',
      details: ['Tenues Akan, Gouro, Bété, Sénoufo', 'Tissus nobles et authentiques', 'Toutes tailles disponibles', 'Accessoires inclus'],
      color: 'from-luxury-gold to-primary-hover'
    },
    {
      icon: Sparkles,
      title: 'Tenues Africaines Modernes',
      description: 'Location et vente de magnifiques tenues africaines contemporaines pour tous vos événements.',
      details: ['Styles Peulhs et Nigérians', 'Créations modernes', 'Qualité premium', 'Design tendance'],
      color: 'from-deep-black to-foreground'
    },
    {
      icon: Users,
      title: 'Habillage des Mariés',
      description: 'Accompagnement complet pour sublimer les mariés lors de leur cérémonie traditionnelle.',
      details: ['Consultation personnalisée', 'Coordination parfaite', 'Mise en valeur des mariés', 'Service haut de gamme'],
      color: 'from-luxury-gold to-primary-hover'
    },
    {
      icon: MessageCircle,
      title: 'Conseil & Accompagnement',
      description: 'Notre expertise à votre service pour choisir la tenue parfaite selon votre événement.',
      details: ['DOT, mariage, baptême', 'Shooting photo & clip', 'Anniversaires', 'Conseils personnalisés'],
      color: 'from-deep-black to-foreground'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nos <span className="text-luxury-gold animate-gold-shimmer">Services</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre gamme complète de services pour sublimer vos moments précieux
            avec l'élégance de la tradition africaine
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover-lift animate-fade-up bg-card border-0 shadow-elegant hover:shadow-luxury transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-luxury group-hover:shadow-glow transition-all duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-playfair text-2xl text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 bg-gradient-elegant rounded-2xl shadow-luxury">
          <h3 className="font-playfair text-3xl font-bold text-white mb-4">
            Besoin d'un conseil personnalisé ?
          </h3>
          <p className="text-white/80 mb-8 text-lg">
            Notre équipe d'experts est là pour vous accompagner dans le choix de votre tenue parfaite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/22507781830920"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-luxury-gold text-deep-black px-8 py-4 rounded-full font-semibold hover:bg-white hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center"
            >
              Contacter sur WhatsApp
            </a>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-deep-black transition-all duration-300"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;