import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
// import CircularProgress from "@material-ui/core/CircularProgress";
import { CircularProgress } from "react-circular-gradient-progress";
function Timer({ seconds }) {
  const [remsec, setremsec] = useState(seconds);

  useEffect(() => {
    if (remsec > 0) {
      const intervalId = setInterval(() => {
        setremsec((seconds) => seconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [remsec]);

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
        color="#06D6A0"
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
        {timeString}
      </div>
    </div>
  );
}

export default Timer;
