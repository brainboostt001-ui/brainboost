import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://enhdlinabhntxrtrnfwi.supabase.co'

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuaGRsaW5hYmhudHhydHJuZndpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2MTI4OTMsImV4cCI6MjA4MDE4ODg5M30.peyNBavkBrdNLCc7vDYFD2OzUiwUVIMZeBVPNy2CupE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export default supabase;

