import React from 'react';
import { Target, Eye, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">About CCCU</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An initiative under the Association of Religious in Uganda (ARU), representing over 7,000 Catholic sisters, priests, and brothers from 112 Religious Institutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To be a model for best practice in child care and protection in Uganda.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be in the lead of child care and protection for the restoration of dignity of OVCs in Uganda.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Goal</h3>
            <p className="text-gray-700 leading-relaxed">
              To strengthen Religious Institutes in the expression of their Charisms, with Religious becoming champions of child care reform and improving outcomes for children living outside of family care.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Put Family First Initiative (2026–2028)</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
           ARU_CCCU is launching the Put Family First initiative — a transformative three-year program (2026–2028) that is promoting, funding, and supporting nurturing, loving, protective, and permanent family care for vulnerable children.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
           We are recognizing children as the most vulnerable members of society and are taking collective responsibility to safeguard their wellbeing. Research is continuing to show that a safe and loving family environment is key to a child’s holistic development. Through this initiative, we are committing to making sure every child is growing up in a family — not in an institution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;