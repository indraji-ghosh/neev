import React from 'react';
import HeroSection from '../components/ui/detailspage/HeroSection';
import ColorGallerySection from '../components/ui/detailspage/ColorGallerySection';
import SpecificationsSection from '../components/ui/detailspage/SpecificationsSection';
import CTASection from '../components/ui/detailspage/CTASection';
import FAQ from '../components/ui/home/faqSection/FaqSection';

const DetailsPage = () => {
  // Product data
  const product = {
    name: 'Volt S1 Pro',
    tagline: 'The future of urban mobility',
    price: '₹1,49,999',
    mainImage: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=800&h=600&fit=crop',
    highlights: [
      { label: 'Range', value: '151 km' },
      { label: 'Top Speed', value: '90 km/h' },
      { label: 'Charging', value: '4 hours' }
    ]
  };

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

  return (
    <div className="min-h-screen bg-white">
      <HeroSection product={product} />
      <ColorGallerySection colorVariants={colorVariants} />
      <SpecificationsSection specifications={specifications} />
      <CTASection />
      <FAQ />
    </div>
  );
};

export default DetailsPage;