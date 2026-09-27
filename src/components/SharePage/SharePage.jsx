import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaLink,
  FaCheck,
  FaRedo,
} from "react-icons/fa";

import "./SharePage.css";

function SharePage() {
  const [copied, setCopied] = useState(false);

  const pageUrl = window.location.href;

  const shareMessage =
    "A little birthday surprise made especially for Niru 🌸🎂";

  /* =========================
     WHATSAPP
     ========================= */

  const handleWhatsApp = () => {
    const whatsappUrl =
      `https://wa.me/?text=${encodeURIComponent(
        `${shareMessage}\n${pageUrl}`
      )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };


  /* =========================
     INSTAGRAM
     ========================= */

  const handleInstagram = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);

      alert(
        "The page link has been copied. You can now paste it into Instagram."
      );
    } catch {
      alert(
        "Please copy the page link manually and share it on Instagram."
      );
    }
  };


  /* =========================
     COPY LINK
     ========================= */

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      alert(
        "Unable to copy the link. Please copy it manually."
      );
    }
  };


  /* =========================
     RESTART
     ========================= */

  const handleRestart = () => {
    window.location.reload();
  };


  return (
    <section className="share-page">

      <motion.div
        className="share-card"
        initial={{
          opacity: 0,
          y: 35,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >

        {/* Decorative flower */}

        <motion.div
          className="share-flower"
          animate={{
            rotate: [0, 5, -5, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🌸
        </motion.div>


        {/* Heading */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 10,
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
          Until We Meet Again 🌸
        </motion.h2>


        <p className="share-main-text">
          And that's the end of this little journey.
        </p>


        <p className="share-sub-text">
          I hope this tiny corner of the internet
          gave you at least one reason to smile. 💗
        </p>


        {/* Divider */}

        <div className="share-divider">
          ✦ 🌸 ✦
        </div>


        <p className="share-question">
          Want to keep this little memory?
        </p>


        {/* =========================
            SHARE BUTTONS
            ========================= */}

        <div className="share-buttons">

          {/* WhatsApp */}

          <motion.button
            className="share-button whatsapp-button"
            onClick={handleWhatsApp}
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <FaWhatsapp />

            <span>
              Share on WhatsApp
            </span>
          </motion.button>


          {/* Instagram */}

          <motion.button
            className="share-button instagram-button"
            onClick={handleInstagram}
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <FaInstagram />

            <span>
              Copy for Instagram
            </span>
          </motion.button>


          {/* Copy Link */}

          <motion.button
            className="share-button copy-button"
            onClick={handleCopy}
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {copied ? (
              <>
                <FaCheck />

                <span>
                  Link Copied!
                </span>
              </>
            ) : (
              <>
                <FaLink />

                <span>
                  Copy Link
                </span>
              </>
            )}
          </motion.button>

        </div>


        {/* Footer */}

        <motion.p
          className="share-footer"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
        >
          Made with 🌸 for Niru
        </motion.p>


        {/* Restart */}

        <motion.button
          className="restart-button"
          onClick={handleRestart}
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          <FaRedo />

          <span>
            Experience Again
          </span>
        </motion.button>

      </motion.div>

    </section>
  );
}

export default SharePage;