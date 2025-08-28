import React, { useState } from 'react';
import { supabase } from './supabaseClient';

export default function AdminLogin({ onAdminLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = async () => {
    // Custom admin table check
    const { data: admin, error } = await supabase
      .from('admins')
      .select('*')
      .eq('email', email)
      .eq('password', password) // simple for testing
      .single();

    if (error || !admin) return alert('Admin login failed!');
    onAdminLogin(admin);
  };

  // Random admin login
  const handleRandomAdmin = () => {
    const testAdmins = [
      { email: 'admin1@example.com', password: 'Admin@123' },
      { email: 'admin2@example.com', password: 'Admin@123' },
    ];
    const randomAdmin = testAdmins[Math.floor(Math.random() * testAdmins.length)];
    setEmail(randomAdmin.email);
    setPassword(randomAdmin.password);
  };

  return (
    <div className="p-4 max-w-md w-full bg-gray-100 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
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
        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
        onClick={handleAdminLogin}
      >
        Login
      </button>
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded"
        onClick={handleRandomAdmin}
      >
        Random Admin Login
      </button>
    </div>
  );
}
