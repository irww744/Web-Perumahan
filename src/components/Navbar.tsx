import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Unit', href: '#units' },
    { name: 'Fasilitas', href: '#features' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className={`font-playfair font-bold text-xl ${
                isScrolled ? 'text-soft-gray-800' : 'text-white'
              }`}>
                Cluster Kalita
              </h1>
              <p className={`text-xs ${
                isScrolled ? 'text-soft-gray-500' : 'text-white/80'
              }`}>
                Premium Living
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`font-inter font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-soft-gray-700 hover:text-emerald-600'
                    : 'text-white hover:text-emerald-300'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-inter font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Hubungi Marketing
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-lg font-inter font-medium transition-all duration-300 border-2 ${
                isScrolled
                  ? 'border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-emerald-600'
              }`}
            >
              Booking Visit
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-soft-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-soft-gray-200"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-inter font-medium text-soft-gray-700 hover:text-emerald-600 transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-3 pt-4 border-t border-soft-gray-200">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-inter font-medium transition-all duration-300">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Hubungi Marketing
                  </button>
                  <button className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-lg font-inter font-medium transition-all duration-300">
                    Booking Visit
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;