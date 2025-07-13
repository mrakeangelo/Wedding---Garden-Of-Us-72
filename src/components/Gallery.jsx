import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Engagement photo in the garden",
      caption: "Our engagement session among the wildflowers"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Garden pathway",
      caption: "The path where we'll walk down the aisle"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Couple in nature",
      caption: "Growing together through every season"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Autumn engagement",
      caption: "The moment he asked forever"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Garden flowers",
      caption: "Our favorite blooms from the community garden"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Nature landscape",
      caption: "The beautiful venue where we'll say I do"
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }
    
    setSelectedImage(images[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-blush to-ivory dark:from-twilight/90 dark:to-twilight">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-script text-moss dark:text-sage mb-6">
            Our Garden Gallery
          </h2>
          <div className="w-24 h-1 bg-eucalyptus mx-auto mb-6 rounded-full" />
          <p className="text-xl font-serif text-moss/80 dark:text-dew/80 max-w-2xl mx-auto">
            Moments captured in nature's embrace, telling the story of our growing love
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-ivory dark:bg-twilight p-4 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating elements on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-ivory/90 dark:bg-twilight/90 backdrop-blur-sm rounded-full p-2">
                      <span className="text-lg">🌸</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm font-script text-moss/80 dark:text-dew/80">
                    {image.caption}
                  </p>
                </div>
                
                {/* Polaroid tape effect */}
                <div className="absolute -top-2 left-8 w-8 h-4 bg-sage/30 rounded-sm transform -rotate-12" />
                <div className="absolute -top-2 right-8 w-8 h-4 bg-sage/30 rounded-sm transform rotate-12" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-ivory/90 dark:bg-twilight/90 backdrop-blur-sm rounded-full p-2 hover:bg-ivory dark:hover:bg-twilight transition-colors duration-200"
              >
                <SafeIcon icon={FiX} className="w-6 h-6 text-moss dark:text-dew" />
              </button>
              
              {/* Navigation buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-ivory/90 dark:bg-twilight/90 backdrop-blur-sm rounded-full p-2 hover:bg-ivory dark:hover:bg-twilight transition-colors duration-200"
              >
                <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-moss dark:text-dew" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-ivory/90 dark:bg-twilight/90 backdrop-blur-sm rounded-full p-2 hover:bg-ivory dark:hover:bg-twilight transition-colors duration-200"
              >
                <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-moss dark:text-dew" />
              </button>
              
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-lg font-script text-ivory bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;