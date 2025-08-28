import React, { useState } from 'react';
import { supabase } from './supabaseClient';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async () => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) return alert(error.message);

    // Users table me extra info save
    const { data, error: tableError } = await supabase
      .from('users')
      .insert([{ id: user.id, name, email }]);

    if (tableError) alert(tableError.message);
    else alert('Registration successful!');
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        className="w-full p-2 mb-2 border rounded"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        className="w-full p-2 mb-2 border rounded"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full p-2 mb-2 border rounded"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
}
