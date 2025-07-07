import React from 'react';
import { TrendingUp, Users, Heart, BookOpen, Shield } from 'lucide-react';

const Impact = () => {
  const impactStats = [
    { number: "7,000+", label: "Religious Members Mobilized", description: "Catholic sisters, priests, and brothers actively engaged in child care reform" },
    { number: "112", label: "Religious Institutes", description: "United under ARU to champion child protection and family-based care" },
    { number: "80+", label: "Professionals Trained", description: "Religious and lay staff equipped in Social Work, Child Protection, and Case Management" },
    { number: "46", label: "Care Institutions Transformed", description: "Transitioned to family-based and community care models" },
    { number: "37", label: "Staff Oriented", description: "On robust child safeguarding and protection policies" },
    { number: "15", label: "Institutions Supported", description: "With resource mobilization, capacity building, and technical assistance" }
  ];

  const impactAreas = [
    {
      icon: BookOpen,
      title: "Education & Training",
      description: "Empowering Religious and lay professionals with advanced skills in Social Work, Child Protection, and Alternative Care, ensuring sustainable, high-quality care for every child.",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Child Protection",
      description: "Implementing and monitoring safeguarding policies, building safe environments, and advocating for the rights and dignity of every child in our care.",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Family-Based Care",
      description: "Transitioning children from institutional settings to nurturing, permanent family environments, and supporting family reunification and community integration.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Capacity Building",
      description: "Strengthening Religious Institutes and local communities to become leaders and advocates for child care reform and holistic child development.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: { bg: "from-emerald-50 to-emerald-100", icon: "bg-emerald-600", border: "border-emerald-200" },
      blue: { bg: "from-blue-50 to-blue-100", icon: "bg-blue-600", border: "border-blue-200" },
      purple: { bg: "from-purple-50 to-purple-100", icon: "bg-purple-600", border: "border-purple-200" },
      orange: { bg: "from-orange-50 to-orange-100", icon: "bg-orange-600", border: "border-orange-200" }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="impact" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto space-y-6 text-left">
            <p>At Catholic Care for Children in Uganda (CCCU), we believe that every child deserves the love, safety, and dignity of family life. Since 2016, CCCU has been quietly transforming how care is given to Uganda’s most vulnerable children, helping them grow not in institutions, but in the embrace of families and communities that nurture and belong.</p>
            <h3 className="text-2xl font-semibold text-emerald-700 mt-8 mb-2">Restoring Families, Rebuilding Lives</h3>
            <p>Our work has supported the reintegration of thousands of children from institutional care back into the warmth of family life. Whether reunited with biological parents or embraced through kinship, foster, or adoptive care, these children are no longer growing up alone. Each success story is a quiet triumph—like Kakuma, once in institutional care, now smiling with pride at his new job and life in the community.</p>
            <h3 className="text-2xl font-semibold text-emerald-700 mt-8 mb-2">Empowering the Hands That Heal</h3>
            <p>We have trained over 1,250 Sisters, Brothers, and lay staff in child protection, social work, and special needs education—giving them the tools and confidence to care for children with knowledge, empathy, and love. Ninety-six have completed advanced training, bringing professional care closer to the children who need it most.</p>
            <h3 className="text-2xl font-semibold text-emerald-700 mt-8 mb-2">Strengthening Families at the Root</h3>
            <p>To prevent separation before it begins, we have helped over 200 families start small businesses and supported 42 Child Care Institutions to repurpose their services for community needs. These efforts ensure that poverty no longer stands in the way of parental care. Families are eating better, earning more, and raising their children in safer, healthier homes.</p>
            <h3 className="text-2xl font-semibold text-emerald-700 mt-8 mb-2">Planting Seeds for a Kinder Future</h3>
            <p>From parenting modules and psychosocial support to nutrition training and goat rearing projects, our outreach has gone beyond reintegration. It’s about creating a wholesome environment where every child feels safe, valued, and prepared to thrive.</p>
            <h3 className="text-2xl font-semibold text-emerald-700 mt-8 mb-2">Building a New Model of Care</h3>
            <p>We are proud that Uganda’s Religious Institutes are now seen as champions of child care reform. Our model has inspired similar efforts in Kenya, Zambia, Malawi, and Sri Lanka. The recognition is humbling, but it reminds us that faith in action can ripple far and wide.</p>
            <h3 className="text-2xl font-semibold text-emerald-700 mt-8 mb-2">Partnerships that Matter</h3>
            <p>We walk with partners—universities, global experts, local leaders, and generous supporters—who believe in family-based care. Together, we’ve improved systems, built digital tools for tracking child welfare, and trained caregivers in everything from responsive feeding to fundraising. Our collaboration with government has made our work sustainable, legal, and aligned with national child welfare goals.</p>
            <h3 className="text-2xl font-semibold text-emerald-700 mt-8 mb-2">A Future Rooted in Family</h3>
            <p>The journey continues. As more institutions repurpose and more children return home, our dream is becoming reality: a Uganda where no child grows up without family.<br/>We are not just changing systems—we are restoring childhoods, strengthening families, and healing communities. And with every step, we are reminded: love is the most powerful form of care.</p>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">7,000+</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Religious Members Mobilized</h3>
            <p className="text-gray-600 text-sm">Catholic sisters, priests, and brothers actively engaged in child care reform</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">112</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Religious Institutes</h3>
            <p className="text-gray-600 text-sm">United under ARU to champion child protection and family-based care</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">80+</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Professionals Trained</h3>
            <p className="text-gray-600 text-sm">Religious and lay staff equipped in Social Work, Child Protection, and Case Management</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">46</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Care Institutions Transformed</h3>
            <p className="text-gray-600 text-sm">Transitioned to family-based and community care models</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">37</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Staff Oriented</h3>
            <p className="text-gray-600 text-sm">On robust child safeguarding and protection policies</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">15</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Institutions Supported</h3>
            <p className="text-gray-600 text-sm">With resource mobilization, capacity building, and technical assistance</p>
          </div>
          {/* Additional statistics */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">10,000+</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Children Reached</h3>
            <p className="text-gray-600 text-sm">Directly benefiting from improved care and family reunification</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Districts Covered</h3>
            <p className="text-gray-600 text-sm">Expanding our reach across Uganda</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Safeguarding Compliance</h3>
            <p className="text-gray-600 text-sm">All partner institutions adhere to child protection standards</p>
          </div>
        </div>

        {/* Impact Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Impact Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Education & Training</h4>
              <p className="text-gray-700 leading-relaxed">Empowering Religious and lay professionals with advanced skills in Social Work, Child Protection, and Alternative Care, ensuring sustainable, high-quality care for every child.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Child Protection</h4>
              <p className="text-gray-700 leading-relaxed">Implementing and monitoring safeguarding policies, building safe environments, and advocating for the rights and dignity of every child in our care.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Family-Based Care</h4>
              <p className="text-gray-700 leading-relaxed">Transitioning children from institutional settings to nurturing, permanent family environments, and supporting family reunification and community integration.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Capacity Building</h4>
              <p className="text-gray-700 leading-relaxed">Strengthening Religious Institutes and local communities to become leaders and advocates for child care reform and holistic child development.</p>
            </div>
            {/* Additional impact areas */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Advocacy & Policy</h4>
              <p className="text-gray-700 leading-relaxed">Influencing national policy and advocating for systemic change to protect children's rights at every level.</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Research & Innovation</h4>
              <p className="text-gray-700 leading-relaxed">Pioneering new approaches and conducting research to improve outcomes for children and families.</p>
            </div>
          </div>
        </div>

        {/* Timeline of Milestones */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Milestones</h3>
          <div className="relative max-w-3xl mx-auto">
            <div className="border-l-4 border-emerald-200 absolute h-full left-8 top-0"></div>
            <ul className="space-y-12 pl-16">
              <li>
                <div className="flex items-center mb-2">
                  <div className="bg-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4">2015</div>
                  <span className="font-semibold text-gray-900">CCCU Inception</span>
                </div>
                <p className="text-gray-600 ml-12">Vision to transform child care and protection in Uganda is born.</p>
              </li>
              <li>
                <div className="flex items-center mb-2">
                  <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4">2016</div>
                  <span className="font-semibold text-gray-900">First Training Cohort</span>
                </div>
                <p className="text-gray-600 ml-12">First group of Religious trained in Social Work and Child Protection.</p>
              </li>
              <li>
                <div className="flex items-center mb-2">
                  <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4">2018</div>
                  <span className="font-semibold text-gray-900">Family-Based Care Rollout</span>
                </div>
                <p className="text-gray-600 ml-12">Pilot transitions to family-based care begin in select institutions.</p>
              </li>
              <li>
                <div className="flex items-center mb-2">
                  <div className="bg-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4">2020</div>
                  <span className="font-semibold text-gray-900">National Policy Influence</span>
                </div>
                <p className="text-gray-600 ml-12">CCCU contributes to national child protection policy reforms.</p>
              </li>
              <li>
                <div className="flex items-center mb-2">
                  <div className="bg-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4">2023</div>
                  <span className="font-semibold text-gray-900">10,000+ Children Reached</span>
                </div>
                <p className="text-gray-600 ml-12">Major milestone in direct support and family reunification.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Testimonials/Quotes */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What People Say</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-100">
              <p className="text-lg text-gray-700 italic mb-4">"CCCU's work has brought hope and dignity to countless children and families. Their commitment to family-based care is truly inspiring."</p>
              <div className="font-semibold text-emerald-700">Sr. Euphrasia Masika, DST</div>
              <div className="text-gray-500 text-sm">National Program Director, ARU-CCCU</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-100">
              <p className="text-lg text-gray-700 italic mb-4">"Thanks to CCCU, our institution has transformed the way we care for children. We now focus on family reunification and holistic development."</p>
              <div className="font-semibold text-emerald-700">Caroline Nansukusa Ssebakijje</div>
              <div className="text-gray-500 text-sm">Case Management Officer, ARU-CCCU</div>
            </div>
          </div>
        </div>

        {/* Put Family First Initiative Impact */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 lg:p-12 border-2 border-emerald-200 mb-16">
          <div className="text-center mb-8">
            <div className="bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">"Put Family First" Initiative Impact</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our flagship initiative, "Put Family First," is revolutionizing child care in Uganda. By prioritizing family-based solutions, we are reducing reliance on institutional care, reuniting children with families, and building stronger, more resilient communities. Supported by the U.S. government and global partners, this initiative is setting a new standard for child protection and well-being across the country.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                <p className="text-gray-700 font-medium">Family-Centered Approach</p>
                <p className="text-sm text-gray-600 mt-2">All programs now prioritize family care and reunification</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">46</div>
                <p className="text-gray-700 font-medium">Institutions Transformed</p>
                <p className="text-sm text-gray-600 mt-2">Exceeding government standards for child care</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">∞</div>
                <p className="text-gray-700 font-medium">Lives Changed</p>
                <p className="text-sm text-gray-600 mt-2">Immeasurable positive impact for children and families</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-emerald-700 mb-4">Join Us in Making a Difference</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Your support helps us reach more children, train more caregivers, and build a brighter future for Uganda's most vulnerable. Partner with us, volunteer, or donate to be part of this transformative journey.
          </p>
          <a href="#donate" className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Support Our Mission
          </a>
        </div>
      </div>
    </section>
  );
};

export default Impact;