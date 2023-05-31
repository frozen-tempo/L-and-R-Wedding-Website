import React, { useEffect, useState } from "react";

export default function Countdown() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const target = new Date("08/02/2023 00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <h3 className="countdown-title">Countdown Until The Big Day!</h3>

      <div className="countdown-timer">
        <div className="timer-segment">
          <p className="time">{days}</p>
          <p className="label">Days</p>
        </div>

        <div className="timer-segment">
          <p className="time">{hours}</p>
          <p className="label">Hours</p>
        </div>

        <div className="timer-segment">
          <p className="time">{minutes}</p>
          <p className="label">Minutes</p>
        </div>

        <div className="timer-segment">
          <p className="time">{seconds}</p>
          <p className="label">Seconds</p>
        </div>
      </div>
    </div>
  );
}
