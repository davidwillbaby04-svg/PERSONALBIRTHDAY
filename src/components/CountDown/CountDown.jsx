import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBirthdayCake } from "react-icons/fa";

import "./Countdown.css";

function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <motion.div
        className="birthday-message"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        🎉 Happy Birthday, Niru! 🎂
      </motion.div>
    );
  }

  const timeUnits = [
    {
      value: timeLeft.days,
      label: "Days",
    },
    {
      value: timeLeft.hours,
      label: "Hours",
    },
    {
      value: timeLeft.minutes,
      label: "Minutes",
    },
    {
      value: timeLeft.seconds,
      label: "Seconds",
    },
  ];

  return (
    <section className="countdown-section">

      {/* Main heading */}

      <motion.h2
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        Waiting for Your Day
      </motion.h2>


      {/* Decorative divider */}

      <motion.div
        className="countdown-divider"
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
      >
        <span></span>
        <FaBirthdayCake />
        <span></span>
      </motion.div>


      {/* Description */}

      <motion.p
        className="countdown-text"
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.25,
        }}
      >
        Some days are ordinary...
        <br />
        But one day every year reminds us
        <br />
        how grateful we are that you were born.
      </motion.p>


      {/* Countdown cards */}

      <div className="countdown">

        {timeUnits.map((unit, index) => (
          <motion.div
            className="time-card"
            key={unit.label}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3 + index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
          >

            <h1>
              {String(unit.value).padStart(2, "0")}
            </h1>

            <span>
              {unit.label}
            </span>

            <div className="time-card-line">
              —
            </div>

            <div className="time-card-flower">
              🌸
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Countdown;