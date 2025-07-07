import React from 'react';
import { TrendingUp, BarChart3, Target, Award, Users, Heart } from 'lucide-react';

const SpoonImpact = () => {
  const nutritionStats = [
    { metric: "Stunting", before: "71%", after: "59%", improvement: "12%", color: "red" },
    { metric: "Underweight", before: "48%", after: "23%", improvement: "25%", color: "orange" },
    { metric: "Wasting", before: "25%", after: "6%", improvement: "19%", color: "yellow" },
    { metric: "Anemia", before: "78%", after: "28%", improvement: "50%", color: "purple" }
  ];

  const programMetrics = [
    { icon: Users, number: "18", label: "Active Sites", description: "CCIs, community centers, and schools" },
    { icon: Award, number: "70+", label: "Staff Trained", description: "Through Master Trainers program" },
    { icon: BarChart3, number: "100%", label: "Equipment Distributed", description: "Growth assessment tools provided" },
    { icon: Target, number: "3", label: "Project Phases", description: "Continuous improvement and scaling" }
  ];

  return (
    <section id="spoon-impact" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">SPOON Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Remarkable improvements in nutrition outcomes for children living outside family care and children with disabilities
          </p>
        </div>

        {/* Nutrition Improvements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nutrition Outcome Improvements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nutritionStats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">{stat.metric}</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xl font-bold text-red-500">{stat.before}</span>
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    <span className="text-xl font-bold text-emerald-500">{stat.after}</span>
                  </div>
                  <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                    -{stat.improvement} reduction
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Metrics */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Program Reach & Scale</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="bg-white border-2 border-emerald-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{metric.number}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h4>
                  <p className="text-gray-600 text-sm">{metric.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Digital Health Tool Impact */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-12 border-2 border-blue-200 mb-16">
          <div className="text-center mb-8">
            <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Count Me In Digital Tool</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our innovative digital health tool has revolutionized nutrition monitoring and feeding difficulties assessment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Real-time</div>
              <p className="text-gray-700 font-medium">Nutrition Monitoring</p>
              <p className="text-sm text-gray-600 mt-2">Instant data collection and analysis</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Enhanced</div>
              <p className="text-gray-700 font-medium">Caregiver Knowledge</p>
              <p className="text-sm text-gray-600 mt-2">Improved feeding practices</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Evidence-based</div>
              <p className="text-gray-700 font-medium">Decision Making</p>
              <p className="text-sm text-gray-600 mt-2">Data-driven interventions</p>
            </div>
          </div>
        </div>

        {/* Policy Impact */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 lg:p-12 border-2 border-emerald-200">
          <div className="text-center mb-8">
            <div className="bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Policy & Systems Impact</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Beyond direct service delivery, SPOON is influencing national policies and guidelines for child nutrition
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Ministry Collaborations</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Ministry of Gender Labor and Social Development - Case management tools review</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Ministry of Health - Feeding guidelines development</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Guidelines Development</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Feeding guidelines for children with disabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Nutrition protocols for children with feeding difficulties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpoonImpact;