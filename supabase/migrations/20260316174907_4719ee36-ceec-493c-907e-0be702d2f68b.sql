
-- Create leads table to store form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form)
CREATE POLICY "Anyone can insert leads" ON public.leads
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated admins or service role can read
CREATE POLICY "Service role can read leads" ON public.leads
  FOR SELECT TO service_role
  USING (true);
