import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-emerald-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/new logo for cccu.jpg" 
              alt="CCCU Logo" 
              className="h-32 w-32 rounded-full object-cover shadow-xl border-4 border-white"
            />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Catholic Care for Children
            <span className="block text-emerald-600">in Uganda (CCCU)</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transforming child care and protection through faith-based initiatives, 
            empowering Religious Institutes to champion the welfare of vulnerable children across Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
            </a>
            <a
              href="#milestones"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200"
            >
              Our Progress
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-emerald-600" />
      </div>
    </section>
  );
};

export default Hero;