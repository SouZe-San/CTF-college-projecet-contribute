"use client";
import { useEffect, useMemo, useState } from "react";
import "@/components/landing-page-comps/timer/timerSectionStyles.scss"
import "@/components/landing-page-comps/timer/timerLogicStyles.scss"

const Timer = () => (
  <div className="timerContainer">
    <div className="timerWrapper">
      <h1 className="header sectionTitle">Competition starts in</h1>
      <TimerLogic deadline="August, 11, 2023" />
    </div>
  </div>
);

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const TimerLogic = ({ deadline = new Date().toString() }) => {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    <div className="timer">
      {Object.entries({
        Days: time / DAY,
        Hours: (time / HOUR) % 24,
        Minutes: (time / MINUTE) % 60,
        Seconds: (time / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label} className="col-4">
          <div className="boxy">
            <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
            <span className="text">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Timer;
