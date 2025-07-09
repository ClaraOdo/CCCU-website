import React from 'react';
import { Calendar, Users, GraduationCap, Shield } from 'lucide-react';

const Milestones = () => {
  const phases = [
    {
      title: "Phase I",
      period: "2016 - 2021",
      duration: "5 Years",
      icon: GraduationCap,
      color: "emerald",
      description: "Building capacity for Religious to provide the highest quality care possible for children living outside of family care through scholarships in Social Work and Social Administration, training in Child Protection and building commitment towards the Alternative Care Framework.",
      goals: [
        "Train 80 Religious in Social Work and Social Administration",
        "46 with diploma at CCCI level",
        "17 with Bachelors at Institute level", 
        "17 at Masters Level at Institute level"
      ]
    },
    {
      title: "Phase II",
      period: "2018 - 2019",
      duration: "2 Years",
      icon: Shield,
      color: "blue",
      description: "Ensuring that 46 Catholic care institutions exceed the new standards set by the government for running child care institutions. Supporting pilot CCIs to transition to community/family-based care as preparation for mass program rollout.",
      goals: [
        "46 Catholic care institutions exceeding government standards",
        "Pilot transitions to community/family-based care",
        "Add spiritual activities for scholars",
        "Ensure deep roots in faith and spirituality"
      ]
    },
    {
      title: "Phase III",
      period: "2018 - 2019",
      duration: "2 Years",
      icon: Users,
      color: "purple",
      description: "Mass rollout of community/family-based care transitions while maintaining the highest standards for Catholic care institutions and strengthening spiritual formation programs.",
      goals: [
        "Mass program rollout preparation",
        "Community/family-based care transitions",
        "Enhanced spiritual activities",
        "Expression of charism development"
      ]
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
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="milestones" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">Mile Stones</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CCCU program is currently structured in three phases that overlap each other
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => {
            const colorClasses = getColorClasses(phase.color);
            const IconComponent = phase.icon;
            
            return (
              <div key={index} className={`bg-gradient-to-r ${colorClasses.bg} rounded-2xl p-8 border-2 ${colorClasses.border} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`${colorClasses.icon} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                      <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
                        <Calendar className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-600 font-medium">{phase.period}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{phase.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {phase.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Goals:</h4>
                      <ul className="space-y-2">
                        {phase.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Milestones;