import { Heart, Instagram, Facebook, MessageCircle, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Déjà inscrit",
            description: "Cette adresse email est déjà inscrite à notre newsletter.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        setEmail('');
        toast({
          title: "Inscription réussie !",
          description: "Merci ! Vous recevrez nos dernières actualités.",
        });
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-gradient-elegant text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/706179a4-8a32-4fcb-8ea8-f79e2066a54c.png?v=2"
                alt="Tenue Traditionnelle - SEKA C. VANESSA"
                className="h-20 w-auto object-contain max-w-[250px]"
                onError={(e) => {
                  console.log('Footer logo failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Passionnée par l'art vestimentaire africain, je crée des pièces uniques 
              qui célèbrent notre riche héritage culturel avec une touche de modernité.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/0778183092" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://www.facebook.com/vanessa.seka.963" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100043243184949" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-6 text-luxury-gold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Accueil', 'À propos', 'Galerie', 'Processus', 'Témoignages', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace('à propos', 'about').replace('témoignages', 'testimonials')}`}
                    className="text-white/70 hover:text-luxury-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-6 text-luxury-gold">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-luxury-gold" />
                <span className="text-white/70">07 78 18 30 92</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-luxury-gold" />
                <span className="text-white/70">vanessaestherseka@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-luxury-gold rounded-full mt-1" />
                <span className="text-white/70">Yopougon Sicogi - Pont Vagabond, Abidjan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center max-w-md mx-auto">
            <h4 className="font-playfair font-bold text-xl mb-3 text-luxury-gold">
              Restez informée
            </h4>
            <p className="text-white/70 mb-4 text-sm">
              Recevez les dernières créations et actualités de l'atelier
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-luxury-gold"
              />
              <button 
                type="submit"
                disabled={isSubscribing}
                className="px-6 py-2 bg-luxury-gold text-deep-black rounded-lg font-medium hover:bg-white transition-colors disabled:opacity-50"
              >
                {isSubscribing ? 'En cours...' : 'S\'abonner'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} SEKA C. VANESSA - TENUE TRADITIONNELLE. Tous droits réservés.
          </p>
          
          <div className="flex items-center space-x-2 text-white/60 text-sm">
            <span>Créé avec</span>
            <Heart className="w-4 h-4 text-luxury-gold fill-current" />
            <span>en Côte d'Ivoire</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-luxury-gold/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-luxury-gold/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;