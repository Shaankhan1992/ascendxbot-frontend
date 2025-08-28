import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uqqncollnrpzpdhiouos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxcW5jb2xsbnJwenBkaGlvdW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTc4NzgsImV4cCI6MjA3MTg3Mzg3OH0.wdmZ6I5YJu4qlaj_cnnVg0ieM2rhFpvvsZbhXbXTpfc'

export const supabase = createClient(supabaseUrl, supabaseKey)
