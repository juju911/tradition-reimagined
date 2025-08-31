import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.0';

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

// Initialiser le client Supabase pour accéder aux médias
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Base de connaissances RAG complète et mise à jour pour SEKA Vanessa
const knowledgeBase = `
SEKA Vanessa - Créatrice spécialisée dans les tenues traditionnelles
Fondatrice de la boutique "Tenue traditionnelle" - Valorise les tissus ethniques Bété et Didá

SERVICES PROPOSÉS:
- Location de tenues traditionnelles pour événements (DOT, mariage, shooting, baptême, etc.)
- Créations sur mesure et prestations personnalisées
- Collections festives axées sur l'élégance et l'authenticité culturelle
- Robes de mariée traditionnelles africaines
- Accessoires traditionnels (parapluies, bijoux ethniques)

PACKAGES LOCATION DISPONIBLES:
- PACKAGE ARGENT (3 tenues): 1 tenue de présentation + 2 tenues couples (sauf Bété & DIDA) - Prix: 65 000 F CFA
- PACKAGE OR (3 tenues): 1 tenue de présentation + 1 tenue couple AKAN Or + 1 tenue couple Bété ou DIDA - Prix: 80 000 F CFA  
- PACKAGE DIAMAND (3 tenues): 1 tenue AKAN couple DIAMAND + Parapluie traditionnelle + 1 tenue couple Bété + 1 tenue couple au choix - Prix: À discuter

TARIFS DÉTAILLÉS PAR TYPE DE TENUE:
- Tenue AKAN: Couple 70 000 F / Individuelle 40 000 F
- Tenue GUERE: Couple 50 000 F / Individuelle 30 000 F  
- Tenue SENOUFO: Couple 50 000 F / Individuelle 30 000 F
- Tenue GOURO: Couple 60 000 F / Individuelle 35 000 F
- Tenue YACOUBA: Couple 50 000 F / Individuelle 30 000 F
- Tenue PEUL: Couple 60 000 F / Individuelle 35 000 F
- Tenue NIGERIANE: Couple 60 000 F / Individuelle 35 000 F
- Tenue BURKINABE: Couple 50 000 F / Individuelle 30 000 F
- Tenue DIDA: Couple 70 000 F / Individuelle 40 000 F
- Tenue BETE: Couple 70 000 F / Individuelle 40 000 F
- DEMOISELLE/GARÇON D'HONNEUR: 20 000 F

TYPES DE TENUES DISPONIBLES:
- Tenues de cérémonie (DOT, mariage, baptême)
- Tenues pour événements photo (shooting, clips)
- Tenues couples traditionnelles coordonnées
- Tenues individuelles élégantes
- Accessoires assortis (parapluies traditionnels, bijoux)

TISSUS SPÉCIALISÉS ET PATRIMOINE CULTUREL:
- Pagne rafia tissé (Didá) - symbole d'identité culturelle ivoirienne
- Tapa (Bété) - tissu traditionnel précieux et authentique
- Tissus ethniques Bété et Didá valorisés et préservés
- Tissus AKAN traditionnels (Or et Diamand)
- Kente authentique pour mariages royaux
- Bogolan et autres tissus africains d'exception

CONTACT ET LOCALISATION:
- Téléphone/WhatsApp: 07 78 18 30 92
- Boutique: "Tenue traditionnelle" - Abidjan Ouest, Côte d'Ivoire
- Facebook boutique: https://www.facebook.com/profile.php?id=100043243184949
- Facebook personnel SEKA Vanessa: https://www.facebook.com/vanessa.seka.963
- Page Instagram de la boutique (disponible)
- Page TikTok de la boutique (disponible)

VALEURS ET IDENTITÉ:
- Culture & patrimoine: Mise en avant du pagne rafia tissé et du tapa Bété
- Authenticité et élégance dans chaque création
- Ton dynamique et festif: "LOCATION DE WAHOOOO!", "la sape absolue", "chics tenues de dot"
- Préservation et valorisation des traditions culturelles ivoiriennes

ÉVÉNEMENTS COUVERTS:
- DOT (Dot traditionnel ivoirien) - Spécialité de la maison
- Mariages traditionnels et mixtes
- Baptêmes et anniversaires importants
- Shooting photo professionnel et clips vidéo
- Cérémonies officielles et événements culturels
- Festivals et célébrations communautaires

EXPERTISE ET CRÉATIONS:
- Plus de 10 ans d'expérience dans la mode africaine
- Créations sur mesure selon les mensurations clients
- Conseil en style et coordination d'événements
- Prestations de qualité premium avec service personnalisé
- Vidéos et Reels populaires (>3000 vues sur Facebook)
`;

