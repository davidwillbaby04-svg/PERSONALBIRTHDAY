import { motion, AnimatePresence } from "framer-motion";

import { chapterBackgrounds } from "../../data/chapterBackgrounds";

import "./BackgroundManager.css";


function BackgroundManager({ chapter }) {

  const background = chapterBackgrounds[chapter];


  return (
    <div className="background-manager">

      <AnimatePresence mode="sync">

        {background && (

          <motion.div
            key={chapter}
            className="background-layer"

            style={{
              backgroundImage: `url(${background})`,
            }}

            initial={{
              opacity: 0,
              scale: 1.04,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              scale: 1.04,
            }}

            transition={{
              opacity: {
                duration: 0.9,
                ease: "easeInOut",
              },

              scale: {
                duration: 1.4,
                ease: "easeOut",
              },
            }}
          />

        )}

      </AnimatePresence>


      {/* Soft readability overlay */}

      <div className="background-overlay" />

    </div>
  );
}


export default BackgroundManager;