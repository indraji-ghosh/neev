import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div 
        className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-center shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to ride electric?
        </motion.h2>
        <motion.p 
          className="text-gray-300 text-lg mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Book a test ride today and experience the future
        </motion.p>
        <motion.button 
          className="bg-white text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule Test Ride
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CTASection;
