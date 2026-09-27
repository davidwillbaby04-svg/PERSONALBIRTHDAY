import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./StoryBook.css";

function StoryBook({ onNext }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const memories = [
    {
      id: 1,
      emoji: "🧸",
      title: "Teddy Bears",
      message:
        "Something about teddy bears will always remind me of you. Maybe because they somehow match your cute and slightly unpredictable personality. 😂",
    },

    {
      id: 2,
      emoji: "🎀",
      title: "Dolls",
      message:
        "Dolls are definitely one of those little things that instantly remind me of you. Your love for them is basically impossible to miss. 🌸",
    },

    {
      id: 3,
      emoji: "😂",
      title: "Your Laugh",
      message:
        "You have this amazing ability to laugh at almost anything. Sometimes the situation isn't even that funny, but somehow you're already laughing. 😂",
    },

    {
      id: 4,
      emoji: "🌸",
      title: "Your Personality",
      message:
        "You're one of those people who can make an ordinary moment feel memorable without even trying. And honestly, that's pretty special.",
    },

    {
      id: 5,
      emoji: "✨",
      title: "Inside Jokes",
      message:
        "There are way too many inside jokes to fit on one little card. Some things are better left unexplained because they're funny only to us. 😂",
    },

    {
      id: 6,
      emoji: "💗",
      title: "A Special Place",
      message:
        "Some people simply become an important part of your life without planning it. Somewhere along the way, you became my chosen sister. 🌸",
    },
  ];

  return (
    <section className="things-page">

      {/* =========================
          HEADING
          ========================= */}

      <motion.div
        className="things-heading"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <h2>
          Things That Remind Me of You 🧸
        </h2>

        <p>
          Little things have a funny way of bringing certain people to mind.
        </p>
      </motion.div>


      {/* =========================
          MEMORY CARDS
          ========================= */}

      <div className="things-grid">

        {memories.map((item, index) => (

          <motion.button
            type="button"
            className={`thing-card ${
              selectedCard === item.id
                ? "thing-card-active"
                : ""
            }`}
            key={item.id}
            onClick={() =>
              setSelectedCard(
                selectedCard === item.id
                  ? null
                  : item.id
              )
            }
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              y: -7,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >

            <div className="thing-icon">
              {item.emoji}
            </div>

            <h3>
              {item.title}
            </h3>

            <AnimatePresence mode="wait">

              {selectedCard === item.id ? (

                <motion.p
                  key="message"
                  className="thing-message"
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {item.message}
                </motion.p>

              ) : (

                <motion.span
                  key="hint"
                  className="thing-hint"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  Tap to discover ✨
                </motion.span>

              )}

            </AnimatePresence>

          </motion.button>

        ))}

      </div>


      {/* =========================
          CONTINUE
          ========================= */}

      {onNext && (
        <motion.button
          type="button"
          className="things-next-button"
          onClick={onNext}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          Continue to the Memories →
        </motion.button>
      )}

    </section>
  );
}

export default StoryBook;