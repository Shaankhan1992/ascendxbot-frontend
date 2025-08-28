import { supabase } from './supabaseClient';
import { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('test1@example.com');
  const [password, setPassword] = useState('Test@123');

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert('Login failed: ' + error.message);
    } else if (data.user) {
      alert('Login successful!');
      onLogin(data.user);
    }
  };

  return (
    <div className="p-6 border rounded w-96 mb-6 shadow-lg">
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
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
}
