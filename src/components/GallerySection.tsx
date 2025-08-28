import { useState } from 'react';
import { Eye, Heart, Play, ExternalLink } from 'lucide-react';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [activeCategory, setActiveCategory] = useState('all');

  const tabs = [
    { id: 'photos', name: 'Photos', icon: Eye },
    { id: 'videos', name: 'Vidéos', icon: Play }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les créations' },
    { id: 'ceremony', name: 'Tenues de cérémonie' },
    { id: 'modern', name: 'Collections modernes' },
    { id: 'custom', name: 'Créations personnalisées' },
  ];

  // Vidéos YouTube
  const videos = [
    {
      id: 1,
      title: 'Tenues Ivoiriennes dans sa Diversité',
      description: 'Découvrez la richesse et la variété des créations traditionnelles ivoiriennes',
      url: 'https://youtube.com/shorts/3M_sZ-eZSv0?si=30uyaGC7QyMWpHiz',
      embedId: '3M_sZ-eZSv0',
      category: 'Traditions Ivoiriennes',
      thumbnail: 'https://img.youtube.com/vi/3M_sZ-eZSv0/maxresdefault.jpg'
    },
    {
      id: 2,
      title: 'Tenue AKAN Jaune Royal',
      description: 'Une création somptueuse inspirée de la culture AKAN en jaune royal',
      url: 'https://youtube.com/shorts/vIvzhteFV9w?si=Pi5wO5L9r6eWyz0i',
      embedId: 'vIvzhteFV9w',
      category: 'Collections Royales',
      thumbnail: 'https://img.youtube.com/vi/vIvzhteFV9w/maxresdefault.jpg'
    },
    {
      id: 3,
      title: 'Robe de Mariée Traditionnelle',
      description: 'Une création unique pour un mariage traditionnel inoubliable',
      url: 'https://youtube.com/shorts/TEaUuVHX_DY?si=8KYC3vBtg0Rp7et4',
      embedId: 'TEaUuVHX_DY',
      category: 'Mariages',
      thumbnail: 'https://img.youtube.com/vi/TEaUuVHX_DY/maxresdefault.jpg'
    }
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

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-secondary/50 rounded-full p-2 flex space-x-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-luxury-gold text-white shadow-glow'
                      : 'text-foreground hover:bg-luxury-gold/10 hover:text-luxury-gold'
                  }`}
                >
                  <IconComponent size={18} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Photos Section */}
        {activeTab === 'photos' && (
          <>
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

            {/* Photo Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
          </>
        )}

        {/* Videos Section */}
        {activeTab === 'videos' && (
          <>
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground">
                Plongez dans l'univers de mes créations à travers ces vidéos exclusives
              </p>
            </div>

            {/* Video Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="group overflow-hidden rounded-2xl shadow-elegant hover-lift bg-card animate-fade-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Video Thumbnail/Preview */}
                  <div className="relative aspect-[9/16] bg-gradient-to-br from-luxury-gold/20 to-deep-black/20 overflow-hidden">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-deep-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-luxury-gold/90 rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-deep-black ml-1" />
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-deep-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-luxury-gold/90 backdrop-blur-sm px-6 py-3 rounded-full text-deep-black font-semibold hover:bg-luxury-gold transition-colors shadow-glow"
                      >
                        <ExternalLink size={18} />
                        <span>Voir sur YouTube</span>
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-luxury-gold bg-luxury-gold/10 px-3 py-1 rounded-full">
                        {video.category}
                      </span>
                      <Play className="w-5 h-5 text-luxury-gold" />
                    </div>
                    
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {video.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {video.description}
                    </p>
                    
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-luxury-gold hover:text-primary-hover font-medium text-sm transition-colors"
                    >
                      <span>Regarder maintenant</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

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