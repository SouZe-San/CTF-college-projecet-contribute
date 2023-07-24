// "use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useContext } from "react";

// Server Actions
import { flagSubmit, spawnCall } from "@/actions/challenges";
import "../../styles/challenges/dropdown.scss";
import Timer from "./Timer";
const Dropdown = ({ dropdownRef, challenge }) => {
  // State Variables
  const [isStart, setIsStart] = useState(false);
  const [flag, setFlag] = useState("");
  const [connString, setConnString] = useState("");
  const [point, setPoint] = useState(10);

  // Function For spawn
  const challengeId = challenge.challengeId;
  //* Spawn Timer For 30 minuit
  useEffect(() => {
    const timerDuration = 30 * 60 * 1000; // 30 minutes in milliseconds

    if (isStart) {
      const spawnTimer = setTimeout(async () => {
        // TODO: Call Await Function for STOP spawn
        await spawnCall(challengeId);
        setIsStart(false);
        setConnString("");
        alert("Timer completed!");
      }, timerDuration);

      return () => {
        clearInterval(spawnTimer);
      };
    } else {
      setConnString("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStart]);

  // Set Point According Difficulty Level
  useEffect(() => {
    if (challenge.difficulty == "easy") {
      setPoint(5);
    } else if (challenge.difficulty == "hard") {
      setPoint(20);
    } else {
      setPoint(10);
    }
  }, [challenge.difficulty]);

  //*  Send spawn Request
  const spawnStart = async (e) => {
    e.preventDefault();
    setIsStart(!isStart);
    if (!isStart) {
      console.log("spawnStart :");
      // TODO: Call Await Function for spawn
      const spawn = await spawnCall(challengeId);
      const host = spawn.connectionInfo.host;
      const port = spawn.connectionInfo.port;
      const string = `nc ${host} ${port}`;
      setConnString(string);
    } else {
      await spawnCall(challengeId);
      setConnString("");
    }
  };

  //* Flag Submit -
  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log("flagSubmit", challengeId);
    console.log("flagSubmit", flag);
    if (flag === "") return alert("Please Enter Flag");
    // TODO:CALL Await Function for Submit Flag
    const response = await flagSubmit(challengeId, flag);
    console.log("flagSubmit :", response);
    setFlag("");
  };

  //* Async Function for Download Attachment
  const attachFileDownload = async (e, fileUrl) => {
    console.log("attachFileDownload", fileUrl);
    e.preventDefault();
    fileUrl = "https://images.pexels.com/photos/372748/pexels-photo-372748.jpeg";
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = new Date().getTime(); // Specify the desired file name
      link.click();

      URL.revokeObjectURL(url); // Clean up the object URL
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <div className="details flex flex-col py-4 px-12 lg:px-20" ref={dropdownRef}>
      <div className="about py-2 flex flex-wrap justify-between">
        {/* Point Space of That Flag */}
        <div className="">
          <h4 className="italic">
            <span className="DropDown_headline">Point :</span> {point}
          </h4>
        </div>
        {/* Spawn Button for that Flag */}
        <div className="btn flex items-center justify-between w-[9.4rem]">
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
              <div className="timer_section">{isStart ? <Timer /> : "00:00"}</div>
            </>
          )}
        </div>
      </div>
      {/* Info About Flag */}
      <div className="instruction">
        <h2 className="DropDown_headline">Description </h2>

        {challenge.description.map((line, index) => {
          return (
            <p className="line" key={index}>
              {line}
            </p>
          );
        })}

        {/* --------- IF it spawnable then show String or Show Attachment btn */}
        {challenge.spawnable ? (
          <div className="spawn">
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"
                fill="rgba(200,200,200,0.86)"
              ></path>
            </svg>
            {isStart && <div className="connection_string select-all">{connString}</div>}
          </div>
        ) : (
          <button
            className="attachBtn flex "
            onClick={(e) => attachFileDownload(e, challenge.attatchmentURL)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z"></path>
            </svg>{" "}
            <span>Use Me</span>
          </button>
        )}
      </div>
      {/* Text area for writing Flag */}
      <div className="textarea">
        <h2 className="DropDown_headline"> Tell Us Your Flag</h2>
        <form className="" action="post">
          <div className="flex md:flex-row  flex-col items-end">
            <label htmlFor="ans" className=" w-4/5 lg:w-3/5">
              <textarea
                name="ans"
                id="ans-body"
                placeholder="Enter Flag..."
                value={flag}
                onChange={(e) => {
                  setFlag(e.target.value);
                }}
                rows="1"
              ></textarea>
            </label>
            <button className="submit_btn" type="submit" disabled={false} onClick={handelSubmit}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.382 3C12.7607 3 13.107 3.214 13.2764 3.55279L14 5H20C20.5523 5 21 5.44772 21 6V17C21 17.5523 20.5523 18 20 18H13.618C13.2393 18 12.893 17.786 12.7236 17.4472L12 16H5V22H3V3H12.382ZM11.7639 5H5V14H13.2361L14.2361 16H19V7H12.7639L11.7639 5Z"
                  fill="rgba(249,249,249,1)"
                ></path>
              </svg>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dropdown;
