import { supabase } from './supabaseClient';
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [referral, setReferral] = useState('');

  const handleRegister = async () => {
    if (!referral) {
      alert('Referral required');
      return;
    }

    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          email,
          password,
          name,
          phone,
          referral_code: referral,
          sponsor_id: referral,
          rank: 'R-0',
          status: 'active',
        },
      ]);

    if (error) {
      alert('Register failed: ' + error.message);
    } else {
      alert('Registration successful!');
    }
  };

  return (
    <div className="p-4 border rounded w-96 mx-auto my-10">
      <h2 className="text-xl font-bold mb-4">User Register</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 w-full mb-2" />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 w-full mb-2" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 w-full mb-2" />
      <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} className="border p-2 w-full mb-2" />
      <input type="text" placeholder="Referral Code" value={referral} onChange={e => setReferral(e.target.value)} className="border p-2 w-full mb-4" />
      <button onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </div>
  );
}
