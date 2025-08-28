import React, { useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {
  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('users').select('*');
      if (error) console.error('Error:', error);
      else console.log('Users:', data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h1>Supabase Test Connection</h1>
      <p>Check console for users data.</p>
    </div>
  );
}

export default App;
