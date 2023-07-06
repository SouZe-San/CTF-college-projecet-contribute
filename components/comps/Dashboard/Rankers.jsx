import React from "react";

import "../../styles/Dashboard/rankers.scss";
const Rankers = ({ user }) => {
  return (
    <div className="w-full flex justify-between items-center border-2 border-[#78F152] px-12 py-4 my-2 rank_row">
      <h1>#{user.rank}</h1>
      <h3>{user.teamName}</h3>
      <p>{user.score}</p>
    </div>
  );
};

export default Rankers;
