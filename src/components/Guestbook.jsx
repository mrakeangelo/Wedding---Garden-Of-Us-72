import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiMessageSquare, FiSend, FiHeart } = FiIcons;

const Guestbook = () => {
  const [newMessage, setNewMessage] = useState({
    name: '',
    message: '',
    flower: '🌸'
  });
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Sarah & Mike",
      message: "We couldn't be happier for you both! Your love story is like a beautiful garden - it just keeps growing more beautiful with time. Can't wait to celebrate with you!",
      flower: "🌹",
      date: new Date(2024, 2, 15)
    },
    {
      id: 2,
      name: "Grandma Rose",
      message: "My dear Emma and James, watching your love bloom has been one of life's greatest joys. May your marriage be as enduring and beautiful as the roses in my garden. All my love! 💕",
      flower: "🌺",
      date: new Date(2024, 2, 18)
    },
    {
      id: 3,
      name: "The Johnson Family",
      message: "From the community garden to your wedding garden - what a beautiful journey! We're so excited to witness your special day. Here's to growing old together like the ancient oak trees! 🌳",
      flower: "🌿",
      date: new Date(2024, 2, 22)
    }
  ]);

  const flowerReactions = ['🌸', '🌹', '🌺', '🌻', '🌷', '🌿', '🦋', '💐'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMessage(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFlowerSelect = (flower) => {
    setNewMessage(prev => ({
      ...prev,
      flower: flower
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name.trim() && newMessage.message.trim()) {
      const message = {
        id: messages.length + 1,
        name: newMessage.name,
        message: newMessage.message,
        flower: newMessage.flower,
        date: new Date()
      };
      setMessages(prev => [message, ...prev]);
      setNewMessage({ name: '', message: '', flower: '🌸' });
    }
  };

  return (
    <section id="guestbook" className="py-20 bg-gradient-to-b from-blush/30 to-ivory dark:from-twilight/80 dark:to-twilight">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-script text-moss dark:text-sage mb-6">
            Leave a Petal of Love
          </h2>
          <div className="w-24 h-1 bg-eucalyptus mx-auto mb-6 rounded-full" />
          <p className="text-xl font-serif text-moss/80 dark:text-dew/80 max-w-2xl mx-auto">
            Share your wishes, memories, and love notes in our digital garden guestbook. 
            Every message is a beautiful bloom in our collection of love.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-ivory/90 dark:bg-twilight/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12"
          >
            <h3 className="text-3xl font-script text-moss dark:text-sage mb-6 text-center">
              Plant Your Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-serif text-moss dark:text-dew mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiUser} className="absolute left-3 top-3 w-5 h-5 text-moss/60 dark:text-dew/60" />
                    <input
                      type="text"
                      name="name"
                      value={newMessage.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-ivory/50 dark:bg-twilight/50 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 text-moss dark:text-dew"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-lg font-serif text-moss dark:text-dew mb-2">
                    Choose Your Flower
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {flowerReactions.map((flower, index) => (
                      <motion.button
                        key={index}
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleFlowerSelect(flower)}
                        className={`text-3xl p-2 rounded-lg transition-all duration-300 ${
                          newMessage.flower === flower 
                            ? 'bg-sage/30 scale-110' 
                            : 'hover:bg-sage/20'
                        }`}
                      >
                        {flower}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-lg font-serif text-moss dark:text-dew mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-3 w-5 h-5 text-moss/60 dark:text-dew/60" />
                  <textarea
                    name="message"
                    value={newMessage.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full pl-10 pr-4 py-3 bg-ivory/50 dark:bg-twilight/50 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 text-moss dark:text-dew resize-none"
                    placeholder="Share your wishes for Emma & James..."
                    required
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-sage hover:bg-eucalyptus text-ivory font-serif text-xl py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <SafeIcon icon={FiSend} className="w-6 h-6 mr-2" />
                Plant My Message
              </motion.button>
            </form>
          </motion.div>

          {/* Messages Display */}
          <div className="space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-ivory/90 dark:bg-twilight/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform ${
                  index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                } hover:rotate-0 transition-transform duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-sage/20 dark:bg-sage/30 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl">{message.flower}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-script text-moss dark:text-sage">
                        {message.name}
                      </h4>
                      <span className="text-sm font-serif text-moss/60 dark:text-dew/60">
                        {format(message.date, 'MMM dd, yyyy')}
                      </span>
                    </div>
                    
                    <p className="text-moss/80 dark:text-dew/80 font-serif leading-relaxed">
                      {message.message}
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-sage/30 rounded-full opacity-50" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-eucalyptus/30 rounded-full opacity-50" />
              </motion.div>
            ))}
          </div>

          {/* Encouragement to sign */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-sage/10 dark:bg-sage/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <SafeIcon icon={FiHeart} className="w-12 h-12 text-sage mx-auto mb-4" />
              <p className="text-lg font-script text-moss dark:text-sage italic">
                "Every flower in a garden tells a story. We can't wait to read yours!"
              </p>
              <div className="mt-4 text-moss/70 dark:text-dew/70 font-serif">
                Share your story with us above ↑
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;