import { supabase } from './supabaseClient';
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert('Registration failed: ' + error.message);
    } else {
      // Optional: insert into users table
      await supabase.from('users').insert({
        id: data.user.id,
        email,
        name,
        password, // sirf test/demo purpose ke liye plain text
      });
      alert('Registration successful! Please login.');
    }
  };

  return (
    <div className="p-6 border rounded w-96 mb-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">User Register</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
      />
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
        onClick={handleRegister}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Register
      </button>
    </div>
  );
}
