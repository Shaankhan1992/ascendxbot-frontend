import React from "react";

const EarningsSummary = ({ earnings }) => (
  <div className="grid grid-cols-3 gap-4 mb-4">
    <div className="bg-white p-4 rounded shadow">
      <p>Total Earnings</p>
      <h3 className="text-xl font-bold">${earnings.total}</h3>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <p>Today's Earnings</p>
      <h3 className="text-xl font-bold">${earnings.today}</h3>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <p>Pending Limit</p>
      <h3 className="text-xl font-bold">
        ${earnings.used} / ${earnings.limit}
      </h3>
      <div className="w-full bg-gray-200 h-2 rounded mt-2">
        <div
          className="bg-green-500 h-2 rounded"
          style={{ width: `${(earnings.used / earnings.limit) * 100}%` }}
        />
      </div>
    </div>
  </div>
);

export default EarningsSummary;
