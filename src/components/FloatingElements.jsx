import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    { emoji: '🌸', size: 'text-3xl', delay: 0 },
    { emoji: '🌿', size: 'text-2xl', delay: 1 },
    { emoji: '🦋', size: 'text-4xl', delay: 2 },
    { emoji: '🌺', size: 'text-3xl', delay: 3 },
    { emoji: '🍃', size: 'text-2xl', delay: 4 },
    { emoji: '🌻', size: 'text-3xl', delay: 5 },
    { emoji: '🌹', size: 'text-2xl', delay: 6 },
    { emoji: '🌷', size: 'text-3xl', delay: 7 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} opacity-20 dark:opacity-10`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 15, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
      
      {/* Petal falling animation */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          className="absolute text-2xl opacity-30 dark:opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-20px',
          }}
          animate={{
            y: [0, window.innerHeight + 50],
            x: [0, Math.sin(i) * 50],
            rotate: [0, 360],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;