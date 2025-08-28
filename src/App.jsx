import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

export default function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  if (admin) return <AdminDashboard />;

  if (user) return <Dashboard userId={user.id} />;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <Login onLogin={(u) => setUser(u)} />
      <Register />
      <hr className="my-6 w-3/4" />
      <AdminLogin onAdminLogin={(a) => setAdmin(a)} />
    </div>
  );
}
