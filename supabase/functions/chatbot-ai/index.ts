import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

// Créer le client Supabase
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Base de connaissances RAG mise à jour pour SEKA Vanessa
const knowledgeBase = `
SEKA Vanessa - Créatrice de Tenues Traditionnelles

SERVICES PROPOSÉS:
- Location de tenues traditionnelles pour événements (DOT, mariage, shooting, baptême, etc.)
- Créations sur mesure et prestations personnalisées
- Collections festives axées sur l'élégance et l'authenticité culturelle

PACKAGES DISPONIBLES:
- PACKAGE ARGENT (3 tenues): 1 tenue de présentation + 2 tenues couples (sauf Bété & DIDA) - Prix: 65 000 F CFA
- PACKAGE OR (3 tenues): 1 tenue de présentation + 1 tenue couple AKAN Or + 1 tenue couple Bété ou DIDA - Prix: 80 000 F CFA  
- PACKAGE DIAMAND (3 tenues): 1 tenue AKAN couple DIAMAND + Parapluie traditionnelle + 1 tenue couple Bété + 1 tenue couple au choix

TYPES DE TENUES DISPONIBLES:
- Tenues de cérémonie (DOT, mariage, baptême)
- Tenues pour événements photo (shooting, clips)
- Robes de mariée traditionnelles africaines
- Tenues AKAN (Or et Diamand)
- Tenues couples traditionnelles
- Accessoires assortis (parapluies traditionnels)

TISSUS SPÉCIALISÉS:
- Pagne rafia tissé (Didá) - symbole d'identité culturelle
- Tapa (Bété) - tissu traditionnel précieux
- Tissus ethniques Bété et Didá valorisés
- Tissus AKAN traditionnels

CONTACT:
- Téléphone/WhatsApp: 07 78 18 30 92
- Boutique: "Tenue traditionnelle" - Abidjan Ouest
- Facebook boutique: https://www.facebook.com/profile.php?id=100043243184949
- Facebook personnel: https://www.facebook.com/vanessa.seka.963
- Page Instagram de la boutique
- Page TikTok de la boutique

VALEURS:
- Mise en avant du patrimoine culturel ivoirien
- Élégance et authenticité dans chaque création
- Ton dynamique et festif: "LOCATION DE WAHOOOO!", "la sape absolue"

ÉVÉNEMENTS COUVERTS:
- DOT (Dot traditionnel ivoirien)
- Mariages traditionnels
- Baptêmes et anniversaires
- Shooting photo et clips vidéo
- Cérémonies officielles
`;

// Fonction pour rechercher des médias dans la base de données
async function searchMediaInDatabase(question: string): Promise<any[]> {
  try {
    console.log('Searching for media in database with question:', question);
    
    const lowerQuestion = question.toLowerCase();
    
    // Mots-clés pour rechercher des médias spécifiques
    const mediaKeywords = {
      images: ['photo', 'image', 'voir', 'montrer', 'regarder', 'galerie'],
      videos: ['vidéo', 'video', 'clip', 'film', 'enregistrement'],
      categories: {
        'DOT': ['dot', 'cérémonie dot', 'traditionnel'],
        'Mariage': ['mariage', 'mariée', 'époux', 'union'],
        'Baptême': ['baptême', 'baptiser', 'naissance'],
        'Shooting': ['shooting', 'photo', 'séance photo', 'mannequin'],
        'Bété': ['bété', 'tapa'],
        'Didá': ['didá', 'dida', 'rafia'],
        'AKAN': ['akan', 'or', 'diamand']
      }
    };

    // Construire la requête de recherche
    let query = supabase
      .from('media')
      .select('*');

    // Recherche par type de fichier
    let wantsImages = mediaKeywords.images.some(keyword => lowerQuestion.includes(keyword));
    let wantsVideos = mediaKeywords.videos.some(keyword => lowerQuestion.includes(keyword));
    
    if (wantsImages && !wantsVideos) {
      query = query.eq('file_type', 'image');
    } else if (wantsVideos && !wantsImages) {
      query = query.eq('file_type', 'video');
    }

    // Recherche par catégorie/tags
    const foundCategories = [];
    for (const [category, keywords] of Object.entries(mediaKeywords.categories)) {
      if (keywords.some(keyword => lowerQuestion.includes(keyword))) {
        foundCategories.push(category);
      }
    }

    if (foundCategories.length > 0) {
      query = query.or(
        foundCategories.map(cat => `category.cs.{${cat}},tags.cs.{${cat}}`).join(',')
      );
    }

    // Limiter les résultats
    query = query.limit(6).order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) {
      console.error('Error searching media:', error);
      return [];
    }

    console.log('Found media:', data);
    return data || [];
  } catch (error) {
    console.error('Error in searchMediaInDatabase:', error);
    return [];
  }
}

