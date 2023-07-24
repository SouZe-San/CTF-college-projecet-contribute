"use client";
import { useEffect, useState } from "react";
const Timer = () => {
  const timerDuration = 30 * 60; // 30 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(timerDuration);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prevTime) => prevTime - 1);
      } else {
        alert("Timer completed!");
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timeRemaining]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return <div>{formatTime(timeRemaining)}</div>;
};

export default Timer;
