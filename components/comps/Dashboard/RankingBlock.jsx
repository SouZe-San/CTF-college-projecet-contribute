import React from "react";
import Image from "next/image";
// Components
import Rankers from "./Rankers";
import MainUser from "./MainUser";

import "../../styles/Dashboard/dashboard.scss";

// Data
import { Users } from "./user";

const RankingBlock = () => {
  return (
    <div className="md:px-40 px-12 flex flex-col items-center mt-32">
      <h1 className="bg_text">
        C{"  "}T{"  "}F{"\n"} CHAMPIONSHIP
      </h1>
      {/* -------- Details Of Login Team */}
      <MainUser />

      {/* -------- Ranking Table */}
      <div className="rankTable w-full mt-12">
        {Users.sort((curr, next) => curr.rank - next.rank).map((user) => {
          return (
            <div key={user.rank} className="w-full">
              <Rankers user={user} />
              <div className="horizon"></div>
              <div className="horizon mt-[8px]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RankingBlock;
