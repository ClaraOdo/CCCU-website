import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/new logo for cccu.jpg" 
                alt="CCCU Logo" 
                className="h-16 w-16 rounded-full object-cover shadow-lg border-2 border-emerald-200"
              />
              <div>
                <h3 className="text-2xl font-bold">CCCU</h3>
                <p className="text-gray-400">Catholic Care for Children in Uganda</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transforming child care and protection through faith-based initiatives, 
              empowering Religious Institutes to champion the welfare of vulnerable children across Uganda.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-emerald-400 font-semibold">Part of ARU</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400">Association of Religious in Uganda</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#milestones" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Milestones</a></li>
              <li><a href="#history" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">History</a></li>
              <li><a href="#achievements" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Achievements</a></li>
              <li><a href="#spoon" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">SPOON Partnership</a></li>
              <li><a href="#newsletter" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Newsletter</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Association of Religious in Uganda</p>
                  <p className="text-gray-400 text-sm">Kampala, Uganda</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:cccucoord@aruconference.org" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  cccucoord@aruconference.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a href="tel:+256 772 576 399" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  +256 772 576 399
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Catholic Care for Children in Uganda (CCCU). All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Supported by the Government</span>
              <span>•</span>
              <span>Partnership with GHR Foundation</span>
              <span>•</span>
              <span>SPOON Global</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;