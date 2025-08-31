-- Créer une table pour stocker les prix des tenues traditionnelles
CREATE TABLE public.pricing (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tenue_type TEXT NOT NULL,
  price_couple INTEGER,
  price_individual INTEGER,
  currency TEXT NOT NULL DEFAULT 'F CFA',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS sur la table pricing
ALTER TABLE public.pricing ENABLE ROW LEVEL SECURITY;

-- Politique pour que tout le monde puisse voir les prix (données publiques)
CREATE POLICY "Pricing is viewable by everyone" 
ON public.pricing 
FOR SELECT 
USING (is_active = true);

-- Politique pour que seul l'admin puisse modifier les prix
CREATE POLICY "Only admin can insert pricing" 
ON public.pricing 
FOR INSERT 
WITH CHECK ((auth.uid() IS NOT NULL) AND (EXISTS ( SELECT 1
   FROM auth.users
  WHERE ((users.id = auth.uid()) AND ((users.email)::text = 'admin@banconynight.com'::text) AND (users.email_confirmed_at IS NOT NULL)))));

CREATE POLICY "Only admin can update pricing" 
ON public.pricing 
FOR UPDATE 
USING ((auth.uid() IS NOT NULL) AND (EXISTS ( SELECT 1
   FROM auth.users
  WHERE ((users.id = auth.uid()) AND ((users.email)::text = 'admin@banconynight.com'::text) AND (users.email_confirmed_at IS NOT NULL)))));

CREATE POLICY "Only admin can delete pricing" 
ON public.pricing 
FOR DELETE 
USING ((auth.uid() IS NOT NULL) AND (EXISTS ( SELECT 1
   FROM auth.users
  WHERE ((users.id = auth.uid()) AND ((users.email)::text = 'admin@banconynight.com'::text) AND (users.email_confirmed_at IS NOT NULL)))));

-- Trigger pour mettre à jour automatiquement updated_at
CREATE TRIGGER update_pricing_updated_at
BEFORE UPDATE ON public.pricing
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insérer les prix des tenues traditionnelles
INSERT INTO public.pricing (tenue_type, price_couple, price_individual) VALUES
('AKAN', 70000, 40000),
('GUERE', 50000, 30000),
('SENOUFO', 50000, 30000),
('GOURO', 60000, 35000),
('YACOUBA', 50000, 30000),
('PEUL', 60000, 35000),
('NIGERIANE', 60000, 35000),
('BURKINABE', 50000, 30000),
('DIDA', 70000, 40000),
('BETE', 70000, 40000),
('DEMOISELLE_HONNEUR', NULL, 20000),
('GARCON_HONNEUR', NULL, 20000);

-- Créer un index pour améliorer les performances de recherche
CREATE INDEX idx_pricing_tenue_type ON public.pricing(tenue_type);
CREATE INDEX idx_pricing_active ON public.pricing(is_active);