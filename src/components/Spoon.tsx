import React from 'react';
import { Heart, TrendingUp, Users, Award, Globe, BarChart3 } from 'lucide-react';

const Spoon = () => {
  const stats = [
    { label: "Stunting Reduction", from: "71%", to: "59%", color: "emerald" },
    { label: "Underweight Reduction", from: "48%", to: "23%", color: "blue" },
    { label: "Wasting Reduction", from: "25%", to: "6%", color: "purple" },
    { label: "Anemia Reduction", from: "78%", to: "28%", color: "orange" }
  ];

  const highlights = [
    {
      icon: Users,
      title: "18 Sites",
      description: "Working with 18 sites under ARU-CCCU network including childcare institutions, community centers, and schools"
    },
    {
      icon: Award,
      title: "70+ Staff Trained",
      description: "Over 70 CCI staff have been trained through our Master Trainers program"
    },
    {
      icon: BarChart3,
      title: "Equipment Distribution",
      description: "Distributed growth assessment equipment including weighing scales, height boards, MUAC tapes, hemocues and cuvettes"
    },
    {
      icon: Globe,
      title: "Policy Impact",
      description: "Contributing to review of case management tools for children living outside family care"
    }
  ];

  return (
    <section id="spoon" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">SPOON Partnership</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A global nonprofit organization working to ensure that children with disabilities and children 
            without family care are reached by systems that prioritize, include, and meet their nutrition and feeding needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border-2 border-emerald-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">About SPOON</h3>
                  <p className="text-emerald-600 font-medium">Since 2016 in Uganda</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                SPOON has been working in Uganda since 2016 in partnership with the Association of Religious 
                through their Catholic Care for Children Uganda (ARU-CCCU) to incorporate nutrition support 
                into family strengthening and reintegration programs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                SPOON's model combines training, digital health tools, and advocacy to strengthen nutrition 
                and feeding practices for children with disabilities and children who are currently, or at 
                risk of, living outside of permanent family care.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Project Phase</h3>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                "Scaling the improving Nutrition outcomes for children living outside family care and children with disabilities"
              </h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                Now in its third phase, the project focuses on improving knowledge of caregivers through 
                nutrition trainings, nutrition monitoring and feeding difficulties assessment using the 
                digital health tool, Count Me In, and advocacy.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Nutrition training for caregivers</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Digital health tool implementation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Advocacy and policy development</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Remarkable Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-semibold text-gray-900 mb-4">{stat.label}</h4>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-red-500">{stat.from}</span>
                  <TrendingUp className="h-5 w-5 text-emerald-500" />
                  <span className="text-2xl font-bold text-emerald-500">{stat.to}</span>
                </div>
                <p className="text-sm text-gray-600">Significant improvement</p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Highlights */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Program Highlights</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 lg:p-12 border-2 border-emerald-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Policy Impact & Future</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Current Contributions</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Review of case management tools for children living outside family care</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Collaboration with Ministry of Gender Labor and Social Development</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Development Initiatives</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Working with Ministry of Health to develop feeding guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Guidelines for children with disabilities and feeding difficulties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spoon;