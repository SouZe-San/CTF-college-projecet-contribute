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
    <div className="px-32 flex flex-col items-center">
      {/* <Image
        src="/strip.png"
        alt="this Is Strip"
        height={500}
        width={500}
        style={{
          top: 0,
          zIndex: -1,
          aspectRatio: 1,
          minWidth: "50%",
        }}
        className="h-[20rem] absolute"
      /> */}

      <h1 className="w-full text-[3rem] font-bold text-center text-green-400  mb-4 px-32 md:pt-8 md:pb-12">
        The Main RANKING BOARD
      </h1>
      <h1 className="bg_text">
        C{"  "}T{"  "}F{"\n"} CHAMPIONSHIP
      </h1>
      {/* -------- Details Of Login Team */}
      <MainUser />

      {/* -------- Ranking Table */}

      {/* {Users.sort((curr, next) => curr.rank - next.rank).map((user) => {
        return (
          <div key={user.rank}>
            <Rankers user={user} />
          </div>
        );
      })} */}
    </div>
  );
};

export default RankingBlock;
