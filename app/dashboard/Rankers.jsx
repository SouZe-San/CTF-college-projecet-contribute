import React from "react";

const Rankers = ({ user }) => {
  return (
    <div className="w-full flex justify-between items-center border-2 border-[#78F152] px-4 py-2 my-2">
      <h1>#{user.rank}</h1>
      <h3>{user.teamName}</h3>
      <p>{user.score}</p>
    </div>
  );
};

export default Rankers;
