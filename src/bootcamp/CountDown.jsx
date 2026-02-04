import React, { useState, useEffect } from "react";

const Countdown = () => {
  const deadline = "2024-09-16T00:00:00";
  const calculateTimeLeft = () => {
    const difference = +new Date(deadline) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span className="font-bold" key={interval}>
        {timeLeft[interval]}  {interval}{" "}<br/>
      </span>
    );
  });

  return (
    <div className="w-auto">
        <p>The 2nd Intake is in</p>
      <p className="text-3xl whitespace-nowrap text-theme_color uppercase">{timerComponents.length ? (
        timerComponents
      ) : (
        <span>Intake is Ongoing</span>
      )}</p>
    </div>
  );
};

export default Countdown;
