import React from 'react';
import { CheckCircle, Users, BookOpen, Briefcase, Globe } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: BookOpen,
      title: "Child Safeguarding Policy",
      description: "The child safeguarding policy was reviewed and 37 Administrators and social workers were oriented on it.",
      color: "emerald"
    },
    {
      icon: Briefcase,
      title: "Resource Mobilization",
      description: "The Resource Mobilization Officer has successfully supported 15 Child Care Institutions.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Capacity Building Workshops",
      description: "We have conducted several workshops to enhance skills and knowledge of our stakeholders.",
      color: "purple"
    },
    {
      icon: Globe,
      title: "Field Work Implementation",
      description: "Extensive field works have been conducted to ensure direct impact and community engagement.",
      color: "orange"
    },
    {
      icon: CheckCircle,
      title: "International Partnership",
      description: "Daniel and Sarah from GHR Foundation visited us, strengthening our international partnerships.",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "from-emerald-50 to-emerald-100",
        icon: "bg-emerald-600",
        border: "border-emerald-200"
      },
      blue: {
        bg: "from-blue-50 to-blue-100",
        icon: "bg-blue-600", 
        border: "border-blue-200"
      },
      purple: {
        bg: "from-purple-50 to-purple-100",
        icon: "bg-purple-600",
        border: "border-purple-200"
      },
      orange: {
        bg: "from-orange-50 to-orange-100",
        icon: "bg-orange-600",
        border: "border-orange-200"
      },
      green: {
        bg: "from-green-50 to-green-100",
        icon: "bg-green-600",
        border: "border-green-200"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Significant milestones and accomplishments in our journey to transform child care in Uganda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const colorClasses = getColorClasses(achievement.color);
            const IconComponent = achievement.icon;
            
            return (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${colorClasses.bg} rounded-2xl p-8 border-2 ${colorClasses.border} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`${colorClasses.icon} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Impact Summary</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">37</div>
                <p className="text-gray-700">Administrators & Social Workers Trained</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
                <p className="text-gray-700">Child Care Institutions Supported</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
                <p className="text-gray-700">Workshop Participants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;