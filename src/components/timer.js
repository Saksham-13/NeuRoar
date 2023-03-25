import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
import { CircularProgress } from "react-circular-gradient-progress";

function Timer({ seconds }) {
  const [remsec, setremsec] = useState(seconds);
  const [isPaused, setIsPaused] = useState(true);
  const [col, setCol] = useState("##2596be");

  useEffect(() => {
    if (remsec > 0 && !isPaused) {
      const intervalId = setInterval(() => {
        setremsec((seconds) => seconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [remsec, isPaused]);

  const handlePause = () => {
    setCol("#2a2b2a")
    setIsPaused(true);
  };

  const handleResume = () => {
    setCol("#06D6A0")
    setIsPaused(false);
  };

  const hours = Math.floor(remsec / 3600);
  const minutes = Math.floor((remsec % 3600) / 60);
  const secondsLeft = remsec % 60;

  const progress = (remsec / seconds) * 100;

  const timeString = `${hours
    .toString()
    .padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;

  return (
    <div
      className="justify-center items-center grid"
      style={{ position: "relative", width: "200px", height: "200px" }}
    >
      <CircularProgress
        variant="determinate"
        progress={progress}
        color={col}
        emptyColor="lightgrey"
        size={200}
        thickness={4}
      />
      <div
        className="text-center text-white font-mono"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        {isPaused ? (
        <button onClick={handleResume}> {timeString}</button>
      ) : (
        <button onClick={handlePause}> {timeString}</button>
      )}
       
      </div>
      
    </div>
  );
}

export default Timer;