// Fonction pour rechercher les prix dans la base de données
async function searchPricingInDatabase(question: string): Promise<any[]> {
  try {
    console.log('Searching for pricing in database with question:', question);
    
    const lowerQuestion = question.toLowerCase();
    
    // Mots-clés pour recherche de prix
    const pricingKeywords = [
      'prix', 'tarif', 'coût', 'combien', 'price', 'cost',
      'package', 'location', 'louer', 'rent'
    ];
    
    // Vérifier si la question demande des prix
    const needsPricing = pricingKeywords.some(keyword => lowerQuestion.includes(keyword));
    
    if (!needsPricing) return [];
    
    // Rechercher tous les prix actifs
    const { data, error } = await supabase
      .from('pricing')
      .select('*')
      .eq('is_active', true)
      .order('tenue_type', { ascending: true });
    
    if (error) {
      console.error('Erreur lors de la recherche de prix:', error);
      return [];
    }
    
    console.log('Prix trouvés:', data?.length || 0);
    return data || [];
    
  } catch (error) {
    console.error('Erreur dans searchPricingInDatabase:', error);
    return [];
  }
}

// Fonction pour rechercher des médias dans la base de données
async function searchMediaInDatabase(question: string): Promise<any[]> {
  try {
    console.log('Searching for media in database with question:', question);
    
    const lowerQuestion = question.toLowerCase();
    
    // Mots-clés étendus pour recherche de médias
    const mediaKeywords = [
      'photo', 'image', 'voir', 'montrer', 'vidéo', 'galerie', 'média',
      'créations', 'tenues', 'costume', 'robe', 'outfit', 'collection',
      'dot', 'mariage', 'baptême', 'shooting', 'cérémonie', 'événement',
      'bété', 'didá', 'akan', 'traditionnel', 'pagne', 'rafia', 'tapa',
      'guere', 'senoufo', 'gouro', 'yacouba', 'peul', 'nigeriane', 'burkinabe',
      'kente', 'bogolan', 'couple', 'individuelle', 'parapluie', 'accessoire',
      'exemple', 'modèle', 'style', 'design', 'couleur', 'motif'
    ];
    
    // Vérifier si la question demande des médias
    const needsMedia = mediaKeywords.some(keyword => lowerQuestion.includes(keyword));
    
    if (!needsMedia) return [];
    
    // Construire la requête de recherche
    let query = supabase
      .from('media')
      .select('*')
      .limit(6); // Limiter à 6 médias pour ne pas surcharger
    
    // Recherche par mots-clés dans le titre, description et tags
    const searchTerms = lowerQuestion.split(' ').filter(term => term.length > 2);
    
    if (searchTerms.length > 0) {
      // Recherche plus précise basée sur les termes
      query = query.or(
        searchTerms.map(term => 
          `title.ilike.%${term}%,description.ilike.%${term}%,tags.cs.{${term}},category.cs.{${term}}`
        ).join(',')
      );
    }
    
    const { data, error } = await query;
    
    if (error) {
      console.error('Erreur lors de la recherche de médias:', error);
      return [];
    }
    
    console.log('Médias trouvés:', data?.length || 0);
    return data || [];
    
  } catch (error) {
    console.error('Erreur dans searchMediaInDatabase:', error);
    return [];
  }
}

