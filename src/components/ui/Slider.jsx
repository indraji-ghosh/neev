import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slide1image from '../../assets/slideImage1.png';
import slide1imageMobile from '../../assets/slideImage1mobile.png';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);

  const slides = [
    {
      title: "It's easy to own an Ather.",
      mobileImage: slide1imageMobile,
      tabletImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
      desktopImage: slide1image,
      buttons: [
        { text: "Book a Testride", primary: true },
        // { text: "Request a call back", primary: false }
      ]
    },
    {
      title: "Experience the Future of Mobility",
      mobileImage: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=1200&fit=crop",
      tabletImage: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=1200&h=800&fit=crop",
      desktopImage: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=1920&h=800&fit=crop",
      buttons: [
        { text: "Explore models", primary: true },
        { text: "Find a store", primary: false }
      ]
    },
    {
      title: "Ride Smart, Ride Electric",
      mobileImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=1200&fit=crop",
      tabletImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200&h=800&fit=crop",
      desktopImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1920&h=800&fit=crop",
      buttons: [
        { text: "Learn more", primary: true },
        { text: "Get in touch", primary: false }
      ]
    }
  ];

const features = [
  "Real-time ride tracking",
  "Smart mobile app connectivity",
  "Fast charging technology",
  "Regenerative braking system",
  "Anti-theft GPS protection",
  "Reverse assist mode",
  "Digital dashboard with navigation",
  "Long-range lithium battery",
  "Cruise control for smooth rides",
  "Over-the-air (OTA) updates"
];


  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;
      
      const slideWidth = slider.offsetWidth;
      const scrollPosition = slider.scrollLeft;
      const currentIndex = Math.round(scrollPosition / slideWidth);
      const nextIndex = (currentIndex + 1) % slides.length;
      
      slider.scrollTo({
        left: slideWidth * nextIndex,
        behavior: 'smooth'
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Scroll observer to update current slide indicator
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const slideWidth = slider.offsetWidth;
      const scrollPosition = slider.scrollLeft;
      const index = Math.round(scrollPosition / slideWidth);
      setCurrentSlide(index);
    };

    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const slideWidth = slider.offsetWidth;
    slider.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const slideWidth = slider.offsetWidth;
    const scrollPosition = slider.scrollLeft;
    const currentIndex = Math.round(scrollPosition / slideWidth);
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const slideWidth = slider.offsetWidth;
    const scrollPosition = slider.scrollLeft;
    const currentIndex = Math.round(scrollPosition / slideWidth);
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  };

  return (
      <div className="relative w-full h-screen bg-black">
        {/* Slides Container with Snap Scroll */}
        <div 
          ref={sliderRef}
          className="flex w-full h-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full snap-center snap-always relative"
            >
              {/* Background Images - Responsive */}
              <picture className="absolute inset-0">
                {/* Desktop */}
                <source
                  media="(min-width: 1024px)"
                  srcSet={slide.desktopImage}
                />
                {/* Tablet */}
                <source
                  media="(min-width: 640px)"
                  srcSet={slide.tabletImage}
                />
                {/* Mobile */}
                <img
                  src={slide.mobileImage}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </picture>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end items-center text-white px-4 sm:my-25 my-10 sm:px-6 lg:px-8">
                {/* Buttons */}
                <div className="flex  sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
                  {slide.buttons.map((button, btnIndex) => (
                    <button
                      key={btnIndex}
                      className={`px-6 sm:px-6 py-3 sm:py-3 rounded-full text-base sm:text-md font-semibold transition-all duration-300  ${
                        button.primary
                          ? 'bg-white text-black hover:bg-gray-100'
                          : 'bg-black/90 text-white   hover:bg-white hover:text-black backdrop-blur-sm'
                      }`}
                    >
                      {button.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-12 sm:bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8 sm:w-12'
                  : 'bg-white/50 w-2 sm:w-3 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Features Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-md border-t border-white/10">
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of features */}
              {features.map((feature, index) => (
                <div
                  key={`feature-1-${index}`}
                  className="flex items-center gap-3 px-6 sm:px-8 py-4 sm:py-6 whitespace-nowrap"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span className="text-white text-sm sm:text-base font-medium">
                    {feature}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {features.map((feature, index) => (
                <div
                  key={`feature-2-${index}`}
                  className="flex items-center gap-3 px-6 sm:px-8 py-4 sm:py-6 whitespace-nowrap"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span className="text-white text-sm sm:text-base font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}