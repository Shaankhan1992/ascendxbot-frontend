import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={(u) => setUser(u)} />;
  }

  return <Dashboard user={user} />;
}

