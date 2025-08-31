import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Les Tenues Traditionnelles Ivoiriennes : Guide Complet pour Mariages Africains",
      excerpt: "Découvrez l'art du pagne Didá, tapa Bété et kente Akan pour sublimer votre mariage traditionnel. Conseils de SEKA Vanessa, créatrice mode africaine à Abidjan.",
      author: "SEKA C. Vanessa",
      date: "15 Janvier 2025",
      readTime: "8 min",
      category: "Guide Mariage",
      image: "/lovable-uploads/8bf2f39d-7ec8-48af-8ded-68bd390ddcd5.png",
      tags: ["mariage africain", "tenues traditionnelles", "pagne Didá", "tapa Bété", "conseils mode"]
    },
    {
      id: 2,
      title: "Signification des Tissus Traditionnels Ivoiriens : Pagne Didá et Tapa Bété",
      excerpt: "Plongez dans l'histoire culturelle des tissus authentiques ivoiriens. Comprenez les symboles et traditions ancestrales derrière chaque création artisanale.",
      author: "SEKA C. Vanessa", 
      date: "10 Janvier 2025",
      readTime: "6 min",
      category: "Culture Africaine",
      image: "/lovable-uploads/6e6166ca-d679-40b5-a548-01bdecb3b2b7.png",
      tags: ["culture ivoirienne", "tissus traditionnels", "patrimoine africain", "artisanat local"]
    },
    {
      id: 3,
      title: "Comment Choisir sa Tenue Traditionnelle pour une Cérémonie DOT ?",
      excerpt: "Guide pratique pour sélectionner la tenue parfaite selon votre événement. Conseils d'experts sur les codes vestimentaires et protocoles traditionnels.",
      author: "SEKA C. Vanessa",
      date: "5 Janvier 2025", 
      readTime: "10 min",
      category: "Conseils Mode",
      image: "/lovable-uploads/a91a71ea-864e-436b-acdf-2e81240c0a0a.png",
      tags: ["cérémonie DOT", "protocole traditionnel", "conseils style", "étiquette africaine"]
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Blog Mode Africaine &
            <span className="text-luxury-gold animate-gold-shimmer block">Conseils Tenues Traditionnelles</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos guides exclusifs sur la <strong>mode africaine</strong>, les <strong>tenues traditionnelles ivoiriennes</strong>, 
            et les conseils d'experts pour vos <strong>mariages africains</strong> et cérémonies culturelles.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="group hover-lift animate-fade-up overflow-hidden border-0 shadow-elegant hover:shadow-luxury transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img 
                  src={post.image} 
                  alt={`${post.title} - Guide mode africaine par SEKA Vanessa, créatrice tenues traditionnelles Abidjan`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-luxury-gold/10 text-luxury-gold px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <CardTitle className="font-playfair text-xl text-foreground group-hover:text-luxury-gold transition-colors duration-300">
                  {post.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-secondary text-muted-foreground px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full flex items-center justify-center space-x-2 bg-luxury-gold/10 text-luxury-gold hover:bg-luxury-gold hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-glow">
                  <span>Lire l'article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-elegant rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-white mb-4">
              Restez Informé sur la Mode Africaine
            </h3>
            <p className="text-white/80 mb-6">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles sur les tendances mode africaine et les conseils d'experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-luxury-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-deep-black transition-all duration-300"
              >
                S'abonner à la Newsletter
              </button>
              <button
                onClick={() => window.open('https://wa.me/225566997785', '_blank')}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-deep-black transition-all duration-300"
              >
                Suivre sur WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;