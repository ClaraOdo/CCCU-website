import React from 'react';
import { Users, Mail, Phone, Award, Heart, BookOpen } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sr. Euphrasia Masika, DST",
      role: "National Program Director, ARU-CCCU",
      description: "Leading CCCU's strategic direction and program implementation with extensive experience in child protection and Religious leadership.",
      image: "/team_images/eupharasia-masika-1000x1000-1.png",
      expertise: ["Program Leadership", "Child Protection", "Strategic Planning"]
    },
    {
      name: "Sr. Stella-Maris Kamanzi, OLGC",
      role: "National Program Director, ARU-CCCU",
      description: "Co-directing CCCU programs with expertise in Religious formation and community-based child care initiatives.",
      image: "/team_images/Rev. Sr. Dr. Stella-Maris Kamanzi - OLGC.JPG",
      expertise: ["Religious Formation", "Community Care", "Program Development"]
    },
    {
      name: "Sam Bernard Gumisiriza (Mr.)",
      role: "ICT Manager, Monitoring and Evaluation Officer ARU-CCCU",
      description: "Managing information systems and monitoring program effectiveness through comprehensive evaluation frameworks.",
      image: "/team_images/Sam-1000x900-1.png",
      expertise: ["ICT Management", "Monitoring & Evaluation", "Data Systems"]
    },
    {
      name: "Caroline Nansukusa Ssebakijje (Mrs.)",
      role: "Case Management Officer ARU-CCCU",
      description: "Overseeing individual case management and ensuring proper care coordination for vulnerable children.",
      image: "/team_images/caroline-1000x1000-1.png",
      expertise: ["Case Management", "Child Welfare", "Care Coordination"]
    },
    {
      name: "Emmanuel Epalat (Mr.)",
      role: "Resource Mobilization Manager ARU-CCCU",
      description: "Leading resource mobilization efforts and building strategic partnerships to support CCCU's mission.",
      image: "/team_images/emmanuel-1000x1000-1.png",
      expertise: ["Resource Mobilization", "Partnership Development", "Fundraising"]
    },
    {
      name: "PATRICK KISAAKYE (MR.)",
      role: "Driver, ARU-CCCU",
      description: "In charge of driving neccesities",
      image: "/team_images/patrick-1000x1000-1.png",
      expertise: ["Driving"]
    },
    {
      name: "Sr. Doreen Nalwadda – LSOSF",
      role: "Finance Officer",
      description: "Managing financial operations and ensuring transparent, accountable use of resources for maximum impact.",
      image: "/team_images/SR-DOREEN-NALWADDA-LSOSF-888x1024.jpg",
      expertise: ["Financial Management", "Budget Planning", "Resource Allocation"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals and Religious leaders driving CCCU's mission forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-contain shadow-lg"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-3 text-sm">{member.role}</p>
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

        {/* Leadership Structure */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership Structure</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Executive Leadership</h4>
              <p className="text-gray-600">Catholic Religious Nuns and professional laypeople leading strategic direction</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Program Management</h4>
              <p className="text-gray-600">Specialized teams managing training, field operations, and resource mobilization</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Field Teams</h4>
              <p className="text-gray-600">On-ground coordinators ensuring direct impact and community engagement</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border-2 border-emerald-200">
          <div className="bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect with Our Team</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is always ready to collaborate, share insights, and work together towards 
            transforming child care in Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@cccu.org"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              Contact Our Team
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

export default Team;