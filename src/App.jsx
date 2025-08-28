import React from "react";
import TopSection from "./components/TopSection";
import EarningsSummary from "./components/EarningsSummary";
import IncomeCards from "./components/IncomeCards";
import WalletSection from "./components/WalletSection";
import TeamStats from "./components/TeamStats";
import RankReward from "./components/RankReward";
import MenuBar from "./components/MenuBar";

function App() {
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

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <MenuBar />
      <TopSection user={dummyUser} />
      <EarningsSummary earnings={dummyEarnings} />
      <IncomeCards incomes={dummyIncomes} />
      <WalletSection wallets={dummyWallets} />
      <TeamStats team={dummyTeam} />
