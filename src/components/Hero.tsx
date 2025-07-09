import React, { useState, useEffect } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

const sliderImages = [
  '/Gallery/Jinja_soap/IMG_9935-1024x573.jpg',
  '/Gallery/Iganga_case_closure/IMG_0161-1536x1024.jpg',
  '/Gallery/Iganga_case_closure/IMG_0204-1536x1024.jpg',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((current - 1 + sliderImages.length) % sliderImages.length);
  const nextSlide = () => setCurrent((current + 1) % sliderImages.length);

  // Autoplay every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
      {/* Slider as background */}
      <img
        src={sliderImages[current]}
        alt="CCCU Hero Slide"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-700"
        style={{ filter: 'brightness(0.6) blur(0px)' }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Content on top */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
        <img
          src="/new logo for cccu.jpg"
          alt="CCCU Logo"
          className="h-32 w-32 rounded-full object-cover shadow-xl border-4 border-white mb-6"
        />
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Catholic Care for Children
          <span className="block text-emerald-200">in Uganda (CCCU)</span>
        </h1>
        <p className="text-xl lg:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow">
          Transforming child care and protection through faith-based initiatives, empowering Religious Institutes to champion the welfare of vulnerable children across Uganda.
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
            className="border-2 border-emerald-600 text-emerald-200 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200"
          >
            Our Progress
          </a>
        </div>
      </div>
      {/* Slider controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-emerald-600 rounded-full p-3 shadow-lg z-30 hidden sm:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-emerald-600 rounded-full p-3 shadow-lg z-30 hidden sm:block"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-7 w-7" />
      </button>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {sliderImages.map((_, idx) => (
          <span
            key={idx}
            className={`block w-3 h-3 rounded-full ${idx === current ? 'bg-emerald-400' : 'bg-white/60'} border border-emerald-600`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <ArrowDown className="h-6 w-6 text-emerald-200" />
      </div>
    </section>
  );
};

export default Hero;