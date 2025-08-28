import React from 'react';

// Dummy data
const dummyUser = { name: "Sarfaraj Khan", email: "sarfarajk7890@gmail.com", phone: "9307260897" };
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

export default function Dashboard({ user }) {
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Top Section */}
      <div className="flex justify-between items-center bg-white p-4 rounded shadow mb-6">
        <div>
          <h2 className="text-xl font-bold">Welcome, {dummyUser.name}</h2>
          <p className="text-gray-600">{dummyUser.email} | {dummyUser.phone}</p>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2">
          Copy Referral Link
        </button>
      </div>

      {/* Earnings Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Total Earnings</h3>
          <p className="text-xl font-bold">${dummyEarnings.total}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Today’s Earnings</h3>
          <p className="text-xl font-bold">${dummyEarnings.today}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Pending Limit</h3>
          <p>${dummyEarnings.used} / ${dummyEarnings.limit}</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(dummyEarnings.used/dummyEarnings.limit)*100}%` }}></div>
          </div>
        </div>
      </div>

      {/* Income Cards */}
      <h3 className="text-lg font-bold mb-2">Income Breakdown</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {dummyIncomes.map((inc, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow hover:scale-105 transition">
            <h4 className="font-semibold">{inc.type}</h4>
            <p className="text-green-600 font-bold">${inc.amount}</p>
          </div>
        ))}
      </div>

      {/* Wallet Section */}
      <h3 className="text-lg font-bold mb-2">Wallets</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Income Wallet</h4>
          <p className="text-green-600 font-bold">${dummyWallets.income}</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">View Statement</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Topup Wallet</h4>
          <p className="text-green-600 font-bold">${dummyWallets.topup}</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">View Statement</button>
        </div>
      </div>

      {/* Team Stats */}
      <h3 className="text-lg font-bold mb-2">Team Stats</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Direct Business</h4>
          <p>${dummyTeam.direct}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Team Business</h4>
          <p>${dummyTeam.total}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Direct Active Users</h4>
          <p>{dummyTeam.activeUsers}</p>
        </div>
      </div>

      {/* Rank & Rewards */}
      <h3 className="text-lg font-bold mb-2">Rank & Rewards</h3>
      <div className="bg-white p-4 rounded shadow mb-6">
        <p>Current Rank: <strong>{dummyRank.current}</strong></p>
        <p>Next Rank Target: <strong>{dummyRank.nextTarget}</strong></p>
        <table className="w-full mt-4 table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Main Leg</th>
              <th className="border p-2">Other Leg</th>
              <th className="border p-2">Reward</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyRank.rewards.map((r, i) => (
              <tr key={i}>
                <td className="border p-2 text-center">{r.main}</td>
                <td className="border p-2 text-center">{r.other}</td>
                <td className="border p-2 text-center">{r.reward}</td>
                <td className="border p-2 text-center">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
