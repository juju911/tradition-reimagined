import { useState } from 'react';
import { Eye, Heart, Play, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [showAllAudios, setShowAllAudios] = useState(false);

  const tabs = [
    { id: 'photos', name: 'Photos', icon: Eye },
    { id: 'videos', name: 'Vidéos', icon: Play },
    { id: 'audios', name: 'Audios', icon: Play }
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

  // Vidéos Facebook
  const videos = [
    {
      id: 1,
      title: 'Tenue Traditionnelle DIDA Authentique',
      description: 'Découvrez la beauté des tenues traditionnelles DIDA avec leurs tissus rafia naturel et leurs accessoires ethniques',
      url: 'https://www.facebook.com/share/v/17J3tSqrwj/',
      type: 'facebook',
      category: 'DIDA',
      thumbnail: '/lovable-uploads/b410a7b0-7102-4987-a19f-59e9bb89b0ae.png'
    },
    {
      id: 2,
      title: 'Élégance AKAN Royale',
      description: 'Plongez dans l\'univers royal AKAN avec cette magnifique création aux tissus Kente et bijoux dorés',
      url: 'https://www.facebook.com/share/v/1AqCBPAjR7/',
      type: 'facebook',
      category: 'AKAN',
      thumbnail: '/lovable-uploads/c916c853-015a-4729-83c4-1d6f78e8bfcd.png'
    },
    {
      id: 3,
      title: 'Création AKAN Exceptionnelle',
      description: 'Une tenue AKAN d\'exception qui marie tradition et modernité dans un style unique',
      url: 'https://www.facebook.com/share/v/1A5cx84Uek/',
      type: 'facebook',
      category: 'AKAN',
      thumbnail: '/lovable-uploads/234edd8d-1967-4e46-ab14-da14fbbcaf04.png'
    },
    {
      id: 4,
      title: 'Majesté AKAN Traditionnelle',
      description: 'Admirez cette création AKAN somptueuse qui reflète toute la richesse culturelle de cette tradition',
      url: 'https://www.facebook.com/share/v/17724rJYuC/',
      type: 'facebook',
      category: 'AKAN',
      thumbnail: '/lovable-uploads/c0ab1164-5434-4710-b698-3f22efbf5296.png'
    },
    {
      id: 5,
      title: 'Tenue Traditionnelle GOURO',
      description: 'Découvrez l\'art vestimentaire GOURO avec cette création authentique aux couleurs chatoyantes',
      url: 'https://www.facebook.com/share/v/1ETdc9iofb/',
      type: 'facebook',
      category: 'GOURO',
      thumbnail: '/lovable-uploads/d963ec1c-771a-4600-bd7e-5c3b3a314f1d.png'
    },
    {
      id: 6,
      title: 'Présentation de la Boutique et des Pagnes',
      description: 'Visitez notre boutique et découvrez notre collection de pagnes traditionnels authentiques',
      url: 'https://www.facebook.com/share/v/19tqFEAAKV/',
      type: 'facebook',
      category: 'Présentation',
      thumbnail: '/lovable-uploads/1c16b39e-deb0-4ec0-b3dd-bd76f9d69754.png'
    },
    {
      id: 7,
      title: 'Tenue Foulard en Pays AKAN',
      description: 'L\'art du port du foulard dans la tradition AKAN, une élégance intemporelle',
      url: 'https://www.facebook.com/share/v/1FzKcwcdzn/',
      type: 'facebook',
      category: 'AKAN',
      thumbnail: '/lovable-uploads/b5bfa6d9-4881-4116-bfd2-890dbf088809.png'
    }
  ];

  // Audios SoundCloud
  const audios = [
    {
      id: 1,
      title: 'Tenue AKAN',
      description: 'Présentation audio de nos magnifiques tenues traditionnelles AKAN',
      url: 'https://soundcloud.com/tenue-traditionnelle/tenue-akan?si=36b32d202e954034890ce688a49b4557&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      category: 'AKAN'
    },
    {
      id: 2,
      title: 'Tenue DIDA',
      description: 'Découvrez l\'authentique tradition DIDA à travers cette présentation audio',
      url: 'https://soundcloud.com/tenue-traditionnelle/tenue-akan?si=36b32d202e954034890ce688a49b4557&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      category: 'DIDA'
    },
    {
      id: 3,
      title: 'Présentation du Magasin',
      description: 'Visite audio de notre boutique de tenues traditionnelles et de nos collections',
      url: 'https://soundcloud.com/tenue-traditionnelle/tenue-akan?si=36b32d202e954034890ce688a49b4557&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      category: 'Présentation'
    }
  ];

  const galleryItems = [
    // Photos AKAN
    {
      id: 1,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Magnifique ensemble AKAN avec pagne Kente authentique, bijoux dorés traditionnels et accessoires ethniques. Une création qui célèbre la richesse culturelle akan.',
      image: '/lovable-uploads/1a55c20a-52dc-4d0f-bfb5-ab14b32af217.png',
      likes: 145
    },
    {
      id: 2,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Élégante robe akan ornée de sequins rouges et dorés, couronne royale et colliers traditionnels massifs. Un hommage à la noblesse akan.',
      image: '/lovable-uploads/3b093cb8-8469-4378-8426-e69f54e7e606.png',
      likes: 167
    },
    {
      id: 3,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Couple royal akan en tenue de cérémonie avec tissus Kente authentiques, bijoux dorés et accessoires traditionnels. Perfection des détails culturels.',
      image: '/lovable-uploads/2ed7b78a-b18e-4c31-a403-441c4c9ebbbc.png',
      likes: 192
    },
    {
      id: 4,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Ensemble akan royal avec bâton de commandement, tissus Kente aux motifs géométriques et parure complète en or. Symbole de prestige et tradition.',
      image: '/lovable-uploads/6b745224-8edd-4f44-9128-9bec4ef48804.png',
      likes: 178
    },
    {
      id: 5,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Création akan avec éventail en plumes d\'or, diadème floral doré et pagne Kente royal. Expression parfaite de l\'élégance akan traditionnelle.',
      image: '/lovable-uploads/ab4f1c7d-6ccc-4624-bbd5-9c61ed7761f9.png',
      likes: 156
    },
    {
      id: 6,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Tenue akan de cérémonie avec colliers dorés superposés, diadème floral et tissus colorés traditionnels. Beauté et authenticité culturelle.',
      image: '/lovable-uploads/75e72368-9853-4d1f-bce4-a2983c65dcce.png',
      likes: 143
    },
    {
      id: 7,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Ensemble akan sophistiqué avec parure dorée complète, diadème royal et tissus aux motifs ethniques. Raffinement et tradition akan.',
      image: '/lovable-uploads/7cf9cd32-4148-43c0-a3b4-68a51a0aa924.png',
      likes: 189
    },
    {
      id: 8,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Création akan exceptionnelle avec bijoux dorés traditionnels, diadème floral et tissus colorés authentiques. Chef-d\'œuvre de l\'artisanat akan.',
      image: '/lovable-uploads/33c7a2aa-9ead-4129-9a26-de3ac6808422.png',
      likes: 201
    },
    // Nouvelles photos AKAN
    {
      id: 9,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Couple royal akan avec tissus Kente jaune et violet, bijoux dorés massifs et couronne traditionnelle. Majesté et élégance akan.',
      image: '/lovable-uploads/6010adca-bf43-45b3-b47f-d303bc162de4.png',
      likes: 198
    },
    {
      id: 10,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Reine akan avec bâton de commandement doré, tenue violette et or, couronne royale. Symbole de pouvoir et tradition akan.',
      image: '/lovable-uploads/6cf4012a-9e4b-4b10-ba18-d407c0c098b7.png',
      likes: 175
    },
    {
      id: 11,
      category: 'akan',
      title: 'TENUE TRADITIONNELLE AKAN',
      description: 'Couple akan en Kente blanc et or avec motifs géométriques traditionnels, bijoux dorés et couronne royale. Pureté et noblesse akan.',
      image: '/lovable-uploads/a91a71ea-864e-436b-acdf-2e81240c0a0a.png',
      likes: 220
    },
    // Photos SÉNOUFO
    {
      id: 12,
      category: 'senoufo',
      title: 'TENUE TRADITIONNELLE SÉNOUFO',
      description: 'Couple sénoufo en tenue traditionnelle avec tissus rayés bleus et blancs, colliers de cauris authentiques. Élégance sénoufo classique.',
      image: '/lovable-uploads/5698df4d-b758-4d09-9e7f-29e56e8bd5b5.png',
      likes: 156
    },
    {
      id: 13,
      category: 'senoufo',
      title: 'TENUE TRADITIONNELLE SÉNOUFO',
      description: 'Ensemble sénoufo avec tissus rayés traditionnels, colliers de cauris et perles d\'ambre. Authenticité et tradition sénoufo.',
      image: '/lovable-uploads/01faea58-3eb6-49d2-b08d-b5762198c084.png',
      likes: 143
    },
    // Photos BÉTÉ
    {
      id: 14,
      category: 'bete',
      title: 'TENUE TRADITIONNELLE BÉTÉ',
      description: 'Couple bété avec tissus rouges et jaunes traditionnels, bâton de commandement et parures ethniques. Fierté et tradition bété.',
      image: '/lovable-uploads/e342fae8-2fbc-487f-bb1a-2fcfbf6b8dcf.png',
      likes: 187
    },
    // Photos DIDA
    {
      id: 15,
      category: 'dida',
      title: 'TENUE TRADITIONNELLE DIDA',
      description: 'Couple dida en tenue de rafia naturel avec colliers de cauris et accessoires traditionnels. Authenticité et respect des traditions dida.',
      image: '/lovable-uploads/6e6166ca-d679-40b5-a548-01bdecb3b2b7.png',
      likes: 134
    },
    {
      id: 16,
      category: 'dida',
      title: 'TENUE TRADITIONNELLE DIDA',
      description: 'Ensemble dida avec tissus rafia naturel, colliers traditionnels et bâton cérémoniel. Élégance naturelle de la tradition dida.',
      image: '/lovable-uploads/d4a18f42-ddd0-47aa-8226-6ccaae746aa1.png',
      likes: 167
    },
    {
      id: 17,
      category: 'dida',
      title: 'TENUE TRADITIONNELLE DIDA',
      description: 'Reine dida avec couronne en cauris, jupe en rafia doré et colliers traditionnels. Majesté et tradition dida authentique.',
      image: '/lovable-uploads/8c31ac8e-3cf1-443d-a3d2-dd0b17621d38.png',
      likes: 189
    },
    // Créations personnalisées
    {
      id: 18,
      category: 'custom',
      title: 'CRÉATION PERSONNALISÉE ROYALE',
      description: 'Couple royal avec tissus multicolores, bijoux dorés et accessoires ethniques. Fusion créative de plusieurs traditions africaines.',
      image: '/lovable-uploads/5a70fe3d-7755-404d-ab18-58bbdf3c8bc5.png',
      likes: 201
    },
    {
      id: 19,
      category: 'modern',
      title: 'Collection Moderne "Héritage"',
      description: 'Fusion contemporaine et tradition africaine',
      image: '/api/placeholder/400/600',
      likes: 32
    },
    {
      id: 20,
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

  // Limiter l'affichage à 8 éléments par défaut
  const displayedPhotos = showAllPhotos ? filteredItems : filteredItems.slice(0, 8);
  const displayedVideos = showAllVideos ? videos : videos.slice(0, 8);
  const displayedAudios = showAllAudios ? audios : audios.slice(0, 8);

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
            Location & Vente de Tenues Traditionnelles 
            <span className="text-luxury-gold animate-gold-shimmer block">Africaines Authentiques</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre collection exclusive de <strong>tenues traditionnelles ivoiriennes</strong> en location et vente : 
            <strong>pagne Didá, tapa Bété, kente Akan</strong> et créations africaines authentiques pour <strong>mariages africains</strong>, 
            <strong>cérémonies DOT</strong> et événements culturels à <strong>Abidjan</strong>, Côte d'Ivoire et international.
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
              {displayedPhotos.map((item, index) => (
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
                        alt={`Location tenue traditionnelle ${item.category.toUpperCase()} ivoirienne - ${item.title} - SEKA Vanessa créatrice mode africaine Abidjan`}
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

            {/* Bouton Voir plus pour photos */}
            {!showAllPhotos && filteredItems.length > 8 && (
              <div className="text-center mb-16">
                <button
                  onClick={() => setShowAllPhotos(true)}
                  className="px-8 py-3 bg-luxury-gold text-deep-black font-semibold rounded-full hover:bg-luxury-gold/90 transition-colors shadow-glow"
                >
                  Voir toutes les photos ({filteredItems.length - 8} de plus)
                </button>
              </div>
            )}
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
              {displayedVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="group overflow-hidden rounded-2xl shadow-elegant hover-lift bg-card animate-fade-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Video Thumbnail/Preview */}
                  <div className="relative aspect-[9/16] bg-gradient-to-br from-luxury-gold/20 to-deep-black/20 overflow-hidden">
                    {video.thumbnail.startsWith('/api/placeholder') ? (
                      <div className="w-full h-full bg-gradient-to-br from-luxury-gold/20 to-deep-black/20 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <div className="font-playfair text-lg font-semibold mb-2">{video.category}</div>
                          <div className="text-sm">Vidéo Facebook</div>
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    
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
                        <span>Voir sur {video.type === 'youtube' ? 'YouTube' : 'Facebook'}</span>
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

            {/* Bouton Voir plus pour vidéos */}
            {!showAllVideos && videos.length > 8 && (
              <div className="text-center mb-16">
                <button
                  onClick={() => setShowAllVideos(true)}
                  className="px-8 py-3 bg-luxury-gold text-deep-black font-semibold rounded-full hover:bg-luxury-gold/90 transition-colors shadow-glow"
                >
                  Voir toutes les vidéos ({videos.length - 8} de plus)
                </button>
              </div>
            )}
          </>
        )}

        {/* Audios Section */}
        {activeTab === 'audios' && (
          <>
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground">
                Écoutez les présentations audio de nos créations traditionnelles
              </p>
            </div>

            {/* Audio Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {displayedAudios.map((audio, index) => (
                <div
                  key={audio.id}
                  className="group overflow-hidden rounded-2xl shadow-elegant hover-lift bg-card animate-fade-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Audio Visual */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-luxury-gold/20 to-deep-black/20 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-luxury-gold/30 via-luxury-gold/10 to-deep-black/20 flex flex-col items-center justify-center">
                      <div className="text-center text-foreground">
                        <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mb-4 mx-auto shadow-glow">
                          <Play className="w-8 h-8 text-deep-black ml-1" />
                        </div>
                        <div className="font-playfair text-lg font-semibold mb-2">{audio.category}</div>
                        <div className="text-sm text-muted-foreground">Présentation Audio</div>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-deep-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <a
                        href={audio.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-luxury-gold/90 backdrop-blur-sm px-6 py-3 rounded-full text-deep-black font-semibold hover:bg-luxury-gold transition-colors shadow-glow"
                      >
                        <ExternalLink size={18} />
                        <span>Écouter sur SoundCloud</span>
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-luxury-gold bg-luxury-gold/10 px-3 py-1 rounded-full">
                        {audio.category}
                      </span>
                      <Play className="w-5 h-5 text-luxury-gold" />
                    </div>
                    
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {audio.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {audio.description}
                    </p>
                    
                    <a
                      href={audio.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-luxury-gold hover:text-primary-hover font-medium text-sm transition-colors"
                    >
                      <span>Écouter maintenant</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton Voir plus pour audios */}
            {!showAllAudios && audios.length > 8 && (
              <div className="text-center mb-16">
                <button
                  onClick={() => setShowAllAudios(true)}
                  className="px-8 py-3 bg-luxury-gold text-deep-black font-semibold rounded-full hover:bg-luxury-gold/90 transition-colors shadow-glow"
                >
                  Voir tous les audios ({audios.length - 8} de plus)
                </button>
              </div>
            )}
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