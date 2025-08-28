import { Play, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: 'Tenues Ivoiriennes dans sa Diversité',
      description: 'Découvrez la richesse et la variété des créations traditionnelles ivoiriennes',
      url: 'https://youtube.com/shorts/3M_sZ-eZSv0?si=30uyaGC7QyMWpHiz',
      embedId: '3M_sZ-eZSv0',
      category: 'Traditions Ivoiriennes'
    },
    {
      id: 2,
      title: 'Tenue AKAN Jaune Royal',
      description: 'Une création somptueuse inspirée de la culture AKAN en jaune royal',
      url: 'https://youtube.com/shorts/vIvzhteFV9w?si=Pi5wO5L9r6eWyz0i',
      embedId: 'vIvzhteFV9w',
      category: 'Collections Royales'
    },
    {
      id: 3,
      title: 'Robe de Mariée Traditionnelle',
      description: 'Une création unique pour un mariage traditionnel inoubliable',
      url: 'https://youtube.com/shorts/TEaUuVHX_DY?si=8KYC3vBtg0Rp7et4',
      embedId: 'TEaUuVHX_DY',
      category: 'Mariages'
    }
  ];

  return (
    <section id="videos" className="py-24 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Mes Créations en <span className="text-luxury-gold animate-gold-shimmer">Vidéo</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plongez dans l'univers de mes créations à travers ces vidéos exclusives. 
            Chaque pièce raconte une histoire, chaque détail a sa signification.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <Card 
              key={video.id}
              className="group overflow-hidden border-0 shadow-elegant hover-lift bg-card animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Video Thumbnail/Embed */}
              <div className="relative aspect-[9/16] bg-gradient-to-br from-luxury-gold/20 to-deep-black/20 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}?controls=1&modestbranding=1&rel=0`}
                  title={video.title}
                  className="w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                
                {/* Overlay on hover */}
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
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-elegant rounded-2xl p-12 shadow-luxury">
          <h3 className="font-playfair text-3xl font-bold text-white mb-4">
            Inspiré par ces créations ?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Chaque vidéo représente des heures de travail artisanal et de passion. 
            Laissez-moi créer quelque chose d'unique pour vous aussi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-luxury-gold text-deep-black px-8 py-4 rounded-full font-semibold hover:bg-white hover:shadow-glow transition-all duration-300"
            >
              Voir plus de créations
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-luxury-gold text-luxury-gold px-8 py-4 rounded-full font-semibold hover:bg-luxury-gold hover:text-deep-black transition-all duration-300"
            >
              Commander la vôtre
            </button>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Suivez-moi pour plus de contenus exclusifs
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://youtube.com/@sekavanessa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              <Play className="w-5 h-5" />
              <span>YouTube</span>
            </a>
            <a 
              href="https://instagram.com/seka.vanessa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              <span>📸</span>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;