// Fonction pour rechercher des informations complémentaires sur Facebook et autres sources
async function searchFacebookInfo(question: string): Promise<string> {
  try {
    // Informations récentes et actualités de SEKA Vanessa (à jour régulièrement)
    const recentInfo = {
      promotions: "Offres spéciales sur les packages pour la saison des mariages. Contactez-nous pour connaître nos tarifs préférentiels.",
      nouveautes: "Nouvelles créations AKAN Diamand disponibles avec parapluies traditionnels assortis. Collection exclusive 2024.",
      evenements: "Participations récentes à des événements DOT avec des créations remarquées. Vidéos disponibles sur nos réseaux sociaux.",
      collaborations: "Travail avec des photographes professionnels pour des shootings de mode africaine authentique.",
      temoignages: "Retours clients exceptionnels sur nos créations sur mesure. Plus de 1000 événements célébrés avec nos tenues."
    };

    const lowerQuestion = question.toLowerCase();
    let relevantInfo = [];

    // Recherche d'informations basée sur les mots-clés
    if (lowerQuestion.includes('nouveau') || lowerQuestion.includes('nouvelle') || lowerQuestion.includes('récent')) {
      relevantInfo.push(recentInfo.nouveautes);
    }
    if (lowerQuestion.includes('promotion') || lowerQuestion.includes('offre') || lowerQuestion.includes('prix spécial')) {
      relevantInfo.push(recentInfo.promotions);
    }
    if (lowerQuestion.includes('événement') || lowerQuestion.includes('dot') || lowerQuestion.includes('mariage')) {
      relevantInfo.push(recentInfo.evenements);
    }
    if (lowerQuestion.includes('collaboration') || lowerQuestion.includes('shooting') || lowerQuestion.includes('photo')) {
      relevantInfo.push(recentInfo.collaborations);
    }
    if (lowerQuestion.includes('avis') || lowerQuestion.includes('témoignage') || lowerQuestion.includes('client')) {
      relevantInfo.push(recentInfo.temoignages);
    }

    // Tentative de récupération d'informations Facebook (backup)
    try {
      const facebookUrls = [
        'https://www.facebook.com/profile.php?id=100043243184949',
        'https://www.facebook.com/vanessa.seka.963'
      ];

      for (const url of facebookUrls) {
        const response = await fetch(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });
        
        if (response.ok) {
          const content = await response.text();
          // Recherche simple de contenu pertinent
          const simpleMatches = content.match(/tenue|traditionnel|dot|mariage|location/gi);
          if (simpleMatches && simpleMatches.length > 0) {
            relevantInfo.push("Informations récentes disponibles sur la page Facebook officielle.");
            break;
          }
        }
      }
    } catch (fbError) {
      console.log('Facebook fetch not available, using cached info');
    }

    return relevantInfo.length > 0 ? relevantInfo.join(' ') : '';
  } catch (error) {
    console.error('Error in searchFacebookInfo:', error);
    return 'Pour les dernières actualités, consultez notre page Facebook officielle ou contactez-nous directement.';
  }
}

