import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ColorGallerySection = ({ colorVariants }) => {
  const [selectedColor, setSelectedColor] = useState(Object.keys(colorVariants)[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedImageIndex(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Color</h2>
        <p className="text-gray-600">Express yourself with stunning color options</p>
      </motion.div>

      {/* Color Selector */}
      <motion.div 
        className="flex gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {Object.entries(colorVariants).map(([key, variant], index) => (
          <motion.button
            key={key}
            onClick={() => handleColorChange(key)}
            className={`group flex flex-col items-center gap-2 transition-all ${
              selectedColor === key ? 'scale-110' : 'opacity-60 hover:opacity-100'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: selectedColor === key ? 1 : 0.6, scale: selectedColor === key ? 1.1 : 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`w-16 h-16 rounded-full border-4 transition-all ${
                selectedColor === key
                  ? 'border-black shadow-lg'
                  : 'border-gray-300 group-hover:border-gray-400'
              }`}
              style={{ backgroundColor: variant.hex }}
            />
            <span className={`text-sm font-medium ${
              selectedColor === key ? 'text-gray-900' : 'text-gray-600'
            }`}>
              {variant.name}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Image Gallery */}
      <motion.div 
        className="bg-white rounded-3xl shadow-xl overflow-hidden p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Main Preview Image */}
        <motion.div 
          className="mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden"
          key={selectedImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={colorVariants[selectedColor].images[selectedImageIndex]}
            alt={`${colorVariants[selectedColor].name} view ${selectedImageIndex + 1}`}
            className="w-full h-96 object-cover transition-all duration-500"
          />
        </motion.div>

        {/* Thumbnail Row */}
        <div className="grid grid-cols-4 gap-4">
          {colorVariants[selectedColor].images.map((img, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`rounded-xl overflow-hidden transition-all ${
                selectedImageIndex === index
                  ? 'ring-4 ring-black shadow-lg'
                  : 'opacity-60 hover:opacity-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-24 object-cover"
              />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ColorGallerySection;