// Fonction pour rechercher des informations complémentaires sur Facebook
async function searchFacebookInfo(question: string): Promise<string> {
  try {
    // Fetch Facebook page content
    const response = await fetch('https://www.facebook.com/profile.php?id=100043243184949', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (!response.ok) {
      console.log('Could not fetch Facebook page');
      return '';
    }
    
    const content = await response.text();
    
    // Extract relevant text content (simplified approach)
    const textContent = content
      .replace(/<script[^>]*>.*?<\/script>/gi, '')
      .replace(/<style[^>]*>.*?<\/style>/gi, '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    
    // Look for relevant information based on keywords
    const keywords = question.toLowerCase().split(' ');
    const relevantParts = [];
    
    const sentences = textContent.split(/[.!?]+/);
    for (const sentence of sentences) {
      if (keywords.some(keyword => sentence.toLowerCase().includes(keyword))) {
        relevantParts.push(sentence.trim());
      }
    }
    
    return relevantParts.slice(0, 3).join('. ');
  } catch (error) {
    console.error('Error fetching Facebook info:', error);
    return '';
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
    
    // Étape 2: Rechercher des médias dans la base de données
    const mediaResults = await searchMediaInDatabase(message);
    console.log('Media search results:', mediaResults);
    
    // Étape 3: Si l'info semble incomplète, chercher sur Facebook
    const needsMoreInfo = checkIfNeedsMoreInfo(message, relevantInfo);
    if (needsMoreInfo) {
      console.log('Searching for additional info on Facebook...');
      additionalInfo = await searchFacebookInfo(message);
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

    const systemPrompt = `Tu es l'assistante virtuelle de SEKA Vanessa, spécialiste des tenues traditionnelles ivoiriennes. 

INFORMATIONS PRINCIPALES (RAG):
${relevantInfo}

${additionalInfo ? `INFORMATIONS COMPLÉMENTAIRES (Facebook):
${additionalInfo}

` : ''}${mediaInfo}INSTRUCTIONS:
- Réponds toujours en français avec un ton chaleureux et professionnel
- Utilise d'abord les informations RAG, puis complète avec les infos Facebook si disponibles
- Si des médias sont disponibles dans la base de données, partage les URLs des photos/vidéos pertinentes
- Quand tu partages des médias, utilise ce format: "Voici quelques photos/vidéos : [Titre](URL)"
- Si la question concerne la location, mentionne qu'ils peuvent contacter au 07 78 18 30 92
- Encourage toujours à visiter la boutique ou à contacter par WhatsApp
- Si tu n'as pas l'information exacte, suggère de contacter directement ou de consulter la page Facebook
- Utilise un langage dynamique comme "WAHOOOO!" quand approprié
- Mets en avant l'authenticité culturelle et l'élégance des créations`;

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
      media: mediaResults,
      source: mediaResults.length > 0 ? 'knowledge_base_with_media' : (additionalInfo ? 'knowledge_base_with_facebook' : 'knowledge_base')
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