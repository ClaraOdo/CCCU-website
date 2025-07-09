import React from 'react';

const Newsletter = () => (
  <section id="newsletter" className="py-20 bg-emerald-50 scroll-mt-24">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-emerald-700 mb-4">The Restored Lives</h2>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">CCCU’s Biannual Newsletter</h3>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to The Restored Lives—your window into the heart of our mission.<br/>
        Every six months, we bring you stories of transformation, milestones achieved, and the voices of children finding home and hope.<br/>
        From reintegration successes to community breakthroughs, our updates reflect the strength of faith in action.<br/>
        Meet the Sisters, caregivers, and families driving change across Uganda.<br/>
        Explore new partnerships, training highlights, and policy shifts shaping child care reform.<br/>
        Celebrate with us as we repurpose institutions, empower families, and build resilient communities.<br/>
        Stay informed, inspired, and involved in the journey toward family-based care.<br/>
        Together, we are creating a future where every child belongs in a loving home.
      </p>
      <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-lg"
        />
        <button
          type="submit"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

export default Newsletter; 