import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-blue-600">Neev</span>
                <svg 
                  className="w-5 h-5 text-green-500" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M11 3L6 13h4l-1 7 5-10h-4l1-7z" />
                </svg>
              </div>
              <span className="text-[10px] text-gray-600 tracking-wide">GREEN ENERGY</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition">
              Book a Test Ride
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-blue-600 px-2 py-2 rounded transition">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-2 py-2 rounded transition">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-2 py-2 rounded transition">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-2 py-2 rounded transition">
                Contact
              </a>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition w-full">
                Book a Test Ride
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header