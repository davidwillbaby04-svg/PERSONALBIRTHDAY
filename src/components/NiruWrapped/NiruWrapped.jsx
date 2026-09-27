import { motion } from "framer-motion";
import {
  FaHeart,
  FaStar,
  FaLaughBeam,
  FaCrown,
  FaGift,
} from "react-icons/fa";

import "./NiruWrapped.css";

function NiruWrapped({ onNext }) {
  const cards = [
    {
      icon: <FaCrown />,
      title: "Drama Queen",
      value: "100%",
      text: "Because somehow you always make an ordinary moment memorable.",
    },
    {
      icon: "🧸",
      title: "Teddy Bear Energy",
      value: "∞",
      text: "Dolls, teddy bears and maximum cute-energy detected. 🧸",
    },
    {
      icon: <FaLaughBeam />,
      title: "Random Laughs",
      value: "Unlimited",
      text: "Professional at finding something funny when nobody saw it coming.",
    },
    {
      icon: <FaStar />,
      title: "Chaos Level",
      value: "Iconic",
      text: "A little unpredictable. A lot unforgettable.",
    },
    {
      icon: <FaHeart />,
      title: "Sister Status",
      value: "Unlocked",
      text: "Not by blood. Still somehow family.",
    },
    {
      icon: <FaGift />,
      title: "Overall Niru Rating",
      value: "∞ / 10",
      text: "The rating system simply stopped working.",
    },
  ];

  return (
    <section className="niru-wrapped">

      {/* =========================
          HEADER
          ========================= */}

      <motion.div
        className="wrapped-header"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >

        <div className="wrapped-small-title">
          NIRUVERSE • 2026 EDITION
        </div>

        <h1>
          Niru's
          <span> Unofficial </span>
          Wrapped
        </h1>

        <p>
          A completely scientific analysis of one very
          unpredictable human. ✨
        </p>

      </motion.div>


      {/* =========================
          HERO CARD
          ========================= */}

      <motion.div
        className="wrapped-hero"
        initial={{
          opacity: 0,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.7,
        }}
      >

        <div className="hero-star">
          <FaStar />
        </div>

        <div className="hero-label">
          YOUR 2026 VIBE
        </div>

        <h2>
          100% Niru Energy
        </h2>

        <p>
          Cute enough to be suspicious.
          Chaotic enough to be iconic.
        </p>

        <div className="energy-bar">
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              delay: 0.8,
              duration: 1.2,
              ease: "easeOut",
            }}
          />
        </div>

        <span className="energy-text">
          ENERGY LEVEL: MAXIMUM
        </span>

      </motion.div>


      {/* =========================
          STATS
          ========================= */}

      <div className="wrapped-grid">

        {cards.map((card, index) => (

          <motion.div
            className="wrapped-card"
            key={card.title}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35 + index * 0.1,
              duration: 0.5,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
          >

            <div className="wrapped-card-icon">
              {card.icon}
            </div>

            <div className="wrapped-card-title">
              {card.title}
            </div>

            <div className="wrapped-card-value">
              {card.value}
            </div>

            <p>
              {card.text}
            </p>

          </motion.div>

        ))}

      </div>


      {/* =========================
          FINAL STATEMENT
          ========================= */}

      <motion.div
        className="wrapped-final"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.7,
        }}
      >

        <div className="final-line">
          ✦ ✦ ✦
        </div>

        <h2>
          Some people are a phase.
        </h2>

        <h3>
          You're a whole era.
        </h3>

        <p>
          — NIRUVERSE certified 🌸
        </p>

      </motion.div>


      {/* =========================
          NEXT BUTTON
          ========================= */}

      {onNext && (
        <motion.button
          className="wrapped-next-button"
          onClick={onNext}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          Continue the journey →
        </motion.button>
      )}

    </section>
  );
}

export default NiruWrapped;