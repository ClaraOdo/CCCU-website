import React from 'react';
import { Users, Heart, Globe, Award, Mail, Phone } from 'lucide-react';

const SpoonTeam = () => {
  const spoonTeamMembers = [
    {
      name: "Namususwa Lorna Mary",
      role: "Master trainer ARU/CCCU",
      // description: "Leading SPOON's nutrition initiatives with expertise in child nutrition and digital health tools.",
      image: "/spoon_team/namususwa-1000x1000-1.png",
      expertise: ["Child Nutrition", "Digital Health", "Program Leadership"]
    },
    {
      name: "LUTGARD MUSIIME",
      role: "Nutrition Master Trainer – ARU/CCCU",
      // description: "Certified nutrition assessment specialist training caregivers across 18 CCCU sites.",
      image: "/spoon_team/LUTGARD-1000x1000-1.png",
      expertise: ["Nutrition Training", "Assessment Tools", "Caregiver Education"]
    },
    {
      name: "PAMELA MAGERO",
      role: "Master Trainer ARU/CCCU",
      // description: "Coordinating nutrition monitoring and equipment distribution across child care institutions.",
      image: "/spoon_team/Pamella-1000x1000-1.png",
      expertise: ["Child Nutrition", "Digital Health", "Program Leadership"]
    },
    {
      name: "DOREEN ALUPO",
      role: "Master Trainer ARU/CCCU",
      // description: "Developing feeding guidelines and protocols for children with disabilities and feeding difficulties.",
      image: "/spoon_team/Dooren-1000x1000-1.png",
      expertise: ["Child Nutrition", "Digital Health", "Program Leadership"]
    }
  ];

  const achievements = [
    { number: "70+", label: "Staff Trained", description: "Through Master Trainers program" },
    { number: "18", label: "Active Sites", description: "CCIs, community centers, and schools" },
    { number: "50%", label: "Anemia Reduction", description: "From 78% to 28%" },
    { number: "25%", label: "Underweight Reduction", description: "From 48% to 23%" }
  ];

  return (
    <section id="spoon-team" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">SPOON Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals working to improve nutrition outcomes for vulnerable children
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {spoonTeamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Achievements */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Team Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">{achievement.number}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.label}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Global Partnership</h3>
                <p className="text-emerald-600 font-medium">SPOON & ARU-CCCU</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our SPOON team represents a unique collaboration between international nutrition experts 
              and local Ugandan professionals, working together since 2016 to transform child nutrition outcomes.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Master Trainers certified in nutrition assessment</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Digital health tool specialists</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Policy advocacy coordinators</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Team Expertise</h3>
                <p className="text-blue-600 font-medium">Specialized Skills</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team combines deep expertise in child nutrition, disability care, digital health 
              technologies, and community-based intervention strategies.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
                <p className="text-sm text-gray-700">Project Phases</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">2016</div>
                <p className="text-sm text-gray-700">Since</p>
              </div>
            </div>
          </div>
        </div>

        {/* Training Programs */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 lg:p-12 border-2 border-emerald-200 mb-16">
          <div className="text-center mb-8">
            <div className="bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Training Programs</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our Master Trainers program has equipped over 70 CCI staff with essential nutrition knowledge and skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-2">Nutrition Assessment</div>
              <p className="text-gray-700 font-medium">Growth monitoring techniques</p>
              <p className="text-sm text-gray-600 mt-2">Using weighing scales, height boards, MUAC tapes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-2">Digital Tools</div>
              <p className="text-gray-700 font-medium">Count Me In platform</p>
              <p className="text-sm text-gray-600 mt-2">Digital health tool for monitoring and assessment</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-2">Feeding Practices</div>
              <p className="text-gray-700 font-medium">Specialized care protocols</p>
              <p className="text-sm text-gray-600 mt-2">For children with disabilities and feeding difficulties</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
          <div className="bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect with SPOON Team</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our SPOON team is committed to sharing knowledge and collaborating on nutrition initiatives 
            for vulnerable children across Uganda and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:spoon@cccu.org"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              Contact SPOON Team
            </a>
            <a
              href="tel:+256"
              className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpoonTeam;