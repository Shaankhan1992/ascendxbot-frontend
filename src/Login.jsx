import { useState } from 'react';
import { supabase } from './supabaseClient';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    setLoading(true);

    // 1️⃣ Supabase Auth se login
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      alert('Login failed: ' + authError.message);
      setLoading(false);
      return;
    }

    // 2️⃣ Login successful → users table se full user details fetch
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    setLoading(false);

    if (userError || !userData) {
      alert('Could not fetch user data: ' + (userError?.message || 'Unknown error'));
      return;
    }

    // 3️⃣ App.jsx ko user data bhejo → dashboard khul jaayega
    onLogin(userData);
  };

  return (
    <div className="p-6 border rounded w-96 mx-auto my-10 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">User Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />
      <button
        onClick={handleLogin}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
}
