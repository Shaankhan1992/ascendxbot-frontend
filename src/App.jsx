import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <div>
        <Login onLogin={(u) => setUser(u)} />
        <Register />
      </div>
    );
  }

  return <Dashboard userId={user.id} />;
}

