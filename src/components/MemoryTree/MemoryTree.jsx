import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MemoryTree.css";
import { memoryTree } from "../../data/memoryTree";

import treeImage from "../../assets/images/tree/cherry-tree.png";
import blossomImage from "../../assets/images/flowers/blossom.png";
import envelopeImage from "../../assets/images/letter/envelope.png";
import moonImage from "../../assets/images/backgrounds/moon.png";
import sparklesImage from "../../assets/images/decorations/sparkles.png";

function MemoryTree() {
  const [selectedMemory, setSelectedMemory] = useState(null);

  return (
    <div className="memory-tree-container">

      <h2>Our Memory Tree 🌸</h2>

      <p>
        Every blossom hides a beautiful memory.
      </p>

      <div className="tree-wrapper">

        <img
          src={treeImage}
          alt="Cherry Blossom Tree"
          className="tree-image"
        />

        {memoryTree.map((memory, index) => (
          <motion.img
            key={memory.id}
            src={blossomImage}
            alt="Blossom"
            className={`blossom blossom-${index + 1}`}
            whileHover={{
              scale: 1.2,
              rotate: 10,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setSelectedMemory(memory)}
          />
        ))}

      </div>

      <AnimatePresence>

        {selectedMemory && (
          <motion.div
            className="memory-popup"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >

            <img
                src={selectedMemory.photo}
                alt={selectedMemory.title}
                className="memory-photo"
            />

      <h3>{selectedMemory.title}</h3>

      <p>{selectedMemory.text}</p>

            <button
              onClick={() => setSelectedMemory(null)}
            >
              Close
            </button>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}

export default MemoryTree;