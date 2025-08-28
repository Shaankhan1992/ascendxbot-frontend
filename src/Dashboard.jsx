import React from 'react';

export default function Dashboard({ userId }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">User Dashboard</h1>
      <p>User ID: {userId}</p>
      <p>All earnings, wallet, rank etc. will appear here.</p>
    </div>
  );
}
