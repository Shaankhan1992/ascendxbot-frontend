import React from "react";

const MenuBar = () => (
  <nav className="bg-gray-800 text-white p-4 mb-4 flex space-x-4">
    {[
      "Dashboard",
      "Deposit",
      "Withdrawal",
      "Create ID",
      "Activate/Upgrade",
      "Automation",
      "Income Reports",
      "Wallets",
      "Rank & Reward",
      "Team Report",
      "Settings",
      "Support",
    ].map((item) => (
      <button key={item} className="hover:bg-gray-700 px-3 py-1 rounded">
        {item}
      </button>
    ))}
  </nav>
);

export default MenuBar;
