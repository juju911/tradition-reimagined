-- Analyse du problème de sécurité sur la table registrations
-- Supprimer l'ancienne politique potentiellement problématique
DROP POLICY IF EXISTS "Admins can view all registrations" ON public.registrations;

-- Créer une politique SELECT plus stricte et sécurisée
-- Seuls les utilisateurs avec un email d'admin spécifique peuvent voir les données
CREATE POLICY "Only verified admin can view registrations" 
ON public.registrations 
FOR SELECT 
USING (
  auth.uid() IS NOT NULL 
  AND 
  EXISTS (
    SELECT 1 
    FROM auth.users 
    WHERE users.id = auth.uid() 
    AND users.email = 'admin@banconynight.com'
    AND users.email_confirmed_at IS NOT NULL
  )
);

-- Ajouter une politique pour empêcher tout accès non autorisé par défaut
-- Cette politique restrictive assure qu'aucun autre utilisateur ne peut lire les données
CREATE POLICY "Deny all other SELECT access" 
ON public.registrations 
FOR SELECT 
USING (false);

-- Garder la politique INSERT existante mais l'améliorer légèrement
DROP POLICY IF EXISTS "Anyone can register for events" ON public.registrations;

CREATE POLICY "Anyone can register for events" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true);

-- Ajouter une politique explicite pour empêcher UPDATE et DELETE non autorisés
CREATE POLICY "Only admin can update registrations" 
ON public.registrations 
FOR UPDATE 
USING (
  auth.uid() IS NOT NULL 
  AND 
  EXISTS (
    SELECT 1 
    FROM auth.users 
    WHERE users.id = auth.uid() 
    AND users.email = 'admin@banconynight.com'
    AND users.email_confirmed_at IS NOT NULL
  )
);

CREATE POLICY "Only admin can delete registrations" 
ON public.registrations 
FOR DELETE 
USING (
  auth.uid() IS NOT NULL 
  AND 
  EXISTS (
    SELECT 1 
    FROM auth.users 
    WHERE users.id = auth.uid() 
    AND users.email = 'admin@banconynight.com'
    AND users.email_confirmed_at IS NOT NULL
  )
);