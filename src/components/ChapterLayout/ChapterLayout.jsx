import { motion } from "framer-motion";
import "./ChapterLayout.css";

function ChapterLayout({
  title,
  children,
  onNext,
  onPrevious,
  showPrevious = true,
  showNext = true,
}) {
  return (
    <motion.section
      className="chapter-layout"
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {/* =========================
          CHAPTER TITLE
          ========================= */}

      {title && (
        <motion.h1
          className="chapter-title"
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.6,
          }}
        >
          {title}
        </motion.h1>
      )}

      {/* =========================
          CONTENT
          ========================= */}

      <motion.div
        className="chapter-content"
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
      >
        {children}
      </motion.div>

      {/* =========================
          NAVIGATION
          ========================= */}

      <div className="chapter-navigation">

        {/* Previous */}

        <div className="navigation-side navigation-left">
          {showPrevious && onPrevious && (
            <motion.button
              type="button"
              className="chapter-button previous-button"
              onClick={onPrevious}
              whileHover={{
                scale: 1.05,
                x: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <span>←</span>
              <span>Previous</span>
            </motion.button>
          )}
        </div>

        {/* Next */}

        <div className="navigation-side navigation-right">
          {showNext && onNext && (
            <motion.button
              type="button"
              className="chapter-button next-button"
              onClick={onNext}
              whileHover={{
                scale: 1.05,
                x: 2,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <span>Next</span>
              <span>→</span>
            </motion.button>
          )}
        </div>

      </div>
    </motion.section>
  );
}

export default ChapterLayout;