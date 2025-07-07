import React from 'react';
import { TrendingUp } from 'lucide-react';

const Impact = () => {
  const impactStats = [
    { number: "7,000+", label: "Religious Members", description: "Catholic sisters, priests, and brothers" },
    { number: "112", label: "Religious Institutes", description: "Represented under ARU" },
    { number: "80", label: "Religious Trained", description: "In Social Work and Social Administration" },
    { number: "46", label: "Care Institutions", description: "Supported and improved" },
    { number: "37", label: "Staff Oriented", description: "On child safeguarding policy" },
    { number: "15", label: "Institutions Supported", description: "By Resource Mobilization Officer" }
  ];

  return (
    <section id="impact" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Catholic Care for Children in Uganda (CCCU), we believe that every child deserves the love, safety, and dignity of family life. Since 2016, CCCU has been quietly transforming how care is given to Uganda’s most vulnerable children, helping them grow not in institutions, but in the embrace of families and communities that nurture and belong.
          </p>
        </div>

       

        {/* Impact Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Impact Areas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-xl font-bold text-emerald-700 mb-4">Restoring Families, Rebuilding Lives</h4>
              <p className="text-gray-700 leading-relaxed">Our work has supported the reintegration of thousands of children from institutional care back into the warmth of family life. Whether reunited with biological parents or embraced through kinship, foster, or adoptive care, these children are no longer growing up alone. Each success story is a quiet triumph—like Kakuma, once in institutional care, now smiling with pride at his new job and life in the community.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-xl font-bold text-blue-700 mb-4">Empowering the Hands That Heal</h4>
              <p className="text-gray-700 leading-relaxed">We have trained over 1,250 Sisters, Brothers, and lay staff in child protection, social work, and special needs education—giving them the tools and confidence to care for children with knowledge, empathy, and love. Ninety-six have completed advanced training, bringing professional care closer to the children who need it most.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-xl font-bold text-orange-700 mb-4">Strengthening Families at the Root</h4>
              <p className="text-gray-700 leading-relaxed">To prevent separation before it begins, we have helped over 200 families start small businesses and supported 42 Child Care Institutions to repurpose their services for community needs. These efforts ensure that poverty no longer stands in the way of parental care. Families are eating better, earning more, and raising their children in safer, healthier homes.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-xl font-bold text-green-700 mb-4">Planting Seeds for a Kinder Future</h4>
              <p className="text-gray-700 leading-relaxed">From parenting modules and psychosocial support to nutrition training and goat rearing projects, our outreach has gone beyond reintegration. It’s about creating a wholesome environment where every child feels safe, valued, and prepared to thrive.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-xl font-bold text-purple-700 mb-4">Building a New Model of Care</h4>
              <p className="text-gray-700 leading-relaxed">We are proud that Uganda’s Religious Institutes are now seen as champions of child care reform. Our model has inspired similar efforts in Kenya, Zambia, Malawi, and Sri Lanka. The recognition is humbling, but it reminds us that faith in action can ripple far and wide.</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-xl font-bold text-yellow-700 mb-4">Partnerships that Matter</h4>
              <p className="text-gray-700 leading-relaxed">We walk with partners—universities, global experts, local leaders, and generous supporters—who believe in family-based care. Together, we’ve improved systems, built digital tools for tracking child welfare, and trained caregivers in everything from responsive feeding to fundraising. Our collaboration with government has made our work sustainable, legal, and aligned with national child welfare goals.</p>
            </div>
          </div>
        </div>

        {/* A Future Rooted in Family */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 lg:p-12 border-2 border-emerald-200 mt-16">
          <div className="text-center mb-8">
            <div className="bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">A Future Rooted in Family</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The journey continues. As more institutions repurpose and more children return home, our dream is becoming reality: a Uganda where no child grows up without family.<br /><br />
              We are not just changing systems—we are restoring childhoods, strengthening families, and healing communities. And with every step, we are reminded: love is the most powerful form of care.
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
      </div>
    </section>
  );
};

export default Impact;