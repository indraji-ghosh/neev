import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import scooters from '../../../../data/scooters';

const FeaturedSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Featured Scooter Models
          </h1>
          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of electric scooters designed for the modern urban commuter
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {scooters.map((scooter) => (
           <ProductCard key={scooter.id} scooter={scooter} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedSection;