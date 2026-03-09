import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from '../../assets/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:flex w-full sticky top-0 z-30 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-md">
        <nav className="flex items-center w-full px-8 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2 font-medium">
            <div className="flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-16" />
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-white/90 mx-auto">
            <a className="hover:text-white transition cursor-pointer">Home</a>
            <a className="hover:text-white transition cursor-pointer">Scooters</a>
            <a className="hover:text-white transition cursor-pointer">Contact</a>
          </div>

          {/* Button */}
          <button className="px-5 py-2 font-semibold rounded-lg bg-white text-black text-sm hover:bg-white/80 transition">
            Book a Test Ride
          </button>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 left-0 right-0 z-30 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-medium">
            <div className="rounded-md bg-white/20 flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-20" />
            </div>
              <h1 className="text-xl font-bold text-white ml-2">NEEV <span className="text-green-800 font-medium">Green Energy</span></h1>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-black/95 border-t border-white/10 shadow-lg overflow-hidden">
            <div className="flex flex-col p-4 space-y-4">
              <a
                className="text-white/90 hover:text-white transition py-2 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                className="text-white/90 hover:text-white transition py-2 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Scooters
              </a>
              <a
                className="text-white/90 hover:text-white transition py-2 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button
                className="
                w-full
                px-4 py-3
                font-bold
                rounded-xl
                bg-white
                text-black
                text-sm
                hover:bg-black
                transition
              "
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Test Ride
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
