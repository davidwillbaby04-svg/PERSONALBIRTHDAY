import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

import "./Home.css";

import Gallery from "../../components/Gallery/Gallery";
import ChapterLayout from "../../components/ChapterLayout/ChapterLayout";
import BirthdayLetter from "../../components/BirthdayLetter/BirthdayLetter";
import FloatingPetals from "../../components/FloatingPetals/FloatingPetals";
import BackgroundManager from "../../components/BackgroundManager/BackgroundManager";


function Home() {

  const [chapter, setChapter] = useState(0);

  return (
    <>

      {/* =========================
          DYNAMIC BACKGROUND
          ========================= */}

      <BackgroundManager chapter={chapter} />


      {/* =========================
          FLOATING PETALS
          ========================= */}

      <FloatingPetals />


      {/* =========================
          MAIN HOME
          ========================= */}

      <section className="home">

        <AnimatePresence mode="wait">

          <motion.div
            key={chapter}

            initial={{
              opacity: 0,
              x: 80,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            exit={{
              opacity: 0,
              x: -80,
            }}

            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          >


            {/* =========================
                CHAPTER 0 — OPENING
                ========================= */}

            {chapter === 0 && (

              <motion.div
                className="intro"

                initial={{
                  opacity: 0,
                }}

                animate={{
                  opacity: 1,
                }}

                exit={{
                  opacity: 0,
                }}

                transition={{
                  duration: 1,
                }}
              >

                {/* =========================
                    MAGICAL STAR BUTTON
                    ========================= */}

                <motion.div
                  className="magic-star-button"

                  role="button"

                  tabIndex={0}

                  aria-label="Begin Niruverse"

                  animate={{
                    scale: [1, 1.06, 1],
                  }}

                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}

                  whileHover={{
                    scale: 1.12,
                  }}

                  whileTap={{
                    scale: 0.92,
                  }}

                  onClick={() => setChapter(1)}

                  onKeyDown={(event) => {

                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {

                      event.preventDefault();

                      setChapter(1);

                    }

                  }}
                >

                  {/* OUTER GLOW */}

                  <motion.div
                    className="star-glow"

                    animate={{
                      scale: [0.9, 1.15, 0.9],
                      opacity: [0.45, 0.8, 0.45],
                    }}

                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />


                  {/* ORBITING STAR 1 */}

                  <motion.span
                    className="orbit-star orbit-star-one"

                    animate={{
                      rotate: 360,
                    }}

                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ✦
                  </motion.span>


                  {/* ORBITING STAR 2 */}

                  <motion.span
                    className="orbit-star orbit-star-two"

                    animate={{
                      rotate: -360,
                    }}

                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ✧
                  </motion.span>


                  {/* MAIN STAR */}

                  <motion.div
                    className="main-star"

                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}

                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaStar />
                  </motion.div>


                  {/* SMALL SPARKLES */}

                  <span className="sparkle sparkle-one">
                    ✦
                  </span>

                  <span className="sparkle sparkle-two">
                    ✧
                  </span>

                  <span className="sparkle sparkle-three">
                    ✦
                  </span>

                  <span className="sparkle sparkle-four">
                    ·
                  </span>

                </motion.div>


                {/* =========================
                    WELCOME TITLE
                    ========================= */}

                <motion.h1
                  className="intro-title"

                  initial={{
                    opacity: 0,
                    y: 15,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: 0.35,
                    duration: 0.7,
                  }}
                >
                  Welcome to NIRUVERSE 🌸
                </motion.h1>


                {/* =========================
                    SUBTITLE
                    ========================= */}

                <motion.p
                  className="intro-subtitle"

                  initial={{
                    opacity: 0,
                    y: 10,
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
                  A little universe made especially for you.
                </motion.p>


                {/* =========================
                    CLICK HINT
                    ========================= */}

                <motion.p
                  className="intro-hint"

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
                  Tap the star to begin ✨
                </motion.p>

              </motion.div>

            )}


            {/* =========================
                CHAPTER 1 — GALLERY
                ========================= */}

            {chapter === 1 && (

              <ChapterLayout
                showPrevious={false}
                onNext={() => setChapter(2)}
              >

                <Gallery />

              </ChapterLayout>

            )}


            {/* =========================
                CHAPTER 2 — BIRTHDAY LETTER
                ========================= */}

            {chapter === 2 && (

              <ChapterLayout
                title="A Letter From My Heart 💌"
                onPrevious={() => setChapter(1)}
                showNext={false}
              >

                <BirthdayLetter />

              </ChapterLayout>

            )}

          </motion.div>

        </AnimatePresence>

      </section>

    </>
  );
}


export default Home;