import React from 'react';
import { motion } from 'framer-motion';

const ComparisionSection = () => {
  const models = [
    {
      id: 1,
      name: "Urban Glide X1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjZPl8O0qkANsmTFRCljfOe1jyDY42o0ci7n-yGPph8IGNRl_BciFoAvGwK1rhJJy3VEfn4KlRCKPVFoYtVDINUL50jBmkfncPq7d_yE&s=10",
      popular: false,
      specs: {
        range: "45 miles",
        battery: "48V 15Ah",
        charging: "4-5 hours",
        topSpeed: "25 mph",
        price: "$899"
      }
    },
    {
      id: 2,
      name: "City Cruiser Pro",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjZPl8O0qkANsmTFRCljfOe1jyDY42o0ci7n-yGPph8IGNRl_BciFoAvGwK1rhJJy3VEfn4KlRCKPVFoYtVDINUL50jBmkfncPq7d_yE&s=10",
      popular: true,
      specs: {
        range: "60 miles",
        battery: "52V 20Ah",
        charging: "5-6 hours",
        topSpeed: "28 mph",
        price: "$1,299"
      }
    },
    {
      id: 3,
      name: "Velocity Max",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjZPl8O0qkANsmTFRCljfOe1jyDY42o0ci7n-yGPph8IGNRl_BciFoAvGwK1rhJJy3VEfn4KlRCKPVFoYtVDINUL50jBmkfncPq7d_yE&s=10",
      popular: false,
      specs: {
        range: "75 miles",
        battery: "60V 25Ah",
        charging: "6-7 hours",
        topSpeed: "30 mph",
        price: "$1,599"
      }
    }
  ];

  const specIcons = {
    range: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M3 6h18M3 18h18" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    battery: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
        <line x1="23" y1="13" x2="23" y2="11" />
        <line x1="5" y1="10" x2="5" y2="14" />
        <line x1="9" y1="10" x2="9" y2="14" />
      </svg>
    ),
    charging: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    topSpeed: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v10l8 4-8-4-8 4 8-4z" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    price: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Label */}
          <motion.div 
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <span className="text-sm font-medium text-black">Specifications Comparison</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl font-semibold text-black mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Compare Models
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Find the perfect electric scooter that matches your lifestyle and performance needs
          </motion.p>
        </div>

        {/* Comparison Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {models.map((model) => (
            <motion.div
              key={model.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Popular Badge */}
              {model.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1.5 bg-black text-white text-xs font-semibold rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className={`bg-white rounded-2xl border-2 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full ${
                model.popular 
                  ? 'border-black shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                {/* Image Section */}
                <div className="relative h-64 bg-gray-50 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Model Name */}
                  <h3 className="text-2xl font-bold text-black mb-8">
                    {model.name}
                  </h3>

                  {/* Specifications List */}
                  <div className="space-y-5">
                    {/* Range */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                        {specIcons.range}
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                          Range
                        </div>
                        <div className="text-base font-semibold text-black">
                          {model.specs.range}
                        </div>
                      </div>
                    </div>

                    {/* Battery */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                        {specIcons.battery}
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                          Battery
                        </div>
                        <div className="text-base font-semibold text-black">
                          {model.specs.battery}
                        </div>
                      </div>
                    </div>

                    {/* Charging Time */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                        {specIcons.charging}
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                          Charging Time
                        </div>
                        <div className="text-base font-semibold text-black">
                          {model.specs.charging}
                        </div>
                      </div>
                    </div>

                    {/* Top Speed */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                        {specIcons.topSpeed}
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                          Top Speed
                        </div>
                        <div className="text-base font-semibold text-black">
                          {model.specs.topSpeed}
                        </div>
                      </div>
                    </div>

                    {/* Price - Highlighted */}
                    <div className="pt-4 mt-4 border-t border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white">
                          {specIcons.price}
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                            Price
                          </div>
                          <div className="text-2xl font-bold text-black">
                            {model.specs.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full mt-8 py-3.5 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      model.popular
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-100 text-black hover:bg-gray-200'
                    }`}
                  >
                    {model.popular ? 'Choose This Model' : 'View Details'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            All specifications are approximate and may vary based on riding conditions
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComparisionSection;