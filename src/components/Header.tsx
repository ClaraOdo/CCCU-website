import React, { useState } from 'react';
import { Menu, X, DollarSign } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  const navItems = [
    // { name: 'About Us', href: '#about' },
    { name: 'Mile Stones', href: '#milestones' },
    { name: 'Team', href: '#team' },
    // { name: 'History', href: '#history' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Impact', href: '#impact' },
    { name: 'Resources', href: '#resources' },
    { name: 'SPOON', href: '#spoon' },
  ];

  const aboutLinks = [
    { name: 'Mission', href: '#about' },
    { name: 'Vision', href: '#about' },
    { name: 'Goal', href: '#about' },
    { name: 'History', href: '#history' },
    { name: 'Our Partners', href: '#partners' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/new logo for cccu.jpg" 
              alt="CCCU Logo" 
              className="h-16 w-16 rounded-full object-cover shadow-lg border-2 border-emerald-200"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">CCCU</h1>
              <p className="text-sm text-gray-600">Catholic Care for Children</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            {/* About Us Dropdown */}
            <div className="relative group" onMouseEnter={() => setAboutDropdown(true)} onMouseLeave={() => setAboutDropdown(false)}>
              <button
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium focus:outline-none flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={aboutDropdown}
                type="button"
              >
                About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {aboutDropdown && (
                <div className="absolute left-0 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                  {aboutLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium hover:bg-emerald-50 bg-white"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {/* Other nav items */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Donate Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="#donate"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <DollarSign className="h-4 w-4" />
              <span className="hidden sm:inline">Donate</span>
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {/* About Us Section */}
              <div className="border-b border-gray-200 pb-4">
                <div className="text-gray-900 font-semibold mb-2">About Us</div>
                <div className="flex flex-col space-y-2 ml-4">
                  {aboutLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Other nav items */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;