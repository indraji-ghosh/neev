import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from '../../assets/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:flex w-full justify-center pt-6 fixed top-0 z-30">
        <nav
          className="
          flex items-center gap-8
          px-6 py-3
          rounded-2xl
          bg-black/80
          backdrop-blur-md
          border border-white/20
          shadow-lg
        "
        >
          {/* Logo */}
          <div className="flex items-center gap-2 text-bl font-medium">
            <div className="rounded-md bg-white/10 flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-20" />
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-white/90">
            <a className="hover:text-white transition cursor-pointer">Home</a>
            <a className="hover:text-white transition cursor-pointer">Scooters</a>
            <a className="hover:text-white transition cursor-pointer">Contact</a>
          </div>

          {/* Button */}
          <button
            className="
            ml-4
            px-4 py-2
            font-bold
            rounded-xl
            bg-white/90
            text-black
            text-sm
            hover:bg-black
            transition
          "
          >
           Book a Test Ride
          </button>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 p-4">
        <div className="flex items-center justify-between bg-black backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-lg">
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
          <div className="mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg overflow-hidden">
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
                bg-black/90
                text-white
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
