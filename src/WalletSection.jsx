import React from "react";

const WalletSection = ({ wallets }) => (
  <div className="grid grid-cols-2 gap-4 mb-4">
    <div className="bg-white p-4 rounded shadow">
      <p>Income Wallet</p>
      <h3 className="text-xl font-bold">${wallets.income}</h3>
      <button className="text-blue-500 mt-2">View Statement</button>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <p>Topup Wallet</p>
      <h3 className="text-xl font-bold">${wallets.topup}</h3>
      <button className="text-blue-500 mt-2">View Statement</button>
    </div>
  </div>
);

export default WalletSection;
