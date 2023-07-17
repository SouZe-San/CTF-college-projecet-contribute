"use client";

import React, { useState } from "react";

import ChallengeItem from "./ChallengeItem";

// Stylesheet
import "../../styles/challenges/challengeBlock.scss";

// Data
// import { ChallengesArray } from "./assest/allChallenges.js";

const Challenges = ({ allChallenges }) => {
  // ^Fetch Data from API
  const originalData = [...allChallenges];

  // State Variables

  const [ChallengesData, setChallengesData] = useState(originalData);
  const [isSortByLevel, setIsSortByLevel] = useState(false);
  const [isSortByType, setIsSortByType] = useState(false);

  // Compare by Difficulty
  const compareByDifficulty = (task1, task2) => {
    const difficulties = { easy: 1, medium: 2, hard: 3 };
    return difficulties[task1.difficulty] - difficulties[task2.difficulty];
  };

  // Compare by Category
  const compareByCategory = (task1, task2) => {
    const category = {
      "prompt injection": 1,
      crypto: 2,
      reverse: 3,
      pwn: 4,
      forensics: 5,
      web: 6,
    };
    return category[task1.category] - category[task2.category];
  };

  // Click Function for Sort by Difficulty / Level of the Flag
  const sortByDifficulty = (e) => {
    setIsSortByLevel(!isSortByLevel);
    setIsSortByType(false);
    e.preventDefault();
    ChallengesData.sort(compareByDifficulty);
    setChallengesData(ChallengesData);
  };

  // Click Function for Sort by Category of the Flag {If wa}
  const sortByCategory = (e) => {
    setIsSortByType(!isSortByType);
    setIsSortByLevel(false);
    e.preventDefault();
    ChallengesData.sort(compareByCategory);
    setChallengesData(ChallengesData);
  };

  // Click Function Get Default Sort
  const sortByDefault = (e) => {
    e.preventDefault();
    setChallengesData(originalData);
  };

  return (
    <div className="px-32 mt-24 mb-8">
      <div className="page_header ">
        <h1>Capture The Flag</h1>
        <h4>
          There some small flag Lets conquer those within the time. Read Instruction Carefully and
          flow them.
        </h4>
      </div>

      <div className="sorting w-full text-right  md:mt-8">
        <button className="sort_btn" onClick={sortByDefault}>
          Default{" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z" fill="rgba(248,248,248,1)"></path>
          </svg>
        </button>
        <button className="sort_btn" onClick={sortByCategory}>
          Category{" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z" fill="rgba(248,248,248,1)"></path>
          </svg>
        </button>
        <button className="sort_btn" onClick={sortByDifficulty}>
          Level{" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z" fill="rgba(248,248,248,1)"></path>
          </svg>
        </button>
      </div>

      <div className="flags border-[2px] border-[#78f251] py-6  rounded-[10px] px-2 mt-2">
        {!ChallengesData ? (
          <>Wait A Moment</>
        ) : (
          ChallengesData.map((challenge, index) => {
            return (
              <div key={index}>
                <ChallengeItem challenge={challenge} length={ChallengesData.length} index={index} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Challenges;
