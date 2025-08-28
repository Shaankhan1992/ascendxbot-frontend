import { useState } from 'react';

export default function AdminLogin({ onAdminLogin }) {
  const [email, setEmail] = useState('admin1@example.com');
  const [password, setPassword] = useState('Admin@123');

  const handleAdminLogin = () => {
    // Demo: static admin users
    const testAdmins = [
      { email: 'admin1@example.com', password: 'Admin@123', name: 'Admin One' },
      { email: 'admin2@example.com', password: 'Admin@123', name: 'Admin Two' },
    ];

    const found = testAdmins.find((a) => a.email === email && a.password === password);
    if (found) {
      alert('Admin login successful!');
      onAdminLogin(found);
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="p-6 border rounded w-96 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
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
        onClick={handleAdminLogin}
        className="bg-red-500 text-white px-4 py-2 rounded w-full"
      >
        Login as Admin
      </button>
    </div>
  );
}
