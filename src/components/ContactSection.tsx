import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        }]);

      if (error) throw error;

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Show success message
      toast({
        title: "Message envoyé !",
        description: "Merci, notre administrateur vous reviendra assez tôt.",
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '07 78 18 30 92',
      action: () => window.open('tel:0778183092'),
      color: 'from-luxury-gold to-primary-hover'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'vanessaestherseka@gmail.com',
      action: () => window.open('mailto:vanessaestherseka@gmail.com'),
      color: 'from-deep-black to-foreground'
    },
    {
      icon: MapPin,
      title: 'Atelier',
      content: 'Yopougon Sicogi - Pont Vagabond, Abidjan',
      action: () => window.open('https://maps.google.com?q=Yopougon+Sicogi+Pont+Vagabond+Abidjan'),
      color: 'from-luxury-gold to-primary-hover'
    }
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      handle: '07 78 18 30 92',
      url: 'https://wa.me/0778183092',
      color: 'bg-green-500'
    },
    {
      icon: Instagram,
      name: 'Instagram Boutique',
      handle: '@tenue_traditionnelle',
      url: 'https://www.instagram.com/tenue_traditionnelle',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook Personnel',
      handle: 'SEKA Vanessa',
      url: 'https://www.facebook.com/vanessa.seka.963',
      color: 'bg-blue-600'
    },
    {
      icon: Facebook,
      name: 'Facebook Boutique',
      handle: 'TENUE TRADITIONNELLE',
      url: 'https://www.facebook.com/profile.php?id=100043243184949',
      color: 'bg-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Restons en <span className="text-luxury-gold animate-gold-shimmer">Contact</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à donner vie à vos rêves vestimentaires ? 
            Contactez-moi pour discuter de votre projet unique.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="p-8 shadow-luxury border-0">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                Envoyez-moi un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nom complet *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="border-border focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="border-border focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+225 XX XX XX XX XX"
                      className="border-border focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Sujet
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Création sur mesure, Devis..."
                      className="border-border focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos inspirations, le nombre de tenues, vos attentes..."
                    rows={6}
                    required
                    className="border-border focus:border-luxury-gold focus:ring-luxury-gold resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full btn-gold text-lg py-4"
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="p-6 shadow-elegant border-0 hover-lift cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={info.action}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center shadow-luxury`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="p-8 shadow-luxury border-0">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-6">
                Suivez-moi sur les réseaux
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick WhatsApp */}
            <Card className="p-6 bg-gradient-to-r from-green-500 to-green-600 border-0 text-white shadow-luxury">
              <div className="text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-playfair text-xl font-bold mb-2">
                  Consultation rapide
                </h4>
                <p className="mb-4 opacity-90">
                  Besoin d'un conseil ? Contactez-moi directement sur WhatsApp
                </p>
                <Button 
                  onClick={() => window.open('https://wa.me/0778183092')}
                  variant="secondary"
                  className="bg-white text-green-600 hover:bg-green-50"
                >
                  Ouvrir WhatsApp
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;