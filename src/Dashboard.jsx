import React from "react";

export default function Dashboard({ user }) {
  // Dummy data
  const dummyEarnings = { total: 500, today: 25, used: 500, limit: 1000 };
  const dummyIncomes = [
    { type: "Direct Referral", amount: 100 },
    { type: "BOT Activation", amount: 200 },
    { type: "Royalty Pool", amount: 50 },
    { type: "Rank & Reward", amount: 100 },
    { type: "ROI Direct Bonus", amount: 25 },
    { type: "ROI Profit Sharing", amount: 15 },
    { type: "ROI Level Income", amount: 10 },
    { type: "Leadership Bonus", amount: 0 },
  ];
  const dummyWallets = { income: 150, topup: 50 };
  const dummyTeam = { direct: 500, total: 2000, activeUsers: 10 };
  const dummyRank = {
    current: "R-5",
    nextTarget: "25 Main Leg IDs, 25 Other Leg IDs",
    rewards: [
      { main: 10, other: 10, reward: "$50", status: "Pending" },
      { main: 25, other: 25, reward: "$100", status: "Achieved" },
    ],
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {user.email}
      </h1>

      {/* Earnings */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Earnings Summary</h2>
        <p>Total: ${dummyEarnings.total}</p>
        <p>Today: ${dummyEarnings.today}</p>
        <p>Used / Limit: ${dummyEarnings.used} / ${dummyEarnings.limit}</p>
      </div>

      {/* Income Breakdown */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Income Breakdown</h2>
        {dummyIncomes.map((inc) => (
          <p key={inc.type}>
            {inc.type}: ${inc.amount}
          </p>
        ))}
      </div>

      {/* Wallets */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Wallets</h2>
        <p>Income Wallet: ${dummyWallets.income}</p>
        <p>Topup Wallet: ${dummyWallets.topup}</p>
      </div>

      {/* Team Stats */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Team Stats</h2>
        <p>Direct Business: ${dummyTeam.direct}</p>
        <p>Total Team Business: ${dummyTeam.total}</p>
        <p>Active Users: {dummyTeam.activeUsers}</p>
      </div>

      {/* Rank & Rewards */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Rank & Rewards</h2>
        <p>Current Rank: {dummyRank.current}</p>
        <p>Next Target: {dummyRank.nextTarget}</p>
        {dummyRank.rewards.map((r, idx) => (
          <p key={idx}>
            Reward: {r.reward}, Status: {r.status}
          </p>
        ))}
      </div>
    </div>
  );
}
