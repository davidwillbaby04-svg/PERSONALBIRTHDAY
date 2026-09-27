import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

import "./BirthdayLetter.css";

// Replace this with the path of your personalized photo
import letterPhoto from "../../assets/letter-photo.jpg";

function BirthdayLetter() {
  return (
    <section className="birthday-letter">

      <motion.div
        className="letter-wrapper"
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.96,
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

        {/* Decorative flowers */}

        <motion.div
          className="letter-flower letter-flower-left"
          animate={{
            rotate: [0, 6, -6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🌸
        </motion.div>


        <motion.div
          className="letter-flower letter-flower-right"
          animate={{
            rotate: [0, -6, 6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          🌸
        </motion.div>


        {/* =========================
            LETTER
            ========================= */}

        <div
          className="letter-paper"
          style={{
            "--letter-photo": `url(${letterPhoto})`,
          }}
        >

          {/* Background overlay */}
          <div className="letter-photo-overlay" />


          {/* Letter content */}

          <div className="letter-content">

            {/* Top decoration */}

            <div className="letter-top-decoration">
              <span>✦</span>
              <FaHeart />
              <span>✦</span>
            </div>


            {/* Greeting */}

            <p className="letter-greeting">
              Dear Niru,
            </p>


            {/* Letter body */}

            <div className="letter-body">

              <p>
                I don't know if this is the right time to say this, but I can't keep it inside anymore 🥺❤️
              </p>

              <p>
                I don't treat you as just a sister. 
                Sometimes you're my younger sister, sometimes my best friend, and sometimes even my teacher. 🫶🏻 
                When we don't talk for a long time, I start overthinking—maybe you forgot me, you're angry with me, or don't like talking to me anymore. 🥺
                I know you're busy, so I never want to disturb you. I just wait for your message or call. 📱❤️
              </p>

              <p>
                Maybe you don't realize it, but your presence and your words mean a lot to me. 
                I just wanted to honestly tell you what's in my heart. ❤️
              </p>

              <p>
                But today is your special day, so I don't want to make this too emotional. 😄🎂
              </p>

              <p>
                Happy Birthday to my amazing sister! 🥳🎉❤️
                May your life always be filled with happiness, success, love, laughter, and beautiful memories. 
                Keep smiling, keep shining, and always stay the wonderful person you are! ✨🫂
              </p>

              <p>
                Happy Birthday once again, sis! 🎂❤️🥳
              </p>

            </div>


            {/* Signature */}

            <div className="letter-signature">

              <p>
                With lots of birthday wishes,
              </p>

              <h3>
                Your brother 💗
              </h3>

            </div>


            {/* Bottom decoration */}

            <div className="letter-bottom-decoration">
              🌸 ✦ 🌸
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default BirthdayLetter;