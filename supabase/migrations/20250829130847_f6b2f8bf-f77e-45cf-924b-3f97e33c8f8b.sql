-- Corriger le problème de sécurité en supprimant toutes les politiques existantes d'abord
-- puis en créant des politiques sécurisées

-- Supprimer toutes les politiques existantes sur registrations
DROP POLICY IF EXISTS "Admins can view all registrations" ON public.registrations;
DROP POLICY IF EXISTS "Anyone can register for events" ON public.registrations;
DROP POLICY IF EXISTS "Only verified admin can view registrations" ON public.registrations;
DROP POLICY IF EXISTS "Deny all other SELECT access" ON public.registrations;
DROP POLICY IF EXISTS "Only admin can update registrations" ON public.registrations;
DROP POLICY IF EXISTS "Only admin can delete registrations" ON public.registrations;

-- Créer des politiques sécurisées
-- 1. Seul l'admin vérifié peut voir les données
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

-- 2. Permettre à tout le monde de s'inscrire (fonctionnalité existante)
CREATE POLICY "Anyone can register for events" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true);

-- 3. Seul l'admin peut modifier les inscriptions
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

-- 4. Seul l'admin peut supprimer les inscriptions
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