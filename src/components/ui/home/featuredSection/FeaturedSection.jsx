import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const FeaturedSection = () => {
  const scooters = [
    {
      id: 1,
      name: "Urban Glide X1",
      price: "$899",
      range: "45 miles",
      topSpeed: "25 mph",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjZPl8O0qkANsmTFRCljfOe1jyDY42o0ci7n-yGPph8IGNRl_BciFoAvGwK1rhJJy3VEfn4KlRCKPVFoYtVDINUL50jBmkfncPq7d_yE&s=10"
    },
    {
      id: 2,
      name: "City Cruiser Pro",
      price: "$1,299",
      range: "60 miles",
      topSpeed: "28 mph",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjZPl8O0qkANsmTFRCljfOe1jyDY42o0ci7n-yGPph8IGNRl_BciFoAvGwK1rhJJy3VEfn4KlRCKPVFoYtVDINUL50jBmkfncPq7d_yE&s=10"
    },
    {
      id: 3,
      name: "Metro Swift",
      price: "$749",
      range: "35 miles",
      topSpeed: "22 mph",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjZPl8O0qkANsmTFRCljfOe1jyDY42o0ci7n-yGPph8IGNRl_BciFoAvGwK1rhJJy3VEfn4KlRCKPVFoYtVDINUL50jBmkfncPq7d_yE&s=10"
    },
    {
      id: 4,
      name: "Velocity Max",
      price: "$1,599",
      range: "75 miles",
      topSpeed: "30 mph",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjZPl8O0qkANsmTFRCljfOe1jyDY42o0ci7n-yGPph8IGNRl_BciFoAvGwK1rhJJy3VEfn4KlRCKPVFoYtVDINUL50jBmkfncPq7d_yE&s=10"
    },
    {
      id: 5,
      name: "Eco Rider S2",
      price: "$649",
      range: "30 miles",
      topSpeed: "20 mph",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjZPl8O0qkANsmTFRCljfOe1jyDY42o0ci7n-yGPph8IGNRl_BciFoAvGwK1rhJJy3VEfn4KlRCKPVFoYtVDINUL50jBmkfncPq7d_yE&s=10"
    },
    {
      id: 6,
      name: "Thunder Elite",
      price: "$1,899",
      range: "90 miles",
      topSpeed: "32 mph",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjZPl8O0qkANsmTFRCljfOe1jyDY42o0ci7n-yGPph8IGNRl_BciFoAvGwK1rhJJy3VEfn4KlRCKPVFoYtVDINUL50jBmkfncPq7d_yE&s=10"
    }
  ];

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