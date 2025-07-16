import React from 'react';

const resources = [
  { name: 'Child Safeguarding Policy 2024', file: '/resources/CHILD SAFE GUARDING POLICY.pdf' },
  { name: 'Job Aids', file: '/resources/JOB AIDS BOOKLET.pdf' },
  { name: 'Case Management Booklet (CCCU version 2020)', file: '/resources/CASE MANAGEMENT BOOKLET.pdf' },
  { name: 'Case Management Booklet (Separated Children 2019)', file: '/resources/MGLSD CM TOOLS FOR SEPERATED CHILDREN FOR REINTERGRATION - 2023.pdf' },
  { name: 'Case Management Booklet (Child Programming 2019)', file: '/resources/MGLSD CASE MANAGEMENT SOPS & TOOLS FOR CHILD PROGRAMMING - 2019.pdf' },
  { name: 'Children Act', file: '/resources/THE CHILDREN (AMENDMENT) ACT, 2016.pdf' },
  { name: 'Panel Code Act', file: '/resources/Penal Code Act.pdf' },
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