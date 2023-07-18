import React from "react";

import "../../styles/Dashboard/rankers.scss";
const Rankers = ({ user }) => {
  return (
    <div className="w-full flex justify-between items-center  px-12 py-2 rank_row">
      <h1>
        {" "}
        <span>#</span>
        {user.rank}
      </h1>
      <h3>{user.teamName}</h3>
      <p>{user.points}</p>
    </div>
  );
};

export default Rankers;
