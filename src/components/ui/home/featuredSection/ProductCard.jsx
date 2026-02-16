import { motion } from 'framer-motion';
import { Link } from 'lucide-react';

function ProductCard( { scooter }) {
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
     <motion.div
              key={scooter.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative h-64 bg-gray-50 overflow-hidden">
                  <img
                    src={scooter.image}
                    alt={scooter.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Model Name */}
                  <h3 className="text-xl font-semibold text-black">
                    {scooter.name}
                  </h3>

                  {/* Price */}
                  <div className="text-2xl font-bold text-black">
                    {scooter.price}
                  </div>

                  {/* Specs */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Range</span>
                      <span className="font-medium text-black">{scooter.range}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Top Speed</span>
                      <span className="font-medium text-black">{scooter.topSpeed}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a href={`/details`}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 py-3 px-6 bg-black/90 text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    
                    View Details
                  </motion.button>
                   </a>
                </div>
              </div>
            </motion.div>
  )
}

export default ProductCard