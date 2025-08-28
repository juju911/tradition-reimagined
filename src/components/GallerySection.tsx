import { useState } from 'react';
import { Eye, Heart } from 'lucide-react';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes les créations' },
    { id: 'ceremony', name: 'Tenues de cérémonie' },
    { id: 'modern', name: 'Collections modernes' },
    { id: 'custom', name: 'Créations personnalisées' },
  ];

  // Placeholder data - remplace par de vraies images
  const galleryItems = [
    {
      id: 1,
      category: 'ceremony',
      title: 'Robe de cérémonie traditionnelle',
      description: 'Ensemble brodé main, tissu Kente authentique',
      image: '/api/placeholder/400/600',
      likes: 45
    },
    {
      id: 2,
      category: 'modern',
      title: 'Collection Moderne "Héritage"',
      description: 'Fusion contemporaine et tradition',
      image: '/api/placeholder/400/600',
      likes: 32
    },
    {
      id: 3,
      category: 'custom',
      title: 'Création sur mesure',
      description: 'Pièce unique pour mariage traditionnel',
      image: '/api/placeholder/400/600',
      likes: 67
    },
    {
      id: 4,
      category: 'ceremony',
      title: 'Ensemble Grand Boubou',
      description: 'Broderies dorées et perles authentiques',
      image: '/api/placeholder/400/600',
      likes: 28
    },
    {
      id: 5,
      category: 'modern',
      title: 'Robe cocktail africaine',
      description: 'Élégance moderne aux accents traditionnels',
      image: '/api/placeholder/400/600',
      likes: 53
    },
    {
      id: 6,
      category: 'custom',
      title: 'Tenue de mariée unique',
      description: 'Création exclusive en wax premium',
      image: '/api/placeholder/400/600',
      likes: 89
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ma <span className="text-luxury-gold animate-gold-shimmer">Galerie</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes créations uniques où tradition et modernité se rencontrent 
            dans une harmonie parfaite
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-luxury-gold text-white shadow-glow'
                  : 'bg-secondary text-foreground hover:bg-luxury-gold/10 hover:text-luxury-gold'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-elegant hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <div className="w-full h-full bg-gradient-to-br from-luxury-gold/20 to-deep-black/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="font-playfair text-lg font-semibold mb-2">{item.title}</div>
                    <div className="text-sm">{item.description}</div>
                  </div>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-playfair text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-luxury-gold">
                      <Heart size={16} />
                      <span className="text-sm">{item.likes}</span>
                    </div>
                    
                    <button className="flex items-center space-x-2 bg-luxury-gold/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-luxury-gold hover:text-deep-black transition-colors">
                      <Eye size={16} />
                      <span className="text-sm">Voir plus</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Vous avez un projet de création sur mesure ?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold"
          >
            Discutons de votre projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;