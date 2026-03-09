const scooters = [
  {
    id: 1,
    name: 'Urban Glide X1',
    tagline: 'Effortless gliding through every street.',
    price: '$899',
    range: '45 miles',
    topSpeed: '25 mph',
    charging: '3 hours',
    mainImage:
      'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=800&h=600&fit=crop',
    highlights: [
      { label: 'Range', value: '45 miles' },
      { label: 'Top Speed', value: '25 mph' },
      { label: 'Charging', value: '3 hours' }
    ],
    colorVariants: {
      black: {
        name: 'Matte Black',
        hex: '#1F2937',
        images: [
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop'
        ]
      },
      silver: {
        name: 'Silver Gray',
        hex: '#9CA3AF',
        images: [
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop'
        ]
      },
      white: {
        name: 'Pearl White',
        hex: '#F9FAFB',
        images: [
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop'
        ]
      }
    },
    specifications: {
      overview: [
        { label: 'Model', value: 'Urban Glide X1' },
        { label: 'Motor Type', value: 'Hub Motor' },
        { label: 'Warranty', value: '2 Years / 30,000 km' },
        { label: 'Payload Capacity', value: '120 kg' },
        { label: 'Braking System', value: 'Disc Brake (Front), Drum (Rear)' },
        { label: 'Suspension', value: 'Telescopic (Front), Spring (Rear)' }
      ],
      battery: [
        { label: 'Battery Type', value: 'Lithium-ion' },
        { label: 'Battery Capacity', value: '2.0 kWh' },
        { label: 'Charging Time', value: '3 hours (0-100%)' },
        { label: 'Fast Charging', value: 'Not Supported' },
        { label: 'Battery Life', value: '30,000 km / 5 Years' },
        { label: 'Charger Type', value: 'Standard Portable Charger' }
      ],
      performance: [
        { label: 'Top Speed', value: '25 mph' },
        { label: 'Range (IDC)', value: '45 miles' },
        { label: 'Real World Range', value: '38 miles' },
        { label: 'Acceleration', value: '0-25 mph in 5.5s' },
        { label: 'Motor Power', value: '1.5 kW (Peak: 2.5 kW)' },
        { label: 'Riding Modes', value: 'Eco, Ride' }
      ],
      dimensions: [
        { label: 'Length', value: '1720 mm' },
        { label: 'Width', value: '680 mm' },
        { label: 'Height', value: '1100 mm' },
        { label: 'Wheelbase', value: '1200 mm' },
        { label: 'Seat Height', value: '760 mm' },
        { label: 'Ground Clearance', value: '140 mm' }
      ],
      features: [
        { label: 'Display', value: '5-inch LCD' },
        { label: 'Connectivity', value: 'Bluetooth' },
        { label: 'Navigation', value: 'Not Available' },
        { label: 'Storage', value: '15L Boot Space' },
        { label: 'Lights', value: 'LED Headlight & Taillight' },
        { label: 'Keyless', value: 'Key Start' }
      ]
    }
  },
  {
    id: 2,
    name: 'City Cruiser Pro',
    tagline: 'Built for the city, built for you.',
    price: '$1,299',
    range: '60 miles',
    topSpeed: '28 mph',
    charging: '3.5 hours',
    mainImage:
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
    highlights: [
      { label: 'Range', value: '60 miles' },
      { label: 'Top Speed', value: '28 mph' },
      { label: 'Charging', value: '3.5 hours' }
    ],
    colorVariants: {
      black: {
        name: 'Matte Black',
        hex: '#1F2937',
        images: [
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop'
        ]
      },
      darkGray: {
        name: 'Dark Gray',
        hex: '#4B5563',
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
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop'
        ]
      }
    },
    specifications: {
      overview: [
        { label: 'Model', value: 'City Cruiser Pro' },
        { label: 'Motor Type', value: 'Hub Motor' },
        { label: 'Warranty', value: '2 Years / 40,000 km' },
        { label: 'Payload Capacity', value: '135 kg' },
        { label: 'Braking System', value: 'Disc Brake (Front & Rear)' },
        { label: 'Suspension', value: 'Telescopic (Front), Dual Spring (Rear)' }
      ],
      battery: [
        { label: 'Battery Type', value: 'Lithium-ion' },
        { label: 'Battery Capacity', value: '2.6 kWh' },
        { label: 'Charging Time', value: '3.5 hours (0-100%)' },
        { label: 'Fast Charging', value: '75 min (0-80%)' },
        { label: 'Battery Life', value: '40,000 km / 6 Years' },
        { label: 'Charger Type', value: 'Smart Portable Charger' }
      ],
      performance: [
        { label: 'Top Speed', value: '28 mph' },
        { label: 'Range (IDC)', value: '60 miles' },
        { label: 'Real World Range', value: '50 miles' },
        { label: 'Acceleration', value: '0-28 mph in 4.5s' },
        { label: 'Motor Power', value: '2.0 kW (Peak: 3.5 kW)' },
        { label: 'Riding Modes', value: 'Eco, Ride, Sport' }
      ],
      dimensions: [
        { label: 'Length', value: '1800 mm' },
        { label: 'Width', value: '700 mm' },
        { label: 'Height', value: '1130 mm' },
        { label: 'Wheelbase', value: '1250 mm' },
        { label: 'Seat Height', value: '770 mm' },
        { label: 'Ground Clearance', value: '148 mm' }
      ],
      features: [
        { label: 'Display', value: '6-inch TFT' },
        { label: 'Connectivity', value: 'Bluetooth, 4G' },
        { label: 'Navigation', value: 'Basic Turn-by-turn' },
        { label: 'Storage', value: '18L Boot Space' },
        { label: 'Lights', value: 'LED Headlight & Taillight' },
        { label: 'Keyless', value: 'Proximity Unlock' }
      ]
    }
  },
  {
    id: 3,
    name: 'Metro Swift',
    tagline: 'Swift moves for the modern commuter.',
    price: '$749',
    range: '35 miles',
    topSpeed: '22 mph',
    charging: '2.5 hours',
    mainImage:
      'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=800&h=600&fit=crop',
    highlights: [
      { label: 'Range', value: '35 miles' },
      { label: 'Top Speed', value: '22 mph' },
      { label: 'Charging', value: '2.5 hours' }
    ],
    colorVariants: {
      black: {
        name: 'Matte Black',
        hex: '#1F2937',
        images: [
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop'
        ]
      },
      red: {
        name: 'Racing Red',
        hex: '#DC2626',
        images: [
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop'
        ]
      },
      white: {
        name: 'Pearl White',
        hex: '#F9FAFB',
        images: [
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop'
        ]
      }
    },
    specifications: {
      overview: [
        { label: 'Model', value: 'Metro Swift' },
        { label: 'Motor Type', value: 'Hub Motor' },
        { label: 'Warranty', value: '1 Year / 20,000 km' },
        { label: 'Payload Capacity', value: '110 kg' },
        { label: 'Braking System', value: 'Drum Brake (Front & Rear)' },
        { label: 'Suspension', value: 'Telescopic (Front), Spring (Rear)' }
      ],
      battery: [
        { label: 'Battery Type', value: 'Lithium-ion' },
        { label: 'Battery Capacity', value: '1.5 kWh' },
        { label: 'Charging Time', value: '2.5 hours (0-100%)' },
        { label: 'Fast Charging', value: 'Not Supported' },
        { label: 'Battery Life', value: '20,000 km / 4 Years' },
        { label: 'Charger Type', value: 'Standard Charger' }
      ],
      performance: [
        { label: 'Top Speed', value: '22 mph' },
        { label: 'Range (IDC)', value: '35 miles' },
        { label: 'Real World Range', value: '28 miles' },
        { label: 'Acceleration', value: '0-22 mph in 6.0s' },
        { label: 'Motor Power', value: '1.0 kW (Peak: 1.8 kW)' },
        { label: 'Riding Modes', value: 'Eco, Ride' }
      ],
      dimensions: [
        { label: 'Length', value: '1680 mm' },
        { label: 'Width', value: '660 mm' },
        { label: 'Height', value: '1080 mm' },
        { label: 'Wheelbase', value: '1170 mm' },
        { label: 'Seat Height', value: '750 mm' },
        { label: 'Ground Clearance', value: '130 mm' }
      ],
      features: [
        { label: 'Display', value: '4-inch LCD' },
        { label: 'Connectivity', value: 'Bluetooth' },
        { label: 'Navigation', value: 'Not Available' },
        { label: 'Storage', value: '12L Boot Space' },
        { label: 'Lights', value: 'LED Headlight & Taillight' },
        { label: 'Keyless', value: 'Key Start' }
      ]
    }
  },
  {
    id: 4,
    name: 'Velocity Max',
    tagline: 'Maximum speed. Maximum thrill.',
    price: '$1,599',
    range: '75 miles',
    topSpeed: '30 mph',
    charging: '4 hours',
    mainImage:
      'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=800&h=600&fit=crop',
    highlights: [
      { label: 'Range', value: '75 miles' },
      { label: 'Top Speed', value: '30 mph' },
      { label: 'Charging', value: '4 hours' }
    ],
    colorVariants: {
      black: {
        name: 'Matte Black',
        hex: '#1F2937',
        images: [
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop'
        ]
      },
      darkGray: {
        name: 'Dark Gray',
        hex: '#4B5563',
        images: [
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
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
    },
    specifications: {
      overview: [
        { label: 'Model', value: 'Velocity Max' },
        { label: 'Motor Type', value: 'Mid-Drive Motor' },
        { label: 'Warranty', value: '3 Years / 50,000 km' },
        { label: 'Payload Capacity', value: '150 kg' },
        { label: 'Braking System', value: 'Disc Brake (Front & Rear)' },
        { label: 'Suspension', value: 'Hydraulic (Front), Dual Shock (Rear)' }
      ],
      battery: [
        { label: 'Battery Type', value: 'Lithium-ion' },
        { label: 'Battery Capacity', value: '3.5 kWh' },
        { label: 'Charging Time', value: '4 hours (0-100%)' },
        { label: 'Fast Charging', value: '90 min (0-80%)' },
        { label: 'Battery Life', value: '50,000 km / 8 Years' },
        { label: 'Charger Type', value: 'Smart Fast Charger' }
      ],
      performance: [
        { label: 'Top Speed', value: '30 mph' },
        { label: 'Range (IDC)', value: '75 miles' },
        { label: 'Real World Range', value: '62 miles' },
        { label: 'Acceleration', value: '0-30 mph in 3.8s' },
        { label: 'Motor Power', value: '3.5 kW (Peak: 7 kW)' },
        { label: 'Riding Modes', value: 'Eco, Ride, Sport, Hyper' }
      ],
      dimensions: [
        { label: 'Length', value: '1870 mm' },
        { label: 'Width', value: '730 mm' },
        { label: 'Height', value: '1160 mm' },
        { label: 'Wheelbase', value: '1295 mm' },
        { label: 'Seat Height', value: '785 mm' },
        { label: 'Ground Clearance', value: '160 mm' }
      ],
      features: [
        { label: 'Display', value: '7-inch TFT Touchscreen' },
        { label: 'Connectivity', value: 'Bluetooth, 4G, WiFi' },
        { label: 'Navigation', value: 'Turn-by-turn Navigation' },
        { label: 'Storage', value: '22L Boot Space' },
        { label: 'Lights', value: 'LED Headlight & Taillight' },
        { label: 'Keyless', value: 'Proximity Unlock & Start' }
      ]
    }
  },
  {
    id: 5,
    name: 'Eco Rider S2',
    tagline: 'Go green. Go further.',
    price: '$649',
    range: '30 miles',
    topSpeed: '20 mph',
    charging: '2 hours',
    mainImage:
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
    highlights: [
      { label: 'Range', value: '30 miles' },
      { label: 'Top Speed', value: '20 mph' },
      { label: 'Charging', value: '2 hours' }
    ],
    colorVariants: {
      green: {
        name: 'Forest Green',
        hex: '#166534',
        images: [
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop'
        ]
      },
      black: {
        name: 'Matte Black',
        hex: '#1F2937',
        images: [
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop'
        ]
      },
      white: {
        name: 'Pearl White',
        hex: '#F9FAFB',
        images: [
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop'
        ]
      }
    },
    specifications: {
      overview: [
        { label: 'Model', value: 'Eco Rider S2' },
        { label: 'Motor Type', value: 'Hub Motor' },
        { label: 'Warranty', value: '1 Year / 20,000 km' },
        { label: 'Payload Capacity', value: '100 kg' },
        { label: 'Braking System', value: 'Drum Brake (Front & Rear)' },
        { label: 'Suspension', value: 'Telescopic (Front), Spring (Rear)' }
      ],
      battery: [
        { label: 'Battery Type', value: 'Lithium-ion' },
        { label: 'Battery Capacity', value: '1.2 kWh' },
        { label: 'Charging Time', value: '2 hours (0-100%)' },
        { label: 'Fast Charging', value: 'Not Supported' },
        { label: 'Battery Life', value: '20,000 km / 4 Years' },
        { label: 'Charger Type', value: 'Standard Charger' }
      ],
      performance: [
        { label: 'Top Speed', value: '20 mph' },
        { label: 'Range (IDC)', value: '30 miles' },
        { label: 'Real World Range', value: '24 miles' },
        { label: 'Acceleration', value: '0-20 mph in 7.0s' },
        { label: 'Motor Power', value: '0.8 kW (Peak: 1.5 kW)' },
        { label: 'Riding Modes', value: 'Eco, Ride' }
      ],
      dimensions: [
        { label: 'Length', value: '1650 mm' },
        { label: 'Width', value: '650 mm' },
        { label: 'Height', value: '1060 mm' },
        { label: 'Wheelbase', value: '1150 mm' },
        { label: 'Seat Height', value: '740 mm' },
        { label: 'Ground Clearance', value: '125 mm' }
      ],
      features: [
        { label: 'Display', value: '3.5-inch LCD' },
        { label: 'Connectivity', value: 'Bluetooth' },
        { label: 'Navigation', value: 'Not Available' },
        { label: 'Storage', value: '10L Boot Space' },
        { label: 'Lights', value: 'LED Headlight & Taillight' },
        { label: 'Keyless', value: 'Key Start' }
      ]
    }
  },
  {
    id: 6,
    name: 'Thunder Elite',
    tagline: 'Unleash the power within.',
    price: '$1,899',
    range: '90 miles',
    topSpeed: '32 mph',
    charging: '4.5 hours',
    mainImage:
      'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=800&h=600&fit=crop',
    highlights: [
      { label: 'Range', value: '90 miles' },
      { label: 'Top Speed', value: '32 mph' },
      { label: 'Charging', value: '4.5 hours' }
    ],
    colorVariants: {
      black: {
        name: 'Matte Black',
        hex: '#1F2937',
        images: [
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop'
        ]
      },
      darkGray: {
        name: 'Dark Gray',
        hex: '#4B5563',
        images: [
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop'
        ]
      },
      silver: {
        name: 'Silver Gray',
        hex: '#9CA3AF',
        images: [
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop'
        ]
      },
      white: {
        name: 'Pearl White',
        hex: '#F9FAFB',
        images: [
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1611635725643-fa21f16b7c87?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=400&h=300&fit=crop'
        ]
      }
    },
    specifications: {
      overview: [
        { label: 'Model', value: 'Thunder Elite' },
        { label: 'Motor Type', value: 'Mid-Drive Motor' },
        { label: 'Warranty', value: '3 Years / 60,000 km' },
        { label: 'Payload Capacity', value: '160 kg' },
        { label: 'Braking System', value: 'Disc Brake (Front & Rear)' },
        { label: 'Suspension', value: 'Hydraulic (Front), Dual Shock (Rear)' }
      ],
      battery: [
        { label: 'Battery Type', value: 'Lithium-ion' },
        { label: 'Battery Capacity', value: '4.0 kWh' },
        { label: 'Charging Time', value: '4.5 hours (0-100%)' },
        { label: 'Fast Charging', value: '80 min (0-80%)' },
        { label: 'Battery Life', value: '60,000 km / 10 Years' },
        { label: 'Charger Type', value: 'Smart Fast Charger' }
      ],
      performance: [
        { label: 'Top Speed', value: '32 mph' },
        { label: 'Range (IDC)', value: '90 miles' },
        { label: 'Real World Range', value: '75 miles' },
        { label: 'Acceleration', value: '0-32 mph in 3.0s' },
        { label: 'Motor Power', value: '4.0 kW (Peak: 8 kW)' },
        { label: 'Riding Modes', value: 'Eco, Ride, Sport, Hyper, Track' }
      ],
      dimensions: [
        { label: 'Length', value: '1900 mm' },
        { label: 'Width', value: '740 mm' },
        { label: 'Height', value: '1170 mm' },
        { label: 'Wheelbase', value: '1310 mm' },
        { label: 'Seat Height', value: '790 mm' },
        { label: 'Ground Clearance', value: '165 mm' }
      ],
      features: [
        { label: 'Display', value: '8-inch TFT Touchscreen' },
        { label: 'Connectivity', value: 'Bluetooth, 4G, WiFi' },
        { label: 'Navigation', value: 'Advanced Turn-by-turn Navigation' },
        { label: 'Storage', value: '25L Boot Space' },
        { label: 'Lights', value: 'Adaptive LED Headlight & Taillight' },
        { label: 'Keyless', value: 'Proximity Unlock, Start & Remote Lock' }
      ]
    }
  }
];

export const getScooterById = (id) =>
  scooters.find((s) => s.id === Number(id)) || null;

export default scooters;
