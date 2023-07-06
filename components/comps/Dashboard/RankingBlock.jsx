import React from "react";

// Components
import Rankers from "./Rankers";
import MainUser from "./MainUser";

// Data
import { Users } from "./user";

const RankingBlock = () => {
  return (
    <div className="px-32">
      <h1 className="w-full text-4xl font-bold text-center text-green-400  mb-4 px-32">
        This Is The Main RANKING BOARD
      </h1>
      {/* Details Of Login Team */}
      <MainUser />

      {/* Ranking Table */}

      {Users.sort((curr, next) => curr.rank - next.rank).map((user) => {
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
