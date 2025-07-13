import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiClock, FiCloud, FiHeart, FiCamera, FiGift } = FiIcons;

const WeddingInfo = () => {
  const infoCards = [
    {
      icon: FiMapPin,
      title: "Ceremony Location",
      details: [
        "Botanical Gardens Rose Pavilion",
        "1234 Garden Lane, Bloomfield",
        "Outdoor ceremony under the rose arbor",
        "Parking available on-site"
      ]
    },
    {
      icon: FiClock,
      title: "Timeline",
      details: [
        "3:30 PM - Guest arrival & mingling",
        "4:00 PM - Ceremony begins",
        "4:30 PM - Cocktail hour in the herb garden",
        "6:00 PM - Reception & dancing"
      ]
    },
    {
      icon: FiCloud,
      title: "Weather & Attire",
      details: [
        "Garden party attire suggested",
        "Comfortable shoes for grass/gravel",
        "Light layers recommended",
        "Backup indoor venue available"
      ]
    },
    {
      icon: FiHeart,
      title: "Special Touches",
      details: [
        "Seed packet wedding favors",
        "Locally sourced floral arrangements",
        "Farm-to-table reception menu",
        "Butterfly release ceremony"
      ]
    }
  ];

  return (
    <section id="wedding" className="py-20 bg-dew/30 dark:bg-twilight/60">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-script text-moss dark:text-sage mb-6">
            Wedding Details
          </h2>
          <div className="w-24 h-1 bg-eucalyptus mx-auto mb-6 rounded-full" />
          <p className="text-xl font-serif text-moss/80 dark:text-dew/80 max-w-2xl mx-auto">
            Join us for an enchanted celebration in nature's most beautiful setting
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-ivory/90 dark:bg-twilight/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-sage/20 dark:bg-sage/30 rounded-full p-3 mr-4">
                  <SafeIcon icon={card.icon} className="w-6 h-6 text-moss dark:text-sage" />
                </div>
                <h3 className="text-2xl font-script text-moss dark:text-dew">
                  {card.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {card.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <span className="text-sage mr-2 mt-1">🌿</span>
                    <span className="text-moss/80 dark:text-dew/80 font-serif">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-ivory/90 dark:bg-twilight/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-script text-moss dark:text-dew mb-6 text-center">
            Our Favorite Garden Corners
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-sage/20 dark:bg-sage/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌹</span>
              </div>
              <h4 className="text-xl font-script text-moss dark:text-sage mb-2">Rose Garden</h4>
              <p className="text-sm font-serif text-moss/80 dark:text-dew/80">
                Where James proposed among the climbing roses
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-sage/20 dark:bg-sage/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h4 className="text-xl font-script text-moss dark:text-sage mb-2">Herb Garden</h4>
              <p className="text-sm font-serif text-moss/80 dark:text-dew/80">
                Our first date spot, sharing stories over lavender tea
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-sage/20 dark:bg-sage/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🦋</span>
              </div>
              <h4 className="text-xl font-script text-moss dark:text-sage mb-2">Butterfly Garden</h4>
              <p className="text-sm font-serif text-moss/80 dark:text-dew/80">
                Where we'll release butterflies as newlyweds
              </p>
            </div>
          </div>
        </motion.div>

        {/* Weather Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-golden/20 dark:bg-sage/20 border-2 border-sage/30 rounded-2xl p-6 max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <SafeIcon icon={FiCloud} className="w-6 h-6 text-moss dark:text-sage mr-2" />
            <h4 className="text-xl font-script text-moss dark:text-sage">
              Weather Note
            </h4>
          </div>
          <p className="font-serif text-moss/80 dark:text-dew/80">
            Our ceremony will be held outdoors rain or shine! We have a beautiful 
            covered pavilion as backup, and the garden is magical in any weather.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;