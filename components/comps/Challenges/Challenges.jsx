import React from "react";
import ChallengeItem from "./ChallengeItem";

// Stylesheet
import "../../styles/challenges/challengeBlock.scss";

// Data
import { ChallengesData } from "./assest/allChallenges.js";

const Challenges = () => {
  return (
    <div className="px-32">
      <div className="page_header ">
        <h1>Capture The Flag</h1>
        <h4>
          There some small flag Lets conquer those within the time. Read Instruction Carefully and
          flow them.
        </h4>
      </div>

      <div className="flags border-[2px] border-[#78f251] py-6  rounded-[10px] px-2">
        {ChallengesData.map((challenge, index) => {
          return (
            <div key={index}>
              <ChallengeItem challenge={challenge} length={ChallengesData.length} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Challenges;
