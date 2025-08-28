import React from "react";

const IncomeCards = ({ incomes }) => (
  <div className="grid grid-cols-3 gap-4 mb-4">
    {incomes.map((inc) => (
      <div key={inc.type} className="bg-white p-4 rounded shadow">
        <p>{inc.type}</p>
        <h3 className="text-xl font-bold">${inc.amount}</h3>
        <button className="text-blue-500 mt-2">View Details</button>
      </div>
    ))}
  </div>
);

export default IncomeCards;
