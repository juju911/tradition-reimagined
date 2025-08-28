import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Aminata Touré',
      role: 'Entrepreneure',
      content: 'SEKA Vanessa a créé la robe parfaite pour mon mariage traditionnel. Son attention aux détails et sa compréhension de nos traditions m\'ont profondément touchée. Une artiste exceptionnelle !',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Fatou Diallo',
      role: 'Avocate',
      content: 'Chaque pièce raconte une histoire. Vanessa a su capturer l\'essence de mes racines dans une création moderne et élégante. Je me sens fière et magnifique dans ses créations.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Marie-Claire Sow',
      role: 'Directrice Marketing',
      content: 'Un travail d\'orfèvre ! La qualité des finitions et l\'originalité des designs font de SEKA Vanessa une créatrice hors du commun. Mes collègues me demandent toujours où j\'ai trouvé mes tenues.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'Aïssa Konaté',
      role: 'Médecin',
      content: 'Beyond expectations! Vanessa m\'a accompagnée dans la création d\'une tenue pour une cérémonie importante. Son professionnalisme et sa créativité ont rendu cette expérience inoubliable.',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Leurs <span className="text-luxury-gold animate-gold-shimmer">Témoignages</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfaction de mes clientes est ma plus belle récompense. 
            Découvrez leurs expériences et ressentis.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="p-8 bg-card border-0 shadow-elegant hover-lift animate-fade-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-luxury-gold/20">
                <Quote size={48} />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center text-white font-playfair font-bold text-lg shadow-luxury">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground font-playfair">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 via-transparent to-luxury-gold/10 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Media & Press */}
        <div className="text-center">
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-8">
            Dans les médias
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Vogue Africa', 'Elle Sénégal', 'African Fashion', 'Style Magazine'].map((media, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-muted rounded-lg font-medium text-muted-foreground hover:text-luxury-gold transition-colors cursor-pointer"
              >
                {media}
              </div>
            ))}
          </div>

          <p className="text-muted-foreground mt-8 italic">
            "Une créatrice qui révolutionne l'art vestimentaire africain" - Vogue Africa
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;