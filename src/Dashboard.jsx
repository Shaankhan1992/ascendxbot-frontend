import React from 'react';

export default function Dashboard({ user }) {
  const dummyEarnings = { total: 500, today: 25, used: 500, limit: 1000 };
  const dummyWallets = { income: 150, topup: 50 };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {user.email}
      </h1>

      {/* Earnings Summary */}
      <div className="mb-4 p-4 border rounded">
        <h2 className="font-semibold">Earnings</h2>
        <p>Total: ${dummyEarnings.total}</p>
        <p>Today: ${dummyEarnings.today}</p>
        <p>Used / Limit: ${dummyEarnings.used} / ${dummyEarnings.limit}</p>
      </div>

      {/* Wallets */}
      <div className="mb-4 p-4 border rounded">
        <h2 className="font-semibold">Wallets</h2>
        <p>Income Wallet: ${dummyWallets.income}</p>
        <p>Topup Wallet: ${dummyWallets.topup}</p>
      </div>

      {/* Dummy Team Section */}
      <div className="mb-4 p-4 border rounded">
        <h2 className="font-semibold">Team</h2>
        <p>Direct Business: $500</p>
        <p>Total Team: $2000</p>
        <p>Active Users: 10</p>
      </div>
    </div>
  );
}
