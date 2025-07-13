import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiMail, FiMessageSquare, FiHeart, FiCheck } = FiIcons;

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    favoriteFlower: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const flowers = [
    { value: 'rose', label: 'Rose 🌹', meaning: 'Love & Romance' },
    { value: 'orchid', label: 'Orchid 🌺', meaning: 'Elegance & Beauty' },
    { value: 'wildflower', label: 'Wildflower 🌻', meaning: 'Joy & Freedom' },
    { value: 'lavender', label: 'Lavender 💜', meaning: 'Serenity & Grace' },
    { value: 'peony', label: 'Peony 🌸', meaning: 'Honor & Wealth' }
  ];

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-b from-sage/10 to-eucalyptus/10 dark:from-sage/20 dark:to-eucalyptus/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="bg-ivory/90 dark:bg-twilight/90 backdrop-blur-sm rounded-2xl p-12 shadow-2xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
              >
                <div className="bg-sage/20 dark:bg-sage/30 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={FiCheck} className="w-12 h-12 text-moss dark:text-sage" />
                </div>
                {/* Blooming flower animation */}
                <div className="relative">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-4xl"
                      style={{
                        left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 80}px`,
                        top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 80}px`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    >
                      🌸
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <h2 className="text-4xl font-script text-moss dark:text-sage mb-6">
                Thank You for Blooming with Us!
              </h2>
              <p className="text-xl font-serif text-moss/80 dark:text-dew/80 mb-8">
                Your RSVP has been received like morning dew on fresh petals. 
                We can't wait to celebrate our special day with you in the garden!
              </p>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-sage/10 dark:bg-sage/20 rounded-xl p-6"
              >
                <p className="text-lg font-script text-moss dark:text-sage italic">
                  "Like flowers in a garden, love grows more beautiful when shared with those we cherish most."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-b from-sage/10 to-eucalyptus/10 dark:from-sage/20 dark:to-eucalyptus/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-script text-moss dark:text-sage mb-6">
            Bloom with Us
          </h2>
          <div className="w-24 h-1 bg-eucalyptus mx-auto mb-6 rounded-full" />
          <p className="text-xl font-serif text-moss/80 dark:text-dew/80 max-w-2xl mx-auto">
            Let us know if you'll be joining us in our garden celebration. 
            Your presence would make our day even more beautiful.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-ivory/90 dark:bg-twilight/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-lg font-serif text-moss dark:text-dew mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiUser} className="absolute left-3 top-3 w-5 h-5 text-moss/60 dark:text-dew/60" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-ivory/50 dark:bg-twilight/50 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 text-moss dark:text-dew"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-lg font-serif text-moss dark:text-dew mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiMail} className="absolute left-3 top-3 w-5 h-5 text-moss/60 dark:text-dew/60" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-ivory/50 dark:bg-twilight/50 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 text-moss dark:text-dew"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-lg font-serif text-moss dark:text-dew mb-4">
                  Will you be joining us in the garden? *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.label
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      formData.attendance === 'yes' 
                        ? 'border-sage bg-sage/20 dark:bg-sage/30' 
                        : 'border-sage/30 hover:border-sage/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === 'yes'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="text-2xl mr-3">🌸</span>
                    <span className="text-lg font-serif text-moss dark:text-dew">
                      Yes, I'll bloom with you!
                    </span>
                  </motion.label>
                  
                  <motion.label
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      formData.attendance === 'no' 
                        ? 'border-sage bg-sage/20 dark:bg-sage/30' 
                        : 'border-sage/30 hover:border-sage/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === 'no'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="text-2xl mr-3">🍃</span>
                    <span className="text-lg font-serif text-moss dark:text-dew">
                      Sorry, can't make it
                    </span>
                  </motion.label>
                </div>
              </div>

              {/* Guests */}
              {formData.attendance === 'yes' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-lg font-serif text-moss dark:text-dew mb-2">
                    Number of Guests (including yourself)
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-ivory/50 dark:bg-twilight/50 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 text-moss dark:text-dew"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </motion.div>
              )}

              {/* Favorite Flower */}
              <div>
                <label className="block text-lg font-serif text-moss dark:text-dew mb-4">
                  Choose Your Favorite Garden Bloom
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {flowers.map((flower) => (
                    <motion.label
                      key={flower.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        formData.favoriteFlower === flower.value 
                          ? 'border-sage bg-sage/20 dark:bg-sage/30' 
                          : 'border-sage/30 hover:border-sage/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="favoriteFlower"
                        value={flower.value}
                        checked={formData.favoriteFlower === flower.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="font-serif text-moss dark:text-dew">
                          {flower.label}
                        </div>
                        <div className="text-sm text-moss/60 dark:text-dew/60">
                          {flower.meaning}
                        </div>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-lg font-serif text-moss dark:text-dew mb-2">
                  Leave a Petal of Love (Optional Message)
                </label>
                <div className="relative">
                  <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-3 w-5 h-5 text-moss/60 dark:text-dew/60" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full pl-10 pr-4 py-3 bg-ivory/50 dark:bg-twilight/50 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 text-moss dark:text-dew resize-none"
                    placeholder="Share your wishes for our garden of love..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-sage hover:bg-eucalyptus text-ivory font-serif text-xl py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <SafeIcon icon={FiHeart} className="w-6 h-6 mr-2" />
                Send My RSVP
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;