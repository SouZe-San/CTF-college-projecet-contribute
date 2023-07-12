"use client"
import TimerLogic from "./timerLogic";

const Timer = () => (
    <div className="app">
      <div className="container">
        <h1 className="header">Competition starts in</h1>
        <TimerLogic deadline="August, 11, 2023" />
      </div>
    </div>
  );

export default Timer;
