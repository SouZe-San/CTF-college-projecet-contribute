import React from "react";

import Rankers from "./Rankers";
import { Users } from "./user";

const RankingBlock = () => {
  return (
    <div className="mx-8 my-4">
      <h1 className="w-full text-4xl font-bold text-center text-green-400  mb-4">
        This Is The Main RANKING BOARD
      </h1>

      {Users.map((user) => {
        return (
          <div key={user.rank}>
            <Rankers user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default RankingBlock;
