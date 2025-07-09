import React from 'react';

const resources = [
  { name: 'Child Safeguarding Policy 2024', file: '' },
  { name: 'Job Aids', file: '' },
  { name: 'Case Management Booklet (CCCU version 2020)', file: '' },
  { name: 'Case Management Booklet (Separated Children 2019)', file: '' },
  { name: 'Case Management Booklet (Child Programming 2019)', file: '' },
  { name: 'Children Act', file: '' },
  { name: 'Panel Code Act', file: '' },
];

const Resources = () => (
  <section id="resources" className="py-20 bg-white scroll-mt-24">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-emerald-700 mb-8 text-center">Resources</h2>
      <ul className="space-y-6">
        {resources.map((res, idx) => (
          <li key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-4 shadow">
            <span className="text-lg font-medium text-gray-800">{res.name}</span>
            {res.file ? (
              <a href={res.file} download className="text-emerald-700 underline font-semibold">Download</a>
            ) : (
              <span className="text-gray-400 italic">File not available</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Resources; 