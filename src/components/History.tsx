import React from 'react';
import { Clock, BookOpen, Users, Heart } from 'lucide-react';

const History = () => {
  return (
    <section id="history" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our History</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The journey of CCCU began with a vision to transform child care and protection in Uganda
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200 hidden lg:block"></div>
          
          <div className="space-y-12">
            {/* 2015 - Inception */}
            <div className="relative flex flex-col lg:flex-row items-start gap-6">
              <div className="flex-shrink-0 relative">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -right-2 top-6 w-4 h-4 bg-emerald-600 rounded-full hidden lg:block"></div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 flex-1 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">2015</span>
                  <h3 className="text-2xl font-bold text-gray-900">The Inception</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The inception of CCCU traces back to 2015 at the University of Notre Dame when Kathleen Mahoney 
                  reached out to Sr. Margaret Kubanze, LSOSF, proposing the idea of mobilizing Religious to champion 
                  child protection and care reforms in Uganda. This encounter led to the initiation of two critical studies.
                </p>
              </div>
            </div>

            {/* Studies Conducted */}
            <div className="relative flex flex-col lg:flex-row items-start gap-6">
              <div className="flex-shrink-0 relative">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -right-2 top-6 w-4 h-4 bg-blue-600 rounded-full hidden lg:block"></div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 flex-1 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Studies</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Rapid Assessment Study</h4>
                    <p className="text-gray-700">Assessment of Religious Work with Orphans and Vulnerable Children (OVCs) in Uganda</p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Legal Framework Examination</h4>
                    <p className="text-gray-700">Analysis of emerging legal framework concerning the care of vulnerable children and its implications for caregivers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Findings */}
            <div className="relative flex flex-col lg:flex-row items-start gap-6">
              <div className="flex-shrink-0 relative">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -right-2 top-6 w-4 h-4 bg-purple-600 rounded-full hidden lg:block"></div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 flex-1 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Findings</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Strengths Identified:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Tremendous dedication in caring for OVCs</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Areas for Improvement:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Gaps in human resource capacity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Lack of comprehensive child protection policy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Insufficient income-generating projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Inadequate record-keeping systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 2016 Launch */}
            <div className="relative flex flex-col lg:flex-row items-start gap-6">
              <div className="flex-shrink-0 relative">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 flex-1 shadow-lg border-2 border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">2016</span>
                  <h3 className="text-2xl font-bold text-gray-900">CCCU Launch</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Catholic Care for Children in Uganda (CCCU) was officially launched as an initiative under 
                  the Association of Religious in Uganda (ARU), representing over 7,000 Catholic sisters, 
                  priests, and brothers from 112 Religious Institutes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Led by a capable team of Catholic Religious Nuns and professional laypeople, CCCU began 
                  collaborating with partners like the Opus Group founders, Gerald and Henrietta Rauenhorst (GHR), 
                  bringing transformational energy and optimism to child care reform in Uganda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;