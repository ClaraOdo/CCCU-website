import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    // AMECEA
    {
      type: 'image',
      src: '/Gallery/AMECEA/IMG_0468-1024x683.jpg',
      title: 'AMECEA Gathering',
      description: 'Event at AMECEA - CCCU community engagement.'
    },
    {
      type: 'image',
      src: '/Gallery/AMECEA/IMG_0448-1024x683.jpg',
      title: 'AMECEA Group',
      description: 'Group photo at AMECEA event.'
    },
    {
      type: 'image',
      src: '/Gallery/AMECEA/IMG_0444-1024x683.jpg',
      title: 'AMECEA Session',
      description: 'Session in progress at AMECEA.'
    },
    // Training-field
    {
      type: 'image',
      src: '/Gallery/Training-field/IMG_2106-1024x573.jpg',
      title: 'Field Training',
      description: 'Hands-on training session in the field.'
    },
    {
      type: 'image',
      src: '/Gallery/Training-field/IMG_2109-1024x492.jpg',
      title: 'Training Discussion',
      description: 'Interactive discussion during field training.'
    },
    {
      type: 'image',
      src: '/Gallery/Training-field/IMG_2112-1024x573.jpg',
      title: 'Team Learning',
      description: 'Team members learning together in the field.'
    },
    {
      type: 'image',
      src: '/Gallery/Training-field/IMG_2118-1024x573.jpg',
      title: 'Training Collaboration',
      description: 'Collaborative training activity outdoors.'
    },
    // Iganga Case Closure
    {
      type: 'image',
      src: '/Gallery/Iganga_case_closure/IMG_0204-1536x1024.jpg',
      title: 'Iganga Case Closure',
      description: 'Case closure event in Iganga.'
    },
    {
      type: 'image',
      src: '/Gallery/Iganga_case_closure/IMG_0161-1536x1024.jpg',
      title: 'Iganga Community',
      description: 'Community gathering in Iganga.'
    },
    {
      type: 'image',
      src: '/Gallery/Iganga_case_closure/IMG_0152-1536x1024.jpg',
      title: 'Iganga Ceremony',
      description: 'Ceremony at Iganga case closure.'
    },
    {
      type: 'image',
      src: '/Gallery/Iganga_case_closure/IMG_0137-1536x1024.jpg',
      title: 'Iganga Smiles',
      description: 'Smiles and joy at Iganga event.'
    },
    // Jinja Soap
    {
      type: 'image',
      src: '/Gallery/Jinja_soap/IMG_9998-1024x573.jpg',
      title: 'Jinja Soap Project',
      description: 'Soap making project in Jinja.'
    },
    {
      type: 'image',
      src: '/Gallery/Jinja_soap/IMG_9954-1024x573.jpg',
      title: 'Jinja Soap Team',
      description: 'Teamwork at Jinja soap project.'
    },
    {
      type: 'image',
      src: '/Gallery/Jinja_soap/IMG_9949-1024x573.jpg',
      title: 'Jinja Soap Process',
      description: 'Soap production process in Jinja.'
    },
    {
      type: 'image',
      src: '/Gallery/Jinja_soap/IMG_9935-1024x573.jpg',
      title: 'Jinja Soap Smiles',
      description: 'Smiles at the Jinja soap project.'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visual stories of our impact, events, and the children we serve across Uganda
          </p>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl text-center border-2 border-emerald-200">
            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Image className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Photo Gallery</h3>
            <p className="text-gray-700">
              Capturing moments of joy, learning, and growth in our child care institutions
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center border-2 border-blue-200">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Video Stories</h3>
            <p className="text-gray-700">
              Documentary footage of our programs, training sessions, and community impact
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center border-2 border-purple-200">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Event Coverage</h3>
            <p className="text-gray-700">
              Behind-the-scenes moments from workshops, visits, and milestone celebrations
            </p>
          </div>
        </div> */}

        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/UBilaeB9NbI"
              title="CCCU Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="h-5 w-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gallery Statistics</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <p className="text-gray-700">Photos Captured</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700">Events Documented</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <p className="text-gray-700">Training Sessions</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">18</div>
              <p className="text-gray-700">Sites Covered</p>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-200 z-10"
              >
                <X className="h-6 w-6" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <img
                src={galleryItems[selectedImage].src}
                alt={galleryItems[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <h4 className="text-xl font-bold mb-2">{galleryItems[selectedImage].title}</h4>
                <p className="text-sm opacity-90">{galleryItems[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;