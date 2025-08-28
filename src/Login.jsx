import { supabase } from './supabaseClient';
import { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .eq('password', password)
      .single();

    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      alert('Login successful!');
      onLogin(data);
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
      <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}
