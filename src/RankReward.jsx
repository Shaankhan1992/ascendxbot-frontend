import React from "react";

const RankReward = ({ rank }) => (
  <div className="bg-white p-4 rounded shadow mb-4">
    <h3 className="font-semibold mb-2">Rank & Rewards</h3>
    <p>Current Rank: {rank.current}</p>
    <p>Next Target: {rank.nextTarget}</p>
    <table className="w-full mt-2 text-sm">
      <thead>
        <tr>
          <th>Sr. No</th>
          <th>Main Leg</th>
          <th>Other Leg</th>
          <th>Reward</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rank.rewards.map((r, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{r.main}</td>
            <td>{r.other}</td>
            <td>{r.reward}</td>
            <td>{r.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RankReward;
