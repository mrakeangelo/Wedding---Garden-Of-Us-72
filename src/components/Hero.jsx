import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-script text-ivory mb-4">
            Emma & James
          </h1>
          <div className="w-32 h-1 bg-sage mx-auto mb-6 rounded-full" />
          <p className="text-xl md:text-2xl font-serif text-ivory/90 mb-2">
            are getting married
          </p>
          <p className="text-lg md:text-xl font-serif text-ivory/80">
            in the secret garden of their dreams
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-ivory/90 dark:bg-twilight/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-script text-moss dark:text-sage mb-2">
                June 15th, 2024
              </p>
              <p className="text-lg font-serif text-moss/80 dark:text-dew/80">
                4:00 PM
              </p>
            </div>
            <div className="hidden md:block w-px h-16 bg-sage/30" />
            <div className="text-center">
              <p className="text-xl font-serif text-moss dark:text-sage mb-2">
                Botanical Gardens
              </p>
              <p className="text-lg font-serif text-moss/80 dark:text-dew/80">
                Rose Pavilion
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <p className="text-lg font-script text-ivory/90 italic">
            "Love is the flower you've got to let grow"
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            {['🌸', '🌿', '🦋', '🌺', '🍃'][i]}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;