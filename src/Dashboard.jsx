import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import TopSection from './components/TopSection';
import EarningsSummary from './components/EarningsSummary';
import IncomeCards from './components/IncomeCards';
import WalletSection from './components/WalletSection';
import TeamStats from './components/TeamStats';
import RankReward from './components/RankReward';
import MenuBar from './components/MenuBar';

export default function Dashboard({ userId }) {
  const [user, setUser] = useState(null);
  const [earnings, setEarnings] = useState({});
  const [incomes, setIncomes] = useState([]);
  const [wallets, setWallets] = useState({});
  const [team, setTeam] = useState({});
  const [rank, setRank] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // User info
      const { data: userData } = await supabase.from('users').select('*').eq('id', userId).single();
      setUser(userData);

      // Wallets
      const { data: walletData } = await supabase.from('wallets').select('*').eq('user_id', userId).single();
      setWallets(walletData);

      // Incomes
      const { data: incomeData } = await supabase.from('incomes').select('*').eq('user_id', userId);
      setIncomes(incomeData);

      // Earnings summary calculation
      let total = incomeData.reduce((acc, i) => acc + i.amount, 0);
      setEarnings({ total, today: 0, used: 0, limit: 1000 }); // aaj ka aur limit dummy for now

      // Team stats
      // calculate based on your business logic
      setTeam({ direct: 500, total: 2000, activeUsers: 10 });

      // Rank
      const { data: rankData } = await supabase.from('ranks').select('*').eq('user_id', userId).single();
      setRank(rankData);
    };

    fetchData();
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <MenuBar />
      <TopSection user={user} />
      <EarningsSummary earnings={earnings} />
      <IncomeCards incomes={incomes} />
      <WalletSection wallets={wallets} />
      <TeamStats team={team} />
      <RankReward rank={rank} />
    </div>
  );
}
