import React from 'react';

const ContactUs = () => (
  <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-emerald-100 scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-emerald-700 mb-8 text-center">Contact Us</h2>
      <div className="text-lg text-gray-700 max-w-2xl mx-auto mb-6 text-center">
        <p>Email: <a href="mailto:cccucoord@aruconference.org" className="text-emerald-700 underline">cccucoord@aruconference.org</a>, <a href="mailto:cccu2016@gmail.com" className="text-emerald-700 underline">cccu2016@gmail.com</a></p>
        <p>Call us: <span className="font-semibold">+256 772 558 244</span> – Director</p>
        <p>Call us: <span className="font-semibold">+256 772 576 399</span> – National Coordinator</p>
      </div>
      <div className="text-center">
        <h4 className="text-xl font-bold text-gray-900 mb-2">Media Channels</h4>
        <div className="flex flex-col items-center gap-2">
          <a href="https://twitter.com/CCCUOfficial" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">X: Catholic Care for Children in Uganda @CCCUOfficial</a>
          <a href="https://www.youtube.com/@cccu_official" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">YouTube channel: www.youtube.com/@cccu_official</a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs; 