import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGift, FiHeart, FiMapPin, FiCamera, FiHome, FiSun } = FiIcons;

const Registry = () => {
  const registryItems = [
    {
      icon: FiSun,
      title: "Tree Planting Fund",
      description: "Help us plant a tree in our local park to celebrate our growing love. Each tree will be a living symbol of our commitment to each other and our planet.",
      goal: "$50 per tree",
      category: "eco-friendly"
    },
    {
      icon: FiHome,
      title: "Garden Starter Kit",
      description: "As we start our life together, help us create our own little garden paradise. From seeds to tools, every contribution helps us grow our green space.",
      goal: "$25 - $150",
      category: "home"
    },
    {
      icon: FiMapPin,
      title: "Honeymoon Adventures",
      description: "We're planning an eco-friendly honeymoon to explore botanical gardens around the world. Help us discover new flowers and create lasting memories.",
      goal: "$100 - $500",
      category: "experience"
    },
    {
      icon: FiCamera,
      title: "Memory Preservation",
      description: "Help us capture and preserve our wedding memories with beautiful photo albums and frames made from sustainable materials.",
      goal: "$30 - $200",
      category: "memories"
    },
    {
      icon: FiHeart,
      title: "Date Night Fund",
      description: "Contribute to our future date nights at local botanical gardens, farmers markets, and nature preserves. Keeping romance alive in natural settings!",
      goal: "$20 - $100",
      category: "experience"
    },
    {
      icon: FiGift,
      title: "Surprise Us!",
      description: "Choose any amount that feels right to you. Your presence is the greatest gift, but if you'd like to contribute to our future, we're grateful for anything.",
      goal: "Any amount",
      category: "flexible"
    }
  ];

  const categoryColors = {
    'eco-friendly': 'bg-sage/20 text-sage border-sage/30',
    'home': 'bg-eucalyptus/20 text-eucalyptus border-eucalyptus/30',
    'experience': 'bg-moss/20 text-moss border-moss/30',
    'memories': 'bg-blush/40 text-moss border-blush/60',
    'flexible': 'bg-dew/40 text-moss border-dew/60'
  };

  return (
    <section id="registry" className="py-20 bg-gradient-to-b from-eucalyptus/10 to-sage/10 dark:from-eucalyptus/20 dark:to-sage/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-script text-moss dark:text-sage mb-6">
            Grow With Us
          </h2>
          <div className="w-24 h-1 bg-eucalyptus mx-auto mb-6 rounded-full" />
          <p className="text-xl font-serif text-moss/80 dark:text-dew/80 max-w-3xl mx-auto">
            Your presence at our wedding is the greatest gift we could ask for. 
            If you'd like to contribute to our future garden of love, here are some ways to help us grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {registryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-ivory/90 dark:bg-twilight/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-sage/20 dark:bg-sage/30 rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <SafeIcon icon={item.icon} className="w-6 h-6 text-moss dark:text-sage" />
                </div>
                <h3 className="text-xl font-script text-moss dark:text-dew">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-moss/80 dark:text-dew/80 font-serif mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm font-serif border ${categoryColors[item.category]}`}>
                  {item.goal}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-sage hover:bg-eucalyptus text-ivory px-4 py-2 rounded-lg font-serif transition-colors duration-300"
                >
                  Contribute
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-ivory/90 dark:bg-twilight/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-3xl mx-auto text-center"
        >
          <div className="mb-6">
            <span className="text-6xl">💝</span>
          </div>
          <h3 className="text-3xl font-script text-moss dark:text-sage mb-6">
            A Note from Our Hearts
          </h3>
          <p className="text-lg font-serif text-moss/80 dark:text-dew/80 leading-relaxed mb-6">
            We believe that the most beautiful gardens are those that give back to the earth. 
            Instead of traditional gifts, we've chosen to focus on experiences and contributions 
            that will help us grow together while making a positive impact on our world.
          </p>
          <div className="bg-sage/10 dark:bg-sage/20 rounded-xl p-6">
            <p className="text-xl font-script text-moss dark:text-sage italic">
              "The best time to plant a tree was 20 years ago. The second best time is now. 
              Thank you for helping us plant the seeds of our future."
            </p>
            <div className="mt-4 text-lg font-serif text-moss/70 dark:text-dew/70">
              - Emma & James
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-serif text-moss/80 dark:text-dew/80 mb-4">
            Questions about our registry? We'd love to hear from you!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8">
            <a 
              href="mailto:emma.james@garden.love" 
              className="text-sage hover:text-eucalyptus transition-colors duration-300 font-serif"
            >
              emma.james@garden.love
            </a>
            <div className="hidden md:block w-px h-4 bg-sage/30" />
            <a 
              href="tel:+1234567890" 
              className="text-sage hover:text-eucalyptus transition-colors duration-300 font-serif"
            >
              (123) 456-7890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;