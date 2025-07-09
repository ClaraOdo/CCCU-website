import React from 'react';
import { CheckCircle, Users, BookOpen, Briefcase, Globe } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: BookOpen,
      title: "From Institutions to Homes",
      description: "We’ve helped shift the tide from institutional care to family-based care, enabling children once living in residential homes to grow up in environments where they are seen, loved, and guided. Their laughter now echoes in homes, not halls—because every child deserves to belong.",
      color: "orange"
    },
    {
      icon: Briefcase,
      title: "Champions of Change",
      description: "Over the years, more than 1,250 Religious men and women have stepped forward to be trained in child protection and social work. Ninety-six have pursued advanced studies. These Sisters and Brothers are not only caregivers—they are advocates, reformers, and lifelines for children in need.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Legal Recognition, National Transformation",
      description: "Back in 2016, only two child care institutions (CCIs) under Religious leadership were legally registered. Today, all 42 programs operate with full legal status. This isn’t just a bureaucratic win—it’s a signal that care rooted in love and professionalism is now aligned with national and global standards.",
      color: "purple"
    },
    {
      icon: Globe,
      title: "Repurposing for Community Good",
      description: "As children return to families, CCCU has guided the transformation of institutional spaces into vibrant community resources. Kindergartens, secondary schools, and day-care centres now stand where once there were dormitories—ensuring that no space meant for children ever goes to waste.",
      color: "white"
    },
    {
      icon: CheckCircle,
      title: "Nurturing Resilience in Families",
      description: "We’ve supported over 200 families with small grants to start businesses and strengthen their livelihoods. The results are visible in improved meals, better hygiene, access to medical care, and children who are thriving—not just surviving.",
      color: "white"
    },
    {
      icon: Globe,
      title: "Laying Foundations Through Parenting",
      description: "With ten parenting modules rolled out across communities, thousands of caregivers have gained the skills to raise their children with understanding, discipline, and affection. These teachings have sparked healthier relationships and brought stability into homes once at risk of falling apart.",
      color: "white"
    },
    {
      icon: Users,
      title: "Nurturing Resilience in Families",
      description: "We’ve supported over 200 families with small grants to start businesses and strengthen their livelihoods. The results are visible in improved meals, better hygiene, access to medical care, and children who are thriving—not just surviving.",
      color: "orange"
    },
    {
      icon: Briefcase,
      title: "A Model for the Continent",
      description: "CCCU has become a living example of what faith-led care reform can achieve. Countries like Kenya, Zambia, and Malawi now look to Uganda for inspiration. Our journey has been captured in reports shared across languages and continents, proving that humble beginnings can lead to global influence.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Stronger Together",
      description: "None of this could have happened alone. With trusted partners—universities, international consultants, nutrition experts, and government ministries—we’ve tackled malnutrition, streamlined case management, trained foster parents, and introduced digital systems to protect children better and respond faster.",
      color: "purple"
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
        icon: "bg-orange-300",
        border: "border-orange-200"
      },
      white: {
        bg: "from-white-50 to-white-100",
        icon: "bg-yellow-600",
        border: "border-white-200"
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
            At Catholic Care for Children in Uganda (CCCU), we don’t just count the number of children
            served—we celebrate the lives restored, families reunited, and futures reimagined. Every
            milestone reflects a journey of hope, faith, and the quiet determination to do better for Uganda’s
            most vulnerable children.
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

           <div className="mt-16 bg-emerald-50 rounded-2xl p-8 lg:p-12 border-2 border-emerald-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Faith in Action. Hope in Every Child.</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p>
                Our achievements are not just about programs completed or policies influenced. They are about children who found their way back home. About Sisters who discovered new ways to live their Charism. About families that stood when they could have fallen. About communities that now see care, not as charity, but as responsibility.
              </p>
            </div>
            <div>
              <p>
                We celebrate these milestones with gratitude—and we look to the future with courage. Because as long as there are children in need of love and safety, our work continues.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
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
        </div> */}

       
      </div>
    </section>
  );
};

export default Achievements;