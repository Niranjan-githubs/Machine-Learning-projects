import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Waves } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigateToPage = (pageName: string) => {
    navigate(`/${pageName}`);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Centered Rounded Navbar */}
      <header className={`fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100'
      }`}>
        <nav className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-2xl border-gray-200' 
            : 'bg-white/80 backdrop-blur-md shadow-lg border-gray-100'
        } rounded-full border w-[95vw] max-w-[1400px]`}>
          <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4 w-full">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0">
              <button onClick={() => navigate('/')} className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                <img
                  src="/logo.png"
                  alt="Veni Enterprises Logo"
                  className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
                  style={{ marginRight: '0.25rem' }}
                />
                <h1 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 whitespace-nowrap font-sans">Swim Designers</h1>
              </button>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center space-x-4 md:space-x-6 flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
              <button onClick={() => navigateToPage('aboutus')} className="text-gray-600 hover:text-gray-900 transition-colors font-semibold text-sm md:text-base py-2 whitespace-nowrap font-sans">
                About Us
              </button>
              <button onClick={() => navigateToPage('ourserv')} className="text-gray-600 hover:text-gray-900 transition-colors font-semibold text-sm md:text-base py-2 whitespace-nowrap font-sans">
                Our Services
              </button>
              <button onClick={() => navigateToPage('top')} className="text-gray-600 hover:text-gray-900 transition-colors font-semibold text-sm md:text-base py-2 whitespace-nowrap font-sans">
                Types of Pools
              </button>
            </div>

            {/* Right Side - Contact Button & Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Contact Button */}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-sky-600 text-white px-3 sm:px-4 md:px-4 py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:from-blue-700 hover:to-sky-700 transition-all duration-300 flex items-center space-x-1 sm:space-x-2 flex-shrink-0 whitespace-nowrap font-sans"
              >
                <span className="hidden sm:inline">Contact Us</span>
                <span className="sm:hidden">Contact</span>
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone size={10} className="sm:w-3 sm:h-3" />
                </div>
              </button>

                              {/* Mobile menu button */}
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600 flex-shrink-0"
                >
                  {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>
          </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
              <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl mx-2">
                <div className="flex flex-col p-4 space-y-3">
                  <button onClick={() => navigateToPage('aboutus')} className="text-left text-gray-300 hover:text-white transition-colors font-medium py-3 px-3 rounded-lg hover:bg-white/10">
                    About Us
                  </button>
                  <button onClick={() => navigateToPage('ourserv')} className="text-left text-gray-300 hover:text-white transition-colors font-medium py-3 px-3 rounded-lg hover:bg-white/10">
                    Our Services
                  </button>
                  <button onClick={() => navigateToPage('top')} className="text-left text-gray-300 hover:text-white transition-colors font-medium py-3 px-3 rounded-lg hover:bg-white/10">
                    Types of Pools
                  </button>
                  <div className="border-t border-white/20 my-2"></div>
                  <button onClick={() => scrollToSection('contact')} className="text-left text-blue-400 hover:text-blue-300 transition-colors font-semibold py-3 px-3 rounded-lg hover:bg-blue-500/10">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
        </nav>
      </header>

      {/* Full-width Header for Scrolled State */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 relative">
              {/* Logo */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <button onClick={() => navigate('/')} className="flex items-center space-x-2 sm:space-x-3">
                  <img
                    src="/logo.png"
                    alt="Swim Designers Logo"
                    className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                  />
                  <h1 className="text-sm sm:text-lg font-bold text-gray-800 font-sans">Swim Designers</h1>
                </button>
              </div>

              {/* Desktop Navigation - Centered */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2">
                <button onClick={() => navigateToPage('aboutus')} className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base">
                  About Us
                </button>
                <button onClick={() => navigateToPage('ourserv')} className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base">
                  Our Services
                </button>
                <button onClick={() => navigateToPage('top')} className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base">
                  Types of Pools
                </button>
              </div>

              {/* Right Side - Contact Button & Mobile Menu */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Contact Button */}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-sky-600 text-white px-3 sm:px-4 py-2 rounded-full font-semibold text-xs sm:text-sm hover:from-blue-700 hover:to-sky-700 transition-all duration-300 flex items-center space-x-1 sm:space-x-2"
                >
                  <span className="hidden sm:inline">Contact Us</span>
                  <span className="sm:hidden">Contact</span>
                  <Phone size={12} className="sm:w-3 sm:h-3" />
                </button>

                {/* Mobile menu button */}
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600 flex-shrink-0"
                >
                  {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown for Scrolled Header */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl mx-2">
            <div className="flex flex-col p-4 space-y-3">
              <button onClick={() => navigateToPage('aboutus')} className="text-left text-gray-300 hover:text-white transition-colors font-medium py-3 px-3 rounded-lg hover:bg-white/10">
                About Us
              </button>
              <button onClick={() => navigateToPage('ourserv')} className="text-left text-gray-300 hover:text-white transition-colors font-medium py-3 px-3 rounded-lg hover:bg-white/10">
                Our Services
              </button>
              <button onClick={() => navigateToPage('top')} className="text-left text-gray-300 hover:text-white transition-colors font-medium py-3 px-3 rounded-lg hover:bg-white/10">
                Types of Pools
              </button>
              <div className="border-t border-white/20 my-2"></div>
              <button onClick={() => scrollToSection('contact')} className="text-left text-blue-400 hover:text-blue-300 transition-colors font-semibold py-3 px-3 rounded-lg hover:bg-blue-500/10">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;