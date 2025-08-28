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
  if (!user)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Login onLogin={(u) => setUser(u)} />
        <Register />
        <hr className="my-4 w-96 border-gray-300" />
        <AdminLogin onAdminLogin={(a) => setAdmin(a)} />
      </div>
    );

  return <Dashboard user={user} />;
}
