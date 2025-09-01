import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-luxury-gold hover:text-luxury-gold/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
            <h1 className="font-playfair text-4xl font-bold text-deep-black mb-4">
              Mentions Légales
            </h1>
            <div className="w-20 h-1 bg-gradient-elegant rounded-full"></div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-elegant p-8 space-y-8">
              
              {/* Éditeur du site */}
              <section>
                <h2 className="font-playfair text-2xl font-bold text-deep-black mb-4">
                  Éditeur du site
                </h2>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Nom :</strong> SEKA C. Vanessa</p>
                  <p><strong>Activité :</strong> Location & Vente de Tenues Traditionnelles Ivoiriennes et Africaines</p>
                  <p><strong>Adresse :</strong> Yopougon Sicogi – Pont Vagabond, Abidjan, Côte d'Ivoire</p>
                  <p><strong>Téléphone :</strong> +225 0778183092</p>
                  <p><strong>Email :</strong> vanessaestherseka@gmail.com</p>
                </div>
              </section>

              {/* Responsable de la publication */}
              <section>
                <h2 className="font-playfair text-2xl font-bold text-deep-black mb-4">
                  Responsable de la publication
                </h2>
                <p className="text-gray-700">
                  SEKA C. Vanessa est responsable de la publication et du contenu éditorial de ce site.
                </p>
              </section>

              {/* Hébergement */}
              <section>
                <h2 className="font-playfair text-2xl font-bold text-deep-black mb-4">
                  Hébergement
                </h2>
                <p className="text-gray-700">
                  Ce site est hébergé par <strong>lovable.dev</strong>, plateforme de développement et d'hébergement web.
                </p>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <h2 className="font-playfair text-2xl font-bold text-deep-black mb-4">
                  Propriété intellectuelle
                </h2>
                <p className="text-gray-700">
                  Tous les textes, images, logos, créations graphiques et autres éléments présents sur ce site sont la propriété exclusive de SEKA C. Vanessa, sauf mention contraire explicite. 
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                </p>
              </section>

              {/* Protection des données personnelles */}
              <section>
                <h2 className="font-playfair text-2xl font-bold text-deep-black mb-4">
                  Protection des données personnelles
                </h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    Les données personnelles collectées via les formulaires de contact, d'inscription à la newsletter ou tout autre moyen sur ce site sont utilisées uniquement dans le cadre de l'activité professionnelle de SEKA C. Vanessa.
                  </p>
                  <p>
                    Ces données ne sont en aucun cas revendues, transmises ou cédées à des tiers sans votre consentement explicite.
                  </p>
                  <p>
                    Conformément à la législation en vigueur, vous disposez d'un droit d'accès, de modification, de rectification et de suppression de vos données personnelles. 
                    Pour exercer ces droits, vous pouvez nous contacter à l'adresse email : <strong>vanessaestherseka@gmail.com</strong>
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="font-playfair text-2xl font-bold text-deep-black mb-4">
                  Cookies
                </h2>
                <p className="text-gray-700">
                  Ce site peut utiliser des cookies techniques nécessaires au bon fonctionnement du site et à l'amélioration de l'expérience utilisateur. 
                  Vous avez la possibilité de refuser ces cookies en modifiant les paramètres de votre navigateur web, cependant cela pourrait affecter certaines fonctionnalités du site.
                </p>
              </section>

              {/* Responsabilité */}
              <section>
                <h2 className="font-playfair text-2xl font-bold text-deep-black mb-4">
                  Responsabilité
                </h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    SEKA C. Vanessa s'efforce de fournir des informations exactes et à jour sur ce site. Cependant, elle ne peut être tenue responsable des erreurs, omissions ou des résultats qui pourraient être obtenus par l'usage de ces informations.
                  </p>
                  <p>
                    L'utilisation des informations et contenus disponibles sur l'ensemble du site se fait sous la responsabilité exclusive de l'utilisateur.
                  </p>
                  <p>
                    SEKA C. Vanessa ne peut être tenue responsable en cas d'indisponibilité temporaire du site pour des raisons de maintenance ou de causes indépendantes de sa volonté.
                  </p>
                </div>
              </section>

              {/* Date de mise à jour */}
              <section className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;