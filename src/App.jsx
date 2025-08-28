import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

export default function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  // Agar admin logged in → Admin Dashboard
  if (admin) return <AdminDashboard />;

  // Agar user logged in → Dashboard
  if (user) return <Dashboard userId={user.id} />;

  // Agar koi login nahi → show login forms
  return (
    <div>
      <Login onLogin={(u) => setUser(u)} />
      <Register />
      <hr className="my-4" />
      <AdminLogin onAdminLogin={(a) => setAdmin(a)} />
    </div>
  );
}
