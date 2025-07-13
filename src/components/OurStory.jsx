import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  const storyItems = [
    {
      date: "Spring 2019",
      title: "First Bloom",
      description: "We met at the community garden, both reaching for the same packet of sunflower seeds. Emma's laugh was like morning birdsong, and James knew he'd found his sunshine.",
      flower: "🌻",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "Summer 2020",
      title: "Growing Together",
      description: "Our first summer together was spent cultivating more than just plants. We grew a love that bloomed in every season, tending to each other's dreams like precious seedlings.",
      flower: "🌹",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "Autumn 2022",
      title: "The Proposal",
      description: "Among the golden leaves and harvest moon, James got down on one knee in our favorite corner of the botanical garden. Emma said yes as the autumn roses witnessed our promise.",
      flower: "🍂",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "June 2024",
      title: "Forever Garden",
      description: "Now we're ready to plant the seeds of our forever garden, where our love will continue to grow and flourish through every season of life.",
      flower: "💐",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-b from-ivory to-blush dark:from-twilight dark:to-twilight/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-script text-moss dark:text-sage mb-6">
            Our Garden Story
          </h2>
          <div className="w-24 h-1 bg-eucalyptus mx-auto mb-6 rounded-full" />
          <p className="text-xl font-serif text-moss/80 dark:text-dew/80 max-w-2xl mx-auto">
            Like flowers in a garden, our love has grown through seasons of joy, 
            weathered storms, and blossomed into something beautiful.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {storyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center mb-16 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-4xl animate-float">
                    {item.flower}
                  </div>
                </div>
              </div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="bg-ivory/80 dark:bg-twilight/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <div className="text-sm font-serif text-eucalyptus dark:text-sage mb-2 uppercase tracking-wide">
                    {item.date}
                  </div>
                  <h3 className="text-3xl font-script text-moss dark:text-dew mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg font-serif text-moss/80 dark:text-dew/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-sage/10 dark:bg-sage/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-2xl font-script text-moss dark:text-sage italic">
              "In every walk with nature, one receives far more than they seek. 
              In every moment together, our love grows deeper roots."
            </p>
            <div className="mt-4 text-lg font-serif text-moss/70 dark:text-dew/70">
              - Emma & James
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;