import React from "react";
import { Home, Wallet, Gift, Users, BarChart, User, LogOut, Bell } from "lucide-react";

const UserDashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0a0f14] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f1620] shadow-lg hidden md:flex flex-col">
        <div className="p-6 font-bold text-2xl text-green-400">GrowBot</div>
        <nav className="flex-1 space-y-2 px-4">
          <NavItem icon={<Home size={18} />} text="Home" active />
          <NavItem icon={<Wallet size={18} />} text="Wallet" />
          <NavItem icon={<BarChart size={18} />} text="Earnings" />
          <NavItem icon={<Gift size={18} />} text="Rewards" />
          <NavItem icon={<Users size={18} />} text="Team" />
          <NavItem icon={<User size={18} />} text="Profile" />
        </nav>
        <div className="p-4">
          <button className="flex items-center gap-2 text-red-400 hover:text-red-500">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="flex justify-between items-center p-4 bg-[#0f1620] shadow">
          <h1 className="text-xl font-semibold">User Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2">
              <img
                src="https://ui-avatars.com/api/?name=User&background=07cc73&color=fff"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm">John Doe</span>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          <div className="grid md:grid-cols-4 gap-6">
            <StatCard title="Total Income" value="$2,450" />
            <StatCard title="Team Business" value="$12,800" />
            <StatCard title="Rank" value="Silver" />
            <StatCard title="Status" value="Active" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <WalletCard title="Income Wallet" balance="$1,200" />
            <WalletCard title="Topup Wallet" balance="$500" />
          </div>
        </div>
      </main>
    </div>
  );
};

// Components
const NavItem = ({ icon, text, active }) => (
  <button
    className={`flex items-center gap-3 w-full p-2 rounded-md transition ${
      active ? "bg-green-400 text-black font-semibold" : "hover:bg-white/10"
    }`}
  >
    {icon}
    {text}
  </button>
);

const StatCard = ({ title, value }) => (
  <div className="bg-[#0f1620] p-6 rounded-xl shadow text-center">
    <h3 className="text-white/70 text-sm">{title}</h3>
    <p className="text-2xl font-bold mt-2 text-green-400">{value}</p>
  </div>
);

const WalletCard = ({ title, balance }) => (
  <div className="bg-[#0f1620] p-6 rounded-xl shadow">
    <h3 className="text-white/70 text-sm">{title}</h3>
    <p className="text-2xl font-bold mt-2 text-green-400">{balance}</p>
    <button className="mt-4 w-full bg-green-400 text-black py-2 rounded-lg font-semibold hover:bg-green-500 transition">
      Withdraw
    </button>
  </div>
);

export default UserDashboard;
