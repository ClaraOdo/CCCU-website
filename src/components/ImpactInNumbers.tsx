import React from 'react';

const ImpactInNumbers = () => (
  <section id="impact-numbers" className="py-20 bg-white scroll-mt-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-emerald-700 mb-8">Impact in Numbers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-lg bg-white">
          <thead>
            <tr className="bg-yellow-100">
              <th className="px-6 py-3 border-b text-lg font-semibold text-gray-800">Type</th>
              <th className="px-6 py-3 border-b text-lg font-semibold text-gray-800">Families</th>
              <th className="px-6 py-3 border-b text-lg font-semibold text-gray-800">Lives Changed</th>
              <th className="px-6 py-3 border-b text-lg font-semibold text-gray-800">Schools</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border-b text-gray-700 font-medium">SCHOOLS </td>
              <td className="px-6 py-4 border-b">2,000</td>
              <td className="px-6 py-4 border-b">4,000</td>
              <td className="px-6 py-4 border-b">17</td>
            </tr>
            <tr className="bg-yellow-50">
              <td className="px-6 py-4 border-b text-gray-700 font-medium">CBPS</td>
              <td className="px-6 py-4 border-b">150</td>
              <td className="px-6 py-4 border-b">1,800</td>
              <td className="px-6 py-4 border-b">5</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b text-gray-700 font-medium">CCIS</td>
              <td className="px-6 py-4 border-b">100</td>
              <td className="px-6 py-4 border-b">1,700</td>
              <td className="px-6 py-4 border-b">17</td>
            </tr>
            <tr className="font-bold bg-yellow-100">
              <td className="px-6 py-4">Total</td>
              <td className="px-6 py-4">2,230</td>
              <td className="px-6 py-4">7,500</td>
              <td className="px-6 py-4">39</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ImpactInNumbers; 