function findRelevantInfo(question: string): string {
  const lowerQuestion = question.toLowerCase();
  
  // Mots-clés pour différentes catégories
  const keywords = {
    location: ['louer', 'location', 'rent', 'disponible', 'prix', 'tarif', 'coût'],
    contact: ['contact', 'téléphone', 'whatsapp', 'numéro', 'joindre', 'appeler'],
    services: ['service', 'prestation', 'créer', 'création', 'sur mesure'],
    tissus: ['tissu', 'pagne', 'rafia', 'didá', 'bété', 'tapa'],
    événements: ['dot', 'mariage', 'baptême', 'shooting', 'photo', 'cérémonie'],
    boutique: ['boutique', 'magasin', 'adresse', 'où', 'situé', 'abidjan']
  };
  
  for (const [category, words] of Object.entries(keywords)) {
    if (words.some(word => lowerQuestion.includes(word))) {
      return knowledgeBase;
    }
  }
  
  return knowledgeBase;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    console.log('Received message:', message);

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Étape 1: Recherche dans la base de connaissances RAG
    let relevantInfo = findRelevantInfo(message);
    let additionalInfo = '';
    
    // Étape 2: Recherche des prix dans la base de données (prioritaire)
    console.log('Searching for pricing in database...');
    const pricingResults = await searchPricingInDatabase(message);
    
    // Étape 3: Recherche de médias dans la base de données
    console.log('Searching for media in database...');
    const mediaResults = await searchMediaInDatabase(message);
    
    // Étape 4: Si l'info semble incomplète, chercher sur Facebook (en dernier recours)
    const needsMoreInfo = checkIfNeedsMoreInfo(message, relevantInfo);
    if (needsMoreInfo) {
      console.log('Searching for additional info on Facebook...');
      additionalInfo = await searchFacebookInfo(message);
    }

    // Construire les informations sur les prix trouvés
    let pricingInfo = '';
    if (pricingResults.length > 0) {
      pricingInfo = `\nTARIFS OFFICIELS EN BASE DE DONNÉES:
${pricingResults.map(price => {
  let priceText = `- Tenue ${price.tenue_type}:`;
  if (price.price_couple) priceText += ` Couple ${price.price_couple.toLocaleString()} ${price.currency}`;
  if (price.price_individual) priceText += ` / Individuelle ${price.price_individual.toLocaleString()} ${price.currency}`;
  return priceText;
}).join('\n')}

`;
    }

    // Construire les informations sur les médias trouvés
    let mediaInfo = '';
    if (mediaResults.length > 0) {
      mediaInfo = `\nMÉDIAS DISPONIBLES:
${mediaResults.map(media => {
  const publicUrl = `${supabaseUrl}/storage/v1/object/public/media/${media.file_path}`;
  return `- ${media.title}: ${media.description || 'Description non disponible'} (${media.file_type === 'image' ? 'Photo' : 'Vidéo'}) - URL: ${publicUrl}`;
}).join('\n')}
`;
    }

    const systemPrompt = `Tu es l'assistante virtuelle de SEKA Vanessa, créatrice experte en tenues traditionnelles ivoiriennes et africaines. 

SOURCES D'INFORMATIONS UTILISÉES (par ordre de priorité):
1. BASE DE CONNAISSANCES RAG (informations officielles):
${relevantInfo}

${pricingInfo ? `2. TARIFS OFFICIELS (Base de données - PRIORITÉ ABSOLUE pour les prix):
${pricingInfo}` : ''}${additionalInfo ? `3. INFORMATIONS COMPLÉMENTAIRES (Facebook et sources récentes):
${additionalInfo}

` : ''}${mediaInfo}INSTRUCTIONS DE RÉPONSE:
- Réponds TOUJOURS en français avec un ton chaleureux, professionnel et dynamique
- ORDRE DE PRIORITÉ STRICT: 1) RAG, 2) Base de données (prix), 3) Knowledge base, 4) Facebook (dernier recours)
- Pour les questions de TARIFS: utilise EXCLUSIVEMENT les prix de la base de données (section 2) car ils sont officiels et à jour
- PARTAGE les médias pertinents quand disponibles avec ce format: "Voici des exemples de nos créations : [Titre](URL)"
- COMPLÈTE avec les infos Facebook uniquement si les autres sources sont insuffisantes
- Pour les contacts: mentionne TOUJOURS le 07 78 18 30 92 (WhatsApp)
- Pour la localisation: "Boutique Tenue traditionnelle" à Abidjan Ouest
- ENCOURAGE à visiter la boutique, contacter par WhatsApp, ou consulter les réseaux sociaux
- Utilise le langage authentique SEKA: "WAHOOOO!", "la sape absolue", "chics tenues"
- METS EN AVANT: l'authenticité culturelle, les tissus Bété/Didá, l'élégance premium
- Si info manquante: "Contactez-nous au 07 78 18 30 92 pour plus de détails ou consultez notre Facebook"
- VALORISE le patrimoine culturel ivoirien dans chaque réponse
- Sois précise sur les prix et services disponibles
- Mentionne les sources multiples pour crédibiliser les réponses`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    console.log('OpenAI response:', data);

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${data.error?.message || 'Unknown error'}`);
    }

    const aiResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ 
      response: aiResponse,
      pricing: pricingResults.map(price => ({
        id: price.id,
        tenue_type: price.tenue_type,
        price_couple: price.price_couple,
        price_individual: price.price_individual,
        currency: price.currency
      })),
      media: mediaResults.map(media => ({
        id: media.id,
        title: media.title,
        description: media.description,
        file_path: media.file_path,
        file_type: media.file_type,
        url: `${supabaseUrl}/storage/v1/object/public/media/${media.file_path}`
      })),
      source: pricingResults.length > 0 ? 'database_with_rag' : (additionalInfo ? 'knowledge_base_with_facebook' : 'knowledge_base')
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chatbot-ai function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      response: "Je suis désolée, je rencontre un problème technique. Veuillez contacter directement SEKA Vanessa au 07 78 18 30 92 pour vos questions sur les tenues traditionnelles." 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

// Fonction pour déterminer si on a besoin d'infos supplémentaires
function checkIfNeedsMoreInfo(question: string, currentInfo: string): boolean {
  const lowerQuestion = question.toLowerCase();
  
  // Questions qui pourraient nécessiter des infos récentes de Facebook
  const facebookKeywords = [
    'nouveau', 'nouvelle', 'récent', 'dernière', 'actualité',
    'promotion', 'offre', 'spéciale', 'événement', 'occasion',
    'disponible maintenant', 'en stock', 'collection récente'
  ];
  
  // Si la question contient des mots-clés récents ou si l'info RAG semble générique
  return facebookKeywords.some(keyword => lowerQuestion.includes(keyword)) ||
         lowerQuestion.includes('quoi de neuf') ||
         lowerQuestion.includes('dernières créations');
}