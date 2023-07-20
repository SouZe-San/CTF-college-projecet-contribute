/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
// Components
import Dropdown from "./Dropdown";

// StyleSheet
import "../../styles/challenges/challenges.scss";

const ChallengeItem = ({ length, index, challenge }) => {
  //  Variables
  const [isDropdown, setIsDropdown] = useState(false);
  const [styleLevel, setStyleLevel] = useState({});
  const dropdownRef = useRef(null);

  //   DropDown Animation
  const tl = gsap.timeline({ paused: true });
  useEffect(() => {
    tl.fromTo(
      dropdownRef.current,
      {
        opacity: 0,
        height: 0,
        display: "none",
        duration: 0.2,
      },
      {
        display: "block",
        opacity: 1,
        height: "auto",
        overflow: "visible",
      }
    );
    if (isDropdown) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [tl]);

  // Color Added according by difficulties
  useEffect(() => {
    if (challenge.difficulty == "easy") {
      setStyleLevel({
        color: "#5be296",
      });
    } else if (challenge.difficulty == "hard") {
      setStyleLevel({
        color: "#fb0248",
      });
    } else {
      setStyleLevel({
        color: "#ffaa4f",
      });
    }
  }, [challenge.difficulty]);

  //  Dropdown Function Working Function
  const dropdownShow = (e) => {
    e.preventDefault();
    setIsDropdown(!isDropdown);
    if (isDropdown) {
      tl.play();
    } else {
      tl.reverse();
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flag_row grid grid-cols-4 content-center w-full">
        <h1 className="flag_name">
          <span> {index + 1}. </span> {challenge.name}
        </h1>
        <div className="flag_type flex items-center"> # {challenge.category}</div>
        <div className="flag_difficulty flex items-center justify-center" style={styleLevel}>
          {challenge.difficulty[0].toUpperCase() + challenge.difficulty.substr(1)}
        </div>
        <button
          onClick={dropdownShow}
          className="flex justify-center items-center border p-2 flag_btn justify-self-end"
        >
          Details
          {isDropdown ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
            </svg>
          )}
        </button>
      </div>
      <Dropdown dropdownRef={dropdownRef} challenge={challenge} />
      {length !== index + 1 && <div className="horizon"></div>}
    </div>
  );
};

export default ChallengeItem;
