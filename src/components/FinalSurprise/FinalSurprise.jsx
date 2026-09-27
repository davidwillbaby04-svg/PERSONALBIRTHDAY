import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGift,
  FaHeart,
  FaStar,
} from "react-icons/fa";

import "./FinalSurprise.css";

function FinalSurprise() {
  const [opened, setOpened] = useState(false);

  const openSurprise = () => {
    setOpened(true);
  };

  return (
    <section className="final-surprise">

      {/* =========================
          CLOSED GIFT
          ========================= */}

      <AnimatePresence mode="wait">

        {!opened && (
          <motion.div
            key="closed"
            className="surprise-intro"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <motion.div
              className="gift-box"
              animate={{
                y: [0, -10, 0],
                rotate: [0, -2, 2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.94,
              }}
              onClick={openSurprise}
            >
              <FaGift />
            </motion.div>


            <h2>
              One Last Little Surprise 🎁
            </h2>

            <p>
              You made it all the way here...
            </p>

            <p>
              But Niruverse has one last thing for you.
            </p>


            <motion.button
              className="open-gift-button"
              onClick={openSurprise}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Open Your Surprise ✨
            </motion.button>

          </motion.div>
        )}


        {/* =========================
            SURPRISE REVEAL
            ========================= */}

        {opened && (
          <motion.div
            key="opened"
            className="surprise-reveal"
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "backOut",
            }}
          >

            {/* Floating stars */}

            <motion.div
              className="surprise-star star-one"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaStar />
            </motion.div>


            <motion.div
              className="surprise-star star-two"
              animate={{
                y: [0, 12, 0],
                rotate: [0, -15, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaStar />
            </motion.div>


            {/* Main heart */}

            <motion.div
              className="surprise-heart"
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaHeart />
            </motion.div>


            {/* Heading */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.6,
              }}
            >
              Happy Birthday, Niru! 🎂
            </motion.h2>


            <motion.h3
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
            >
              Dear Sister 🌸
            </motion.h3>


            {/* Message */}

            <motion.div
              className="surprise-messages"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.7,
              }}
            >

              <p className="surprise-message">
                May this new chapter bring you
                countless reasons to smile,
                beautiful memories to keep,
                and plenty of moments that make
                you laugh for absolutely no reason.
              </p>

              <p className="surprise-message">
                Keep being the wonderfully
                unpredictable, doll-and-teddy-loving
                Niru that everyone knows. 🧸
              </p>

              <p className="surprise-message">
                And never forget that somewhere
                along the way, you became much more
                than just a friend.
              </p>

            </motion.div>


            <div className="surprise-divider">
              ✦ 🌸 ✦
            </div>


            <motion.p
              className="final-wish"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.9,
                duration: 0.7,
              }}
            >
              Here's to another wonderful year
              of being you. 💗
            </motion.p>


            <motion.div
              className="surprise-signature"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.1,
                duration: 0.7,
              }}
            >
              — Your chosen brother 🌸
            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}

export default FinalSurprise;