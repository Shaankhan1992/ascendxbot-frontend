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
      <div>
        <Login onLogin={(u) => setUser(u)} />   {/* ✅ user set hoga */}
        <Register />
        <hr className="my-4" />
        <AdminLogin onAdminLogin={(a) => setAdmin(a)} />
      </div>
    );

  return <Dashboard user={user} />;  // ✅ dashboard dikhega
}
