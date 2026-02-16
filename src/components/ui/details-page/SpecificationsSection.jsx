import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SpecificationsSection = ({ specifications }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(specifications)[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Technical Specifications</h2>
        <p className="text-gray-600">Engineered for performance and efficiency</p>
      </motion.div>

      <motion.div 
        className="bg-white rounded-3xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {Object.keys(specifications).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 font-semibold capitalize whitespace-nowrap transition-all relative ${
                  activeTab === tab
                    ? 'text-black'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black rounded-t-full transition-all" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div 
          className="p-8"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specifications[activeTab].map((spec, index) => (
              <motion.div
                key={index}
                className="flex justify-between items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-gray-600 font-medium">{spec.label}</span>
                <span className="text-gray-900 font-bold">{spec.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SpecificationsSection;
