import React from "react";
import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const sectionRef = useRef(null);
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  const formatTime = (date) => {
    let hours = date.getHours() % 12 || 12; // Convert 24-hour to 12-hour format
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container">
      <div className="clock-container">
        {mounted && <div className="clock">{formatTime(time)}</div>}
        <style jsx>{`
          @font-face {
            font-family: digital;
            src: url("/fonts/digital.ttf") format("truetype");
          }
          .clock-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .clock {
            font-size: 4rem;
            font-weight: bold;
            color: #00ffcc;
            font-family: digital;
            text-shadow: 2px 2px 10px rgba(0, 255, 204, 0.8);
          }
        `}</style>
      </div>
      <div className={"text-center"}>
        <style jsx>{`
          .hero-heading {
            font-size: 40px;
            max-width: 700px;
            text-align: center;
          }
        `}</style>
        <h1 className="hero-heading">
          Every minutes a person think's to create a brand
        </h1>
      </div>
    </div>
  );
};

export default Timer;
