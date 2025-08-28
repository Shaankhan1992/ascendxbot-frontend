import { useState } from 'react';

const testAdmins = [
  { email: 'admin1@example.com', password: 'Admin@123', name: 'Admin One' },
  { email: 'admin2@example.com', password: 'Admin@123', name: 'Admin Two' },
];

export default function AdminLogin({ onAdminLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = () => {
    const admin = testAdmins.find(a => a.email === email && a.password === password);
    if (admin) {
      alert('Admin Login Successful!');
      onAdminLogin(admin);
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="p-4 border rounded w-96 mx-auto my-10">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 w-full mb-2" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 w-full mb-4" />
      <button onClick={handleAdminLogin} className="bg-red-500 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}
