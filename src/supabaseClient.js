import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qcvdqprtpbtxjpqshkrx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjdmRxcHJ0cGJ0eGpwcXNoa3J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0MDAxMDAsImV4cCI6MjA3MTk3NjEwMH0.OxhHbHsLcPlq-uSnU5f4DOVqXIwMt0DY--1geu-c5Ng';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
