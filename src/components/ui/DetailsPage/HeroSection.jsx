import React from 'react';
import { ChevronRight, Download, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = ({ product }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-25 sm:px-6 lg:px-8">
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Column - Product Info */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-3">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600">
              {product.tagline}
            </p>
          </motion.div>

          <motion.div 
            className="py-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-600 text-sm mb-1">Starting at</p>
            <p className="text-4xl font-bold text-gray-900">{product.price}</p>
            <p className="text-sm text-gray-500 mt-1">Ex-showroom price</p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div 
            className="grid grid-cols-3 gap-4 py-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {product.highlights.map((highlight, index) => (
              <motion.div 
                key={index}
                className="text-center p-4 rounded-xl bg-gray-50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-2xl font-bold text-black">{highlight.value}</p>
                <p className="text-sm text-gray-600 mt-1">{highlight.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
              className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-black/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={20} />
              Book Test Ride
              <ChevronRight size={20} />
            </motion.button>
            <motion.button 
              className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-black hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Brochure
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column - Product Image */}
        <motion.div 
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl"
          variants={itemVariants}
        >
          <motion.img
            src={product.mainImage}
            alt={product.name}
            className="w-full h-auto object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
