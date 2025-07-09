import React, { useState } from 'react';
import { Users, Mail, Phone, Award, Heart, BookOpen } from 'lucide-react';

const Team = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const teamMembers = [
    {
      name: "Sr. Euphrasia Masika, DST",
      role: "National Program Director, ARU-CCCU",
      description: "Leading CCCU's strategic direction and program implementation with extensive experience in child protection and Religious leadership.",
      image: "/team_images/eupharasia-masika-1000x1000-1.png",
      expertise: ["Program Leadership", "Child Protection", "Strategic Planning"]
    },
    {
      name: "Sr. Stella_Maris Kamanzi, PhD – OLGC",
      role: "National Program Director, ARU-CCCU",
      description: "Co-directing CCCU programs with expertise in Religious formation and community-based child care initiatives.",
      image: "/team_images/sr-stella-bright.jpg",
      expertise: ["Religious Formation", "Community Care", "Program Development", "Entrepreneurship"]
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
      expertise: ["Driving","Benevolence"]
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
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals and Religious leaders driving CCCU's mission forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            let summary = '';
            if (member.name === 'Sr. Euphrasia Masika, DST') {
              summary = `Sr. Euphrasia Masika, DST- is a member of the religious institute of the Daughters of St. Therese of the Child Jesus in Uganda. She holds the position of National Program Director for Catholic Care for Children in Uganda (CCCU), an initiative of the Association of Religious in Uganda (ARU). Sr. Euphrasia is at the forefront of supporting women religious in Uganda to champion child care reform and enhance outcomes for children who are not in family care. She holds a Master of Science in Health Services Management from Uganda Martyrs University. In addition, Sr. Euphrasia undewent training on Child protection and Safeguarding to equip her with knowledge for her current job. Sr. Euphrasia has vast work experience of 27 years; she has demonstrated unwavering commitment to serving vulnerable populations both in the community and currently, she coordinates 43 Child Care Programs which are registered with the Association of Religious in Uganda (ARU). Her primary focus in the past had been alleviating people’s suffering by contributing to the reduction of maternal and child morbidity and mortality, as well as improving hygiene and sanitation in the Rwenzori Sub Region. Currently Sr. Euphrasia is supporting the Religious Sisters and Brothers in Child Care to ensure that children are supported to live in safe, loving and nurturing family environment. To Sr. Euphrasia Masika, “EVERY CHILD COUNTS” that is, non-descrimination including on the basis of disability. Her noble work has been financially supported by different charitable funding Partners including among others: CORDAID, STRIDES For Family Health, SAVE the Children, MISEREOR and currently GHR. She shall live to cherish these Partners whose financial support impacted the lives of the vulnerable people of our Ugandan Society at the time of need. May God bless them ALL.\n\nEmail: cccudirector@aruconference.org\nPhone:+256 772558244\nPersonal Email:meuphra@yahoo.com.`;
            } else if (member.name === 'Sr. Stella_Maris Kamanzi, PhD – OLGC') {
              summary = `Stella-Maris Kamanzi, (PhD) holds a Doctorate in Educational Management and
                          Administration from Makerere University’s East African School of Higher Education and
                          Development (EASHED). She also holds a Master’s Degree in Public Administration and
                          Management from Makerere University, a Master’s Degree in Administrative Science from Tampere University in Finland, a Bachelor’s Degree in Education, and a Diploma in Teacher Training Education (Tutorship) from Kyambogo University, Uganda.
                          Her doctoral research focused on the funding of higher education in Africa, with particular
                          emphasis on the applicability of the Entrepreneurial University Model to Africa’s flagship universities. Her dissertation was titled “The Applicability of the Entrepreneurial University Model to Makerere University-Uganda.”
                          Stella-Maris’ academic journey and professional development have nurtured her passion for academic writing. She is skilled in synthesizing complex ideas, constructing coherent arguments supported by evidence, and engaging in relevant scholarly discourse. Her work promotes critical thinking and contributes meaningfully to research and practice in higher education.
                          Her ORCID ID is https://orcid.org/0000-0003-0431-6339. She is mentored by the CODESRIA
                          College of Mentors and is a member of both the Council for the Development of Social Science Research in Africa (CODESRIA) and the African Studies Association of Africa (ASAA). She is also affiliated with the Collaboration of London Graduate School and Commonwealth University
                          in the UK.
                          Since 2009, she has served as the National Program Coordinator of Catholic Care for Children in Uganda (CCCU), under the Association of Religious in Uganda (ARU).

                          Email: cccucoord@aruconference.org
                          Phone: +256 772 576 399
                          Personal Email: kamanzistellamaris@gmail.com`;
            } else if (member.name === 'Sam Bernard Gumisiriza (Mr.)') {
              summary = `Sam Bernard, a highly accomplished professional, possesses expertise in Information Technology, Monitoring and Evaluation and social and Philosophical studies. Currently pursuing a Master’s in Monitoring and Evaluation at UMI, Sam holds a Master’s in Information Technology from Nkumba University, a Bachelor’s in Information Technology from Mbarara University of Science and Technology, and a Bachelor’s in Social and Philosophical Studies from Makerere University. With a diverse educational foundation, including a Diploma in Insurance from the Insurance Training College of Uganda, Sam showcases broad knowledge across disciplines. Through his 16 years’ experience, Sam excels in Information Technology, the Insurance Industry, and Philosophy/Psychology. His career includes key roles in higher education and the services industry, contributing to robust data management systems, information security, IT training, and seamless ICT integration. Currently serving as an ICT Manager and M&E Officer at ARU_CCCU, Sam harnesses ICT integration to bring efficiency, effectiveness and productivity to ARU Secretariat’s programs. As a self-motivated and results-oriented leader, Sam drives institutional growth, emphasizing high-quality outcomes and increased business turnover. His visionary planning acumen and analytical skills uniquely position him to manage diverse executive teams. Reliable and accommodating, Sam’s motivational communication style sets him apart. With a well-presented and experienced profile, he remains committed to contributing significantly to organizational success. Sam Bernard stands as an invaluable asset, bringing a wealth of experience and expertise to propel organizations to new heights.\n\nEmail: itmanager@aruconference.org\nPhone:+256 756 342 454\nPersonal Email:gumabensam1@gmail.com.`;
            } else if (member.name === 'Caroline Nansukusa Ssebakijje (Mrs.)') {
              summary = `I am a dedicated and continuously learning individual with a commitment to human and organizational development. Possessing strong leadership skills, a robust work ethic, and effective interpersonal and communication abilities, I continuously demonstrate regularity, responsibility, and trustworthiness in my pursuit of excellence. Since 2011, as a devoted social/development worker, I have passionately served vulnerable populations, focusing on the well-being of children and women through various organizations. In my current role as a Case Management Officer at the Association of the Religious in Uganda – Catholic Care for Children in Uganda (ARU-CCCU) for now 5years of service, I have been instrumental in ensuring that vulnerable children attain a family-like environment. My efforts extend beyond individual cases, aiming to create thriving, holistic communities. Through my daily endeavours, I strive to build environments where children not only receive necessary care but also experience the warmth of a family setting holistically with resilience. My work at CCCU reflects a deep commitment to enhancing the overall well-being of communities, fostering sustainable development, and creating lasting positive impacts. Holding a B.A. in Ethics and Development Studies from Uganda Martyrs University-Nkozi has facilitated my accumulated diverse experience in different roles, notably as a Case Management Officer at ARU-CCCU, and further extensive professional background including roles such as Sales Agent at National Insurance Cooperation, Communications Officer at BRAC Uganda, and Area Coordinator in matters of vulnerable children and women at BRAC Uganda, Trainer and Mentor at Cornerstone Development, among others. Over years, I have undergone relevant professional training in Child Protection and Safe-guarding, Donor Transition and Fundraising for Change, Moving towards Family Solutions, Family strengthening Enterprises, life skills, financial literacy, sports and leadership, and humanly living habits. My personal skills encompass strong interpersonal skills, team management, effective communication, analytical and critical thinking, commitment to excellence, attention to detail, punctuality, teamwork, motivation, and empathy. Additionally, I have acquired skills in mobilization, monitoring and evaluation, fair management and administration, fundraising, reporting and record-keeping, presentation and facilitation, driving, micro-enterprise, basics in project proposal writing, mentoring and training, analytical planning and appraisal, counselling and guidance, and Microsoft Computer skills. I believe am a well-rounded professional poised for impactful contributions in my field of expertise.\n\nEmail: cccucasemgr@aruconference.org\nPhone:+256 757 842 106\nPersonal Email:carolnansukusa@gmail.com.`;
            } else if (member.name === 'Emmanuel Epalat (Mr.)') {
              summary = `Emmanuel is a seasoned, measured, ardent governance, leadership and management authority, life coach, trainer, organizational development, human resource management and resource mobilization consultant. He is pursuing a PhD. in leadership and development (Atlantic International University-USA), attained a Master’s degree in public administration and governance (World University of Leadership-Australia), and a Bachelor’s degree of arts in environment management and geography (Makerere University –Kampala Uganda). With over 20 years of working experience in the private and government sectors, Emmanuel has strategic experience in the governance, leadership, and management of organizational operations and institutionalization for transformational and desired ends in strategy implementation, high customer satisfaction, and revenue growth. He has skills, competencies, and expertise in policy formulation, human resource management, organizational development, reporting writing, education and research, recruitment, performance management, monitoring and evaluation reporting, customer relationship management, strategic planning and fundraising. He has served in the telecommunications, information technology, and services industry, where he developed customer data management systems and policies, championed strategic intervention frameworks, conducted trainings, and championed the implementation of processes. Emmanuel has broad consultancy scope in the businesses of Industry/Manufacturing, Schools, NGOs, Churches, Government, SACCOs and Faith-Based Organizations. He has extensive experience with conference moderations, training, rapporteur services, team-building, board and staff orientation, coaching, mentoring, data triangulation, program design, and reporting. He has conducted over 300 training and consultancy assignments combined with an average of 50 participants in attendance. Emmanuel is self-driven, results-oriented, resilient, committed to business growth, and focused on high quality and business turnover because of his visionary, strategic, and planning pre-dispositions as an experienced professional. He is practical, mature, credible, and with a broad remit of business returns on investment. Emmanuel is an analytical, conceptual, and complex thinker who demonstrates good responsibility for diverse, multiple, and executive team management. He is reliable, accommodating, and an empathic communicator. He is well presented and sufficiently mobile and flexible. Keen for new experience, responsibility, and accountability.\n\nEmail: resourcemobmgr@aruconference.org\nPhone:+256 772212869\nPersonal Email:epalatemma@gmail.com.`;
            } else if (member.name === 'PATRICK KISAAKYE (MR.)') {
              summary = `Patrick Kisaakye, a 40-year-old seasoned driver, brings extensive experience and dedication to every journey. With a diploma in Art and Design and driving licenses for classes B and D1, he began his driving career over 13 years ago. Throughout his tenure, he has accumulated an impressive 303,450-kilometers of driving experience, navigating diverse terrains adeptly. Patrick’s top priority is safety, exemplified by his commitment to the mantra “Safety First” in all aspects of his work. His story underscores reliability and proficiency, with each mile traveled affirming his dedication to ensuring the well-being of passengers and fellow road users.\n\nPhone:+256782064352`;
            }
            return (
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
                  <button
                    className="mt-4 text-emerald-700 underline text-sm focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    {openIndex === index ? 'Hide Professional Summary' : 'Show Professional Summary'}
                  </button>
                  {openIndex === index && (
                    <div className="mt-2 p-4 bg-emerald-50 rounded text-left text-gray-700 text-sm whitespace-pre-line">
                      {summary || 'Professional summary coming soon.'}
                    </div>
                  )}
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
            );
          })}
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
              href="mailto:ccccucoord@aruconference.org"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              Contact Our Team
            </a>
            <a
              href="tel:+256772576399"
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