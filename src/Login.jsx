import { useState } from 'react';
import { supabase } from './supabaseClient';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Supabase Auth se login attempt
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      alert('Login failed: ' + authError.message);
      return;
    }

    // ✅ User object fetch karna
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('id, name, email, phone') // required fields
      .eq('email', email)
      .single();

    if (userError) {
      alert('Failed to fetch user data: ' + userError.message);
    } else {
      alert('Login successful!');
      onLogin(userData); // Dashboard me redirect
    }
  };

  return (
    <div className="p-4 border rounded w-96 mx-auto my-10">
      <h2 className="text-xl font-bold mb-4">User Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
