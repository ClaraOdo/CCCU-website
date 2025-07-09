import React from 'react';
import { TrendingUp } from 'lucide-react';

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-emerald-700 mb-8">Our Impact</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              At Catholic Care for Children in Uganda (CCCU), we believe that every child deserves the love, safety, and dignity of family life.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2016, CCCU has been quietly transforming how care is given to Uganda's most vulnerable children, helping them grow not in institutions, but in the embrace of families and communities that nurture and belong.
            </p>
          </div>
        </div>

        {/* Featured Impact Story */}
        <div className="mb-20">
          <div className="relative rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/Gallery/Iganga_case_closure/IMG_0161-1536x1024.jpg"
                alt="Family Reintegration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6">Restoring Families, Rebuilding Lives</h3>
                <p className="text-xl leading-relaxed mb-8">
                  Our work has supported the reintegration of thousands of children from institutional care back into the warmth of family life. Whether reunited with biological parents or embraced through kinship, foster, or adoptive care, these children are no longer growing up alone.
                </p>
                <p className="text-lg text-gray-300">
                  Each success story is a quiet triumph—like Kakuma, once in institutional care, now smiling with pride at his new job and life in the community.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-emerald-400 mb-4">2,000+</div>
                <div className="text-xl">Children Reunited with Families</div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Grid */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-16">Key Impact Areas</h3>
          <div className="space-y-12">
            {/* Row 1 */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-3xl font-bold text-gray-900">Empowering the Hands That Heal</h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We have trained over 1,250 Sisters, Brothers, and lay staff in child protection, social work, and special needs education—giving them the tools and confidence to care for children with knowledge, empathy, and love.
                </p>
                <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-gray-50">
                  <div className="text-2xl font-bold text-gray-900">96</div>
                  <div className="text-gray-700">Advanced Training Graduates</div>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-3xl font-bold text-gray-900">Strengthening Families at the Root</h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To prevent separation before it begins, we have helped over 200 families start small businesses and supported 42 Child Care Institutions to repurpose their services for community needs.
                </p>
                <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-gray-50">
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-gray-700">Families Supported</div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-3xl font-bold text-gray-900">Planting Seeds for a Kinder Future</h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From parenting modules and psychosocial support to nutrition training and goat rearing projects, our outreach has gone beyond reintegration. It's about creating a wholesome environment where every child feels safe, valued, and prepared to thrive.
                </p>
              </div>
              <div className="space-y-6">
                <h4 className="text-3xl font-bold text-gray-900">Building a New Model of Care</h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are proud that Uganda's Religious Institutes are now seen as champions of child care reform. Our model has inspired similar efforts in Kenya, Zambia, Malawi, and Sri Lanka.
                </p>
              </div>
            </div>

            {/* Full Width */}
            <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
              <h4 className="text-3xl font-bold text-gray-900 mb-6 text-center">Partnerships that Matter</h4>
              <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
                We walk with partners—universities, global experts, local leaders, and generous supporters—who believe in family-based care. Together, we've improved systems, built digital tools for tracking child welfare, and trained caregivers in everything from responsive feeding to fundraising.
              </p>
            </div>
          </div>
        </div>

        {/* A Future Rooted in Family */}
        <div className="bg-gray-50 rounded-3xl p-12 lg:p-16 border border-gray-200">
          <div className="text-center mb-12">
            <div className="bg-yellow-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <TrendingUp className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">A Future Rooted in Family</h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              The journey continues. As more institutions repurpose and more children return home, our dream is becoming reality: a Uganda where no child grows up without family.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-yellow-600 mb-3">100%</div>
                <p className="text-gray-900 font-semibold text-lg mb-2">Family-Centered Approach</p>
                <p className="text-gray-600">All programs now prioritize family care and reunification</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-yellow-600 mb-3">46</div>
                <p className="text-gray-900 font-semibold text-lg mb-2">Institutions Transformed</p>
                <p className="text-gray-600">Exceeding government standards for child care</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-yellow-600 mb-3">∞</div>
                <p className="text-gray-900 font-semibold text-lg mb-2">Lives Changed</p>
                <p className="text-gray-600">Immeasurable positive impact for children and families</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;