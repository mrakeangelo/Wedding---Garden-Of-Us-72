import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-moss dark:bg-twilight text-ivory py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Wedding Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-script text-sage mb-4">
              Emma & James
            </h3>
            <p className="text-ivory/80 font-serif mb-4">
              June 15th, 2024 • 4:00 PM
            </p>
            <p className="text-ivory/80 font-serif">
              Botanical Gardens Rose Pavilion
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-xl font-script text-sage mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <SafeIcon icon={FiMail} className="w-5 h-5 mr-2" />
                <a 
                  href="mailto:emma.james@garden.love" 
                  className="text-ivory/80 hover:text-sage transition-colors duration-300 font-serif"
                >
                  emma.james@garden.love
                </a>
              </div>
              <div className="flex items-center justify-center">
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                <a 
                  href="tel:+1234567890" 
                  className="text-ivory/80 hover:text-sage transition-colors duration-300 font-serif"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center justify-center">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 mr-2" />
                <span className="text-ivory/80 font-serif">
                  Bloomfield Gardens
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-xl font-script text-sage mb-4">
              Follow Our Journey
            </h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="bg-sage/20 p-3 rounded-full hover:bg-sage/30 transition-colors duration-300"
              >
                <SafeIcon icon={FiInstagram} className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="bg-sage/20 p-3 rounded-full hover:bg-sage/30 transition-colors duration-300"
              >
                <SafeIcon icon={FiFacebook} className="w-6 h-6" />
              </motion.a>
            </div>
            <p className="text-ivory/80 font-serif text-sm">
              #EmmaAndJamesGarden
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-sage/30 mb-8" />

        {/* Bottom Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <p className="text-2xl font-script text-sage italic mb-2">
              "Love is the flower you've got to let grow"
            </p>
            <p className="text-ivory/60 font-serif">
              - John Lennon
            </p>
          </motion.div>

          <div className="flex items-center justify-center space-x-2 mb-6">
            <SafeIcon icon={FiHeart} className="w-5 h-5 text-sage" />
            <span className="text-ivory/80 font-serif">
              Thank you for being part of our garden story
            </span>
            <SafeIcon icon={FiHeart} className="w-5 h-5 text-sage" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-ivory/60 font-serif text-sm"
          >
            <p>Garden of Us – A Botanical Wedding Template by Mrake Agency</p>
            <p className="mt-2">© 2024 Emma & James • All rights reserved</p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              {['🌸', '🌿', '🦋'][i]}
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;