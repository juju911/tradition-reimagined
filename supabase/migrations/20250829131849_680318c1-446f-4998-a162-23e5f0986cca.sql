-- Créer un bucket de stockage pour les médias (seulement s'il n'existe pas)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('media', 'media', true)
ON CONFLICT (id) DO NOTHING;

-- Créer une table pour les métadonnées des médias
CREATE TABLE IF NOT EXISTS public.media (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_path TEXT NOT NULL,
  file_type VARCHAR(50) NOT NULL CHECK (file_type IN ('image', 'video')),
  category TEXT[] DEFAULT ARRAY[]::TEXT[],
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS sur la table media
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

-- Supprimer les politiques existantes si elles existent
DROP POLICY IF EXISTS "Media are viewable by everyone" ON public.media;
DROP POLICY IF EXISTS "Only admin can insert media" ON public.media;
DROP POLICY IF EXISTS "Only admin can update media" ON public.media;
DROP POLICY IF EXISTS "Only admin can delete media" ON public.media;

-- Créer des politiques RLS pour les médias (lecture publique, écriture admin seulement)
CREATE POLICY "Media are viewable by everyone" 
ON public.media 
FOR SELECT 
USING (true);

CREATE POLICY "Only admin can insert media" 
ON public.media 
FOR INSERT 
WITH CHECK (
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

CREATE POLICY "Only admin can update media" 
ON public.media 
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

CREATE POLICY "Only admin can delete media" 
ON public.media 
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

-- Supprimer les politiques storage existantes si elles existent
DROP POLICY IF EXISTS "Media files are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Only admin can upload media files" ON storage.objects;
DROP POLICY IF EXISTS "Only admin can update media files" ON storage.objects;
DROP POLICY IF EXISTS "Only admin can delete media files" ON storage.objects;

-- Créer des politiques pour le storage bucket
CREATE POLICY "Media files are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'media');

CREATE POLICY "Only admin can upload media files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'media' 
  AND 
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

CREATE POLICY "Only admin can update media files" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'media' 
  AND 
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

CREATE POLICY "Only admin can delete media files" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'media' 
  AND 
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

-- Créer des index pour les recherches (seulement s'ils n'existent pas)
CREATE INDEX IF NOT EXISTS idx_media_category ON public.media USING GIN(category);
CREATE INDEX IF NOT EXISTS idx_media_tags ON public.media USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_media_file_type ON public.media(file_type);

-- Créer un trigger pour mettre à jour updated_at (seulement s'il n'existe pas)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.triggers 
        WHERE trigger_name = 'update_media_updated_at'
    ) THEN
        CREATE TRIGGER update_media_updated_at
        BEFORE UPDATE ON public.media
        FOR EACH ROW
        EXECUTE FUNCTION public.update_updated_at_column();
    END IF;
END
$$;