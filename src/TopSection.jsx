import React from "react";

const TopSection = ({ user }) => (
  <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4">
    <div>
      <h2 className="text-lg font-semibold">Welcome, {user.name}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-600">{user.phone}</p>
    </div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
      Copy Referral Link
    </button>
  </div>
);

export default TopSection;
