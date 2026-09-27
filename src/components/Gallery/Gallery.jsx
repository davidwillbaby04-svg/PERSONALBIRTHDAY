import { useState } from "react";
import { motion } from "framer-motion";

import "./Gallery.css";
import { photos } from "../../data/photos";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="gallery">

      {/* =========================
          GALLERY INTRO
          ========================= */}

      <motion.div
        className="gallery-intro"

        initial={{
          opacity: 0,
          y: 25,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >

        {/* Eyebrow */}

        <motion.span
          className="gallery-eyebrow"

          initial={{
            opacity: 0,
            letterSpacing: "6px",
          }}

          animate={{
            opacity: 1,
            letterSpacing: "3px",
          }}

          transition={{
            duration: 0.9,
            delay: 0.1,
          }}
        >
          NIRUVERSE • MEMORY ARCHIVE
        </motion.span>


        {/* Main Heading */}

        <h2>
          Little moments
          <span>
            that somehow became memories ♡
          </span>
        </h2>


        {/* Decorative Divider */}

        <div className="gallery-divider">

          <span>✦</span>

          <i></i>

          <span>✦</span>

        </div>


        {/* Description */}

        <p>
          A few frames from our little universe.
        </p>

      </motion.div>


      {/* =========================
          PREMIUM PHOTO GRID
          ========================= */}

      <div className="gallery-grid">

        {photos.map((photo, i) => {

          const isBirthday =
            photo.type === "birthday";

          return (

            <motion.div

              className={`photo-card ${
                isBirthday
                  ? "birthday-photo-card"
                  : ""
              }`}

              key={photo.id}

              role="button"

              tabIndex={0}

              aria-label={`Open ${photo.title}`}

              onClick={() => setIndex(i)}

              onKeyDown={(event) => {

                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {

                  event.preventDefault();

                  setIndex(i);

                }

              }}

              initial={{
                opacity: 0,
                y: 40,
                scale: 0.92,
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: "easeOut",
              }}

              whileHover={{
                y: -12,
                scale: 1.035,
                rotate: 0,
                zIndex: 10,
              }}

              whileTap={{
                scale: 0.97,
              }}

            >

              {/* =========================
                  DECORATIVE TAPE
                  ========================= */}

              <div className="photo-tape" />


              {/* =========================
                  PHOTO
                  ========================= */}

              <div className="photo-wrapper">

                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                />


                {/* Light reflection */}

                <div className="photo-shine" />


                {/* Birthday badge */}

                {isBirthday && (

                  <motion.div
                    className="birthday-badge"

                    animate={{
                      rotate: [0, -5, 5, 0],
                      scale: [1, 1.08, 1],
                    }}

                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🎂
                  </motion.div>

                )}

              </div>


              {/* =========================
                  PHOTO CAPTION
                  ========================= */}

              <div className="photo-caption">

                <h3>
                  {photo.title}
                </h3>


                {photo.caption && (

                  <p>
                    {photo.caption}
                  </p>

                )}

              </div>

            </motion.div>

          );

        })}

      </div>


      {/* =========================
          BOTTOM MESSAGE
          ========================= */}

      <motion.div
        className="gallery-bottom"

        initial={{
          opacity: 0,
          y: 15,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
          amount: 0.4,
        }}

        transition={{
          duration: 0.8,
        }}
      >

        <span>✦</span>

        <p>
          Different moments.
          <br className="mobile-break" />
          Same crazy little universe. ♡
        </p>

        <span>✦</span>

      </motion.div>


      {/* =========================
          LIGHTBOX
          ========================= */}

      <Lightbox

        open={index >= 0}

        close={() => setIndex(-1)}

        index={index}

        slides={photos.map((photo) => ({

          src: photo.image,

          alt: photo.title,

        }))}

      />

    </section>
  );
}

export default Gallery;