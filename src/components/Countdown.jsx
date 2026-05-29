import { useEffect, useState } from "react";

const EVENT_MONTH = 5; // June (0-based)
const START_DAY = 8;
const END_DAY = 10;

const getEventStatus = (date) => {
  const year = date.getFullYear();

  const start = new Date(year, EVENT_MONTH, START_DAY);
  const end = new Date(year, EVENT_MONTH, END_DAY);
  const after = new Date(year, EVENT_MONTH, 10);

  if (date >= start && date <= end) {
    return "LIVE";
  }

  if (date >= after) {
    return "ENDED";
  }

  return "UPCOMING";
};

const getTargetDate = () => {
  const now = new Date();
  let target = new Date(now.getFullYear(), EVENT_MONTH, START_DAY);

  if (now > target) {
    target = new Date(now.getFullYear() + 1, EVENT_MONTH, START_DAY);
  }

  return target;
};

const format = (value) => String(value).padStart(2, "0");

const calculateTimeLeft = () => {
  const difference = +getTargetDate() - +new Date();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [status, setStatus] = useState(getEventStatus(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setStatus(getEventStatus(new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (status === "LIVE") {
    return (
      <p className="text-2xl font-bold text-green-600">
        🎉 Event is happening now
      </p>
    );
  }

  if (status === "ENDED") {
    return (
      <p className="text-2xl font-bold text-red-600">
        Event already took place
      </p>
    );
  }

  if (!timeLeft) return null;

  return (
    <div className="flex items-center gap-6 text-center font-jost text-green100">
      <div>
        <p className="text-4xl md:text-5xl font-bold">{format(timeLeft.days)}</p>
        <span className="text-[10px] font-medium">Days</span>
      </div>

      <div>
        <p className="text-4xl md:text-5xl font-bold">{format(timeLeft.hours)}</p>
        <span className="text-[10px] font-medium">Hours</span>
      </div>

      <div>
        <p className="text-4xl md:text-5xl font-bold">{format(timeLeft.minutes)}</p>
        <span className="text-[10px] font-medium">Mins</span>
      </div>

      <div>
        <p className="text-4xl md:text-5xl font-bold">{format(timeLeft.seconds)}</p>
        <span className="text-[10px] font-medium">Secs</span>
      </div>
    </div>
  );
}