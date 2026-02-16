import React, { useState } from 'react';
import { ChevronRight, Download, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const DetailsPage = () => {
  // Color variants with their images
  const colorVariants = {
    black: {
      name: 'Matte Black',
      hex: '#1F2937',
      images: [
        'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop'
      ]
    },
    darkGray: {
      name: 'Dark Gray',
      hex: '#4B5563',
      images: [
        'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop'
      ]
    },
    silver: {
      name: 'Silver Gray',
      hex: '#9CA3AF',
      images: [
        'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop'
      ]
    },
    white: {
      name: 'Pearl White',
      hex: '#F9FAFB',
      images: [
        'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop'
      ]
    }
  };

  const specifications = {
    overview: [
      { label: 'Model', value: 'Volt S1 Pro' },
      { label: 'Motor Type', value: 'Hub Motor' },
      { label: 'Warranty', value: '3 Years / 50,000 km' },
      { label: 'Payload Capacity', value: '150 kg' },
      { label: 'Braking System', value: 'Disc Brake (Front & Rear)' },
      { label: 'Suspension', value: 'Telescopic (Front), Dual Shock (Rear)' }
    ],
    battery: [
      { label: 'Battery Type', value: 'Lithium-ion' },
      { label: 'Battery Capacity', value: '3.24 kWh' },
      { label: 'Charging Time', value: '4 hours (0-100%)' },
      { label: 'Fast Charging', value: '90 min (0-80%)' },
      { label: 'Battery Life', value: '50,000 km / 8 Years' },
      { label: 'Charger Type', value: 'Smart Portable Charger' }
    ],
    performance: [
      { label: 'Top Speed', value: '90 km/h' },
      { label: 'Range (IDC)', value: '151 km' },
      { label: 'Real World Range', value: '120 km' },
      { label: 'Acceleration', value: '0-40 km/h in 3.3s' },
      { label: 'Motor Power', value: '3.2 kW (Peak: 6 kW)' },
      { label: 'Riding Modes', value: 'Eco, Ride, Sport, Hyper' }
    ],
    dimensions: [
      { label: 'Length', value: '1859 mm' },
      { label: 'Width', value: '722 mm' },
      { label: 'Height', value: '1156 mm' },
      { label: 'Wheelbase', value: '1285 mm' },
      { label: 'Seat Height', value: '780 mm' },
      { label: 'Ground Clearance', value: '155 mm' }
    ],
    features: [
      { label: 'Display', value: '7-inch TFT Touchscreen' },
      { label: 'Connectivity', value: 'Bluetooth, 4G, WiFi' },
      { label: 'Navigation', value: 'Turn-by-turn Navigation' },
      { label: 'Storage', value: '22L Boot Space' },
      { label: 'Lights', value: 'LED Headlight & Taillight' },
      { label: 'Keyless', value: 'Proximity Unlock & Start' }
    ]
  };

  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedImageIndex(0);
  };

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
                Volt S1 Pro
              </h1>
              <p className="text-xl text-gray-600">
                The future of urban mobility
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
              <p className="text-4xl font-bold text-gray-900">₹1,49,999</p>
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
              <motion.div 
                className="text-center p-4 rounded-xl bg-gray-50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-2xl font-bold text-black">151 km</p>
                <p className="text-sm text-gray-600 mt-1">Range</p>
              </motion.div>
              <motion.div 
                className="text-center p-4 rounded-xl bg-gray-50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-2xl font-bold text-black">90 km/h</p>
                <p className="text-sm text-gray-600 mt-1">Top Speed</p>
              </motion.div>
              <motion.div 
                className="text-center p-4 rounded-xl bg-gray-50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-2xl font-bold text-black">4 hours</p>
                <p className="text-sm text-gray-600 mt-1">Charging</p>
              </motion.div>
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
              src="https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=800&h=600&fit=crop"
              alt="Volt S1 Pro Electric Scooter"
              className="w-full h-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Color Variant Gallery Section */}
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

      {/* Specifications Section */}
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

      {/* Footer CTA */}
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
    </div>
  );
};

export default DetailsPage;