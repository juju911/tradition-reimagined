import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Base de connaissances RAG pour SEKA Vanessa
const knowledgeBase = `
SEKA Vanessa - Créatrice de Tenues Traditionnelles

SERVICES PROPOSÉS:
- Location de tenues traditionnelles pour événements (DOT, mariage, shooting, baptême, etc.)
- Créations sur mesure et prestations personnalisées
- Collections festives axées sur l'élégance et l'authenticité culturelle

TYPES DE TENUES DISPONIBLES:
- Tenues de cérémonie (DOT, mariage, baptême)
- Tenues pour événements photo (shooting, clips)
- Robes de mariée traditionnelles africaines
- Accessoires assortis

TISSUS SPÉCIALISÉS:
- Pagne rafia tissé (Didá) - symbole d'identité culturelle
- Tapa (Bété) - tissu traditionnel précieux
- Tissus ethniques Bété et Didá valorisés

CONTACT:
- Téléphone/WhatsApp: 07 78 18 30 92
- Boutique: "Tenue traditionnelle" - Abidjan Ouest
- Facebook boutique: https://www.facebook.com/profile.php?id=100043243184949
- Facebook personnel: https://www.facebook.com/vanessa.seka.963

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

    // Recherche dans la base de connaissances
    const relevantInfo = findRelevantInfo(message);

    const systemPrompt = `Tu es l'assistante virtuelle de SEKA Vanessa, spécialiste des tenues traditionnelles ivoiriennes. 
    
Utilise ces informations pour répondre aux questions:
${relevantInfo}

INSTRUCTIONS:
- Réponds toujours en français avec un ton chaleureux et professionnel
- Utilise les informations fournies pour répondre précisément
- Si la question concerne la location, mentionne qu'ils peuvent contacter au 07 78 18 30 92
- Encourage toujours à visiter la boutique ou à contacter par WhatsApp
- Si tu n'as pas l'information exacte, suggère de contacter directement
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
      source: 'knowledge_base' 
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