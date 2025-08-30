import { useState } from 'react';
import { Eye, Heart, Play, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    { id: 'photos', name: 'Photos', icon: Eye },
    { id: 'videos', name: 'Vidéos', icon: Play }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les créations' },
    { id: 'akan', name: 'Tenues Akan' },
    { id: 'gouro', name: 'Tenues Gouro' },
    { id: 'bete', name: 'Tenues Bété' },
    { id: 'senoufo', name: 'Tenues Sénoufo' },
    { id: 'dida', name: 'Tenues Dida' },
    { id: 'peulh', name: 'Tenues Peulh' },
    { id: 'nigerian', name: 'Tenues Nigérianes' },
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

  const galleryItems = [
    {
      id: 1,
      category: 'ceremony',
      title: 'Tenue Traditionnelle Ivoirienne',
      description: 'Ensemble authentique avec bustier pailleté, jupe aux couleurs nationales et bijoux en or',
      image: '/lovable-uploads/53b88883-e31b-4eda-8877-e463aab6c0ea.png',
      likes: 127
    },
    {
      id: 2,
      category: 'ceremony',
      title: 'Couple Royal Africain',
      description: 'Tenues de cérémonie assorties avec motifs géométriques et accessoires dorés authentiques',
      image: '/lovable-uploads/038362a6-2fde-4e8a-8e61-73355f551086.png',
      likes: 89
    },
    {
      id: 3,
      category: 'custom',
      title: 'Reine AKAN - Collection Royale',
      description: 'Création exclusive avec couronne dorée, bijoux massifs et tissus aux motifs traditionnels',
      image: '/lovable-uploads/fa474781-81f2-4a81-a22d-5a64c3202b26.png',
      likes: 156
    },
    {
      id: 4,
      category: 'modern',
      title: 'Élégance Royale Moderne',
      description: 'Fusion parfaite entre tradition AKAN et sophistication contemporaine',
      image: '/lovable-uploads/58b27b46-eb21-4984-84a3-f57a2a38c13b.png',
      likes: 134
    },
    // Nouvelles photos AKAN
    {
      id: 5,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Magnifique ensemble AKAN avec pagne Kente authentique, bijoux dorés traditionnels et accessoires ethniques. Une création qui célèbre la richesse culturelle akan.',
      image: '/lovable-uploads/1a55c20a-52dc-4d0f-bfb5-ab14b32af217.png',
      likes: 145
    },
    {
      id: 6,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Élégante robe akan ornée de sequins rouges et dorés, couronne royale et colliers traditionnels massifs. Un hommage à la noblesse akan.',
      image: '/lovable-uploads/3b093cb8-8469-4378-8426-e69f54e7e606.png',
      likes: 167
    },
    {
      id: 7,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Couple royal akan en tenue de cérémonie avec tissus Kente authentiques, bijoux dorés et accessoires traditionnels. Perfection des détails culturels.',
      image: '/lovable-uploads/2ed7b78a-b18e-4c31-a403-441c4c9ebbbc.png',
      likes: 192
    },
    {
      id: 8,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Ensemble akan royal avec bâton de commandement, tissus Kente aux motifs géométriques et parure complète en or. Symbole de prestige et tradition.',
      image: '/lovable-uploads/6b745224-8edd-4f44-9128-9bec4ef48804.png',
      likes: 178
    },
    {
      id: 9,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Création akan avec éventail en plumes d\'or, diadème floral doré et pagne Kente royal. Expression parfaite de l\'élégance akan traditionnelle.',
      image: '/lovable-uploads/ab4f1c7d-6ccc-4624-bbd5-9c61ed7761f9.png',
      likes: 156
    },
    {
      id: 10,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Tenue akan de cérémonie avec colliers dorés superposés, diadème floral et tissus colorés traditionnels. Beauté et authenticité culturelle.',
      image: '/lovable-uploads/75e72368-9853-4d1f-bce4-a2983c65dcce.png',
      likes: 143
    },
    {
      id: 11,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Ensemble akan sophistiqué avec parure dorée complète, diadème royal et tissus aux motifs ethniques. Raffinement et tradition akan.',
      image: '/lovable-uploads/7cf9cd32-4148-43c0-a3b4-68a51a0aa924.png',
      likes: 189
    },
    {
      id: 12,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Création akan exceptionnelle avec bijoux dorés traditionnels, diadème floral et tissus colorés authentiques. Chef-d\'œuvre de l\'artisanat akan.',
      image: '/lovable-uploads/33c7a2aa-9ead-4129-9a26-de3ac6808422.png',
      likes: 201
    },
    {
      id: 13,
      category: 'modern',
      title: 'Collection Moderne "Héritage"',
      description: 'Fusion contemporaine et tradition africaine',
      image: '/api/placeholder/400/600',
      likes: 32
    },
    {
      id: 14,
      category: 'custom',
      title: 'Création sur mesure Premium',
      description: 'Pièce unique pour événement spécial',
      image: '/api/placeholder/400/600',
      likes: 67
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openModal = (index: number) => {
    const filtered = filteredItems;
    const actualIndex = galleryItems.findIndex(item => item.id === filtered[index].id);
    setSelectedImageIndex(actualIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? galleryItems.length - 1 : selectedImageIndex - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeModal();
  };

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
                    {item.image.startsWith('/api/placeholder') ? (
                      <div className="w-full h-full bg-gradient-to-br from-luxury-gold/20 to-deep-black/20 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <div className="font-playfair text-lg font-semibold mb-2">{item.title}</div>
                          <div className="text-sm">{item.description}</div>
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
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
                        
                        <button 
                          onClick={() => openModal(index)}
                          className="flex items-center space-x-2 bg-luxury-gold/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-luxury-gold hover:text-deep-black transition-colors"
                        >
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

        {/* Modal de visualisation des images */}
        {isModalOpen && selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-deep-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
              {/* Bouton fermer */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-deep-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-luxury-gold hover:text-deep-black transition-colors"
              >
                <X size={20} />
              </button>

              {/* Bouton précédent */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-deep-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-luxury-gold hover:text-deep-black transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Bouton suivant */}
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-deep-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-luxury-gold hover:text-deep-black transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image principale */}
              <div 
                className="relative max-w-full max-h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryItems[selectedImageIndex].image}
                  alt={galleryItems[selectedImageIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />
                
                {/* Informations de l'image */}
                <div className="mt-6 text-center max-w-2xl">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                    {galleryItems[selectedImageIndex].title}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {galleryItems[selectedImageIndex].description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-luxury-gold mt-4">
                    <Heart size={18} />
                    <span>{galleryItems[selectedImageIndex].likes} J'aime</span>
                  </div>
                </div>

                {/* Indicateur de position */}
                <div className="mt-4 text-white/60 text-sm">
                  {selectedImageIndex + 1} / {galleryItems.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;