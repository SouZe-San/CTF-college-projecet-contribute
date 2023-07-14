/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import "../../styles/challenges/dropdown.scss";

const Dropdown = ({ dropdownRef, challenge }) => {
  const [isStart, setIsStart] = useState(false);
  const [isEasy, setIsEasy] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isHard, setIsHard] = useState(false);

  useEffect(() => {
    if (isStart)
      setTimeout(() => {
        setIsStart(false);
      }, 3000);
  }, [isStart]);

  useEffect(() => {
    if (challenge.difficulty == "easy") {
      setIsEasy(true);
    } else if (challenge.difficulty == "hard") {
      setIsHard(true);
    } else {
      setIsMedium(true);
    }
  }, [challenge.difficulty]);

  const spawnStart = () => {
    setIsStart(!isStart);
  };
  return (
    <div className="details flex flex-col py-4 px-12 lg:px-20" ref={dropdownRef}>
      <div className="about py-2 flex flex-wrap justify-between">
        <div className="">
          <h4 className="italic">
            <span>Point :</span> {(isEasy && 5) || (isMedium && 10) || (isHard && 20)}
          </h4>
        </div>
        <div className="btn">
          {challenge.spawnable && (
            <>
              <button className="spawnBtn flex" onClick={spawnStart}>
                {isStart ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z" fill="rgba(255,255,255,1)"></path>
                    </svg>{" "}
                    Stop
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M9 8.48216V15.518L15.0307 12.0001L9 8.48216ZM7.75194 5.43872L18.2596 11.5682C18.4981 11.7073 18.5787 12.0135 18.4396 12.252C18.3961 12.3265 18.3341 12.3885 18.2596 12.432L7.75194 18.5615C7.51341 18.7006 7.20725 18.62 7.06811 18.3815C7.0235 18.305 7 18.2181 7 18.1296V5.87061C7 5.59446 7.22386 5.37061 7.5 5.37061C7.58853 5.37061 7.67547 5.39411 7.75194 5.43872Z"
                        fill="rgba(244,244,244,1)"
                      ></path>
                    </svg>{" "}
                    Start
                  </>
                )}
              </button>
            </>
          )}
        </div>
      </div>
      <div className="instruction">
        <h2>Description </h2>

        {challenge.description.map((line, index) => {
          return (
            <p className="line" key={index}>
              {line}
            </p>
          );
        })}

        <button className="attachBtn flex ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z"
              // fill="rgba(241,241,241,1)"
            ></path>
          </svg>{" "}
          <span>Use Me</span>
        </button>
      </div>
      <div className="textarea">
        <h2> write your strategy for this Flag</h2>
        <form className="">
          <div className="flex md:flex-row  flex-col items-end">
            <label htmlFor="ans" className=" w-4/5 lg:w-3/5">
              <textarea
                name="ans"
                id="ans-body"
                placeholder="Enter Flag..."
                // onChange={(e) => {
                //   setQuestionBody(e.target.value);
                // }}
                // cols="30"
                rows="1"
                // onKeyPress={handleEnter}
              ></textarea>
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dropdown;
