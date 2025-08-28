import React, { useState } from 'react';
import { supabase } from './supabaseClient';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { data: user, error } = await supabase.auth.signInWithPassword({ email, password });
    console.log('User:', user, 'Error:', error);

    if (error) return alert(error.message);

    onLogin(user.user); // Dashboard render ke liye
  };

  // Random login button (testing)
  const handleRandomLogin = () => {
    const testUsers = [
      { email: 'test1@example.com', password: 'Test@123' },
      { email: 'test2@example.com', password: 'Test@123' },
    ];
    const randomUser = testUsers[Math.floor(Math.random() * testUsers.length)];
    setEmail(randomUser.email);
    setPassword(randomUser.password);
  };

  return (
    <div className="p-4 max-w-md w-full bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">User Login</h2>
      <input
        className="w-full p-2 mb-2 border rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full p-2 mb-2 border rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleRandomLogin}
      >
        Random Login
      </button>
    </div>
  );
}
