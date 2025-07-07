import React from 'react';
import { Heart, DollarSign, CreditCard, Banknote, Globe, Shield } from 'lucide-react';

const Donate = () => {
  const donationOptions = [
    { amount: "$25 or UGX 91,250", description: "Provides nutrition assessment tools for one child" },
    { amount: "$50 or UGX 182,500", description: "Supports training materials for one caregiver" },
    { amount: "$100 or UGX 365,000", description: "Funds a month of nutrition monitoring for 5 children" },
    { amount: "$250 or UGX 912,500", description: "Sponsors a complete training workshop" },
    { amount: "$500 or UGX 1,825,000", description: "Supports family reintegration for one child" },
    { amount: "Custom", description: "Choose your own amount to make a difference" }
  ];

  const paymentMethods = [
    { icon: CreditCard, name: "Credit/Debit Card", description: "Secure online payment" },
    { icon: Banknote, name: "Bank Transfer", description: "Direct bank transfer" },
    { icon: Globe, name: "PayPal", description: "International payments" }
  ];

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-emerald-50 to-emerald-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation directly impacts vulnerable children across Uganda, helping us provide better care, 
            nutrition, and family-based solutions for those who need it most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Donation Options */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Impact</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {donationOptions.map((option, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-xl p-4 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-200 cursor-pointer">
                  <div className="text-xl font-bold text-emerald-600 mb-2">{option.amount}</div>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <button className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center gap-2">
                <DollarSign className="h-5 w-5" />
                Donate Now
              </button>
              <p className="text-center text-sm text-gray-600">
                Secure donation processing • Tax-deductible receipts provided
              </p>
            </div>
          </div>

          {/* Impact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Direct Child Support</h4>
                    <p className="text-gray-600 text-sm">Funds go directly to improving nutrition, education, and care for vulnerable children</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Caregiver Training</h4>
                    <p className="text-gray-600 text-sm">Support training programs for Religious and professional caregivers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Family Reintegration</h4>
                    <p className="text-gray-600 text-sm">Help transition children from institutions to loving family environments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Methods</h3>
              <div className="space-y-3">
                {paymentMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                      <IconComponent className="h-5 w-5 text-gray-600" />
                      <div>
                        <div className="font-medium text-gray-900">{method.name}</div>
                        <div className="text-sm text-gray-600">{method.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Large Donations */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Opportunities</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in making a larger impact? We welcome partnerships with foundations, corporations, 
            and individuals who share our vision for transforming child care in Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@cccu.org"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              Contact for Partnerships
            </a>
            <a
              href="tel:+256"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;