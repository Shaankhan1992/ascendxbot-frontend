import React from "react";

const TeamStats = ({ team }) => (
  <div className="bg-white p-4 rounded shadow mb-4">
    <h3 className="font-semibold mb-2">Team Stats</h3>
    <p>Direct Business: ${team.direct}</p>
    <p>Team Business: ${team.total}</p>
    <p>Direct Active Users: {team.activeUsers}</p>
  </div>
);

export default TeamStats;
