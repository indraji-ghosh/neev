import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const contactInfo = {
    address: {
      label: "Showroom Address",
      value: "123 Electric Avenue, Tech District\nSan Francisco, CA 94102"
    },
    phone: {
      label: "Phone Number",
      value: "+1 (555) 123-4567"
    },
    hours: {
      label: "Business Hours",
      value: "Monday - Saturday: 9:00 AM - 7:00 PM\nSunday: 10:00 AM - 5:00 PM"
    },
    whatsapp: {
      label: "WhatsApp",
      value: "+1 (555) 123-4567",
      link: "https://wa.me/15551234567"
    }
  };

  // Map embed URL (replace with your actual location)
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977817034824!2d-122.41941492346556!3d37.77492971220595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
              <span className="text-sm font-medium text-black">Contact & Location</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-6xl font-semibold text-black mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Visit Our Showroom
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Experience our electric scooters firsthand. Our team is ready to help you find the perfect ride.
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column - Map */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-[500px] bg-gray-100">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Showroom Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Information */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-lg transition-shadow duration-300 h-[500px] flex flex-col">
              <div className="flex-1 space-y-0">
                {/* Address */}
                <div className="py-6 border-b border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                        {contactInfo.address.label}
                      </div>
                      <div className="text-base font-medium text-black whitespace-pre-line leading-relaxed">
                        {contactInfo.address.value}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="py-6 border-b border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                        {contactInfo.phone.label}
                      </div>
                      <a 
                        href={`tel:${contactInfo.phone.value.replace(/\D/g, '')}`}
                        className="text-base font-medium text-black hover:text-gray-600 transition-colors"
                      >
                        {contactInfo.phone.value}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="py-6 border-b border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                        {contactInfo.hours.label}
                      </div>
                      <div className="text-base font-medium text-black whitespace-pre-line leading-relaxed">
                        {contactInfo.hours.value}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email (Optional - can add if needed) */}
                <div className="py-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                        Email
                      </div>
                      <a 
                        href="mailto:info@scootershowroom.com"
                        className="text-base font-medium text-black hover:text-gray-600 transition-colors"
                      >
                        info@scootershowroom.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <motion.a
                  href={contactInfo.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 group"
                >
                  <svg 
                    className="w-6 h-6 group-hover:scale-110 transition-transform" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA or Note */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
         
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;