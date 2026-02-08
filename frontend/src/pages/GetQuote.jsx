import React from 'react';
import { MessageCircle, Phone, CheckCircle, Home, Palette, Clock } from 'lucide-react';
import SEO, { pageSEO } from '../components/SEO';
import { getWhatsAppUrl } from '../utils/whatsapp';

const GetQuote = () => {
  const whatsappUrl = getWhatsAppUrl("Hi Nakshatra Interiors, I'd like a quote for my home interiors.");

  const pricingRanges = [
    {
      type: '1 BHK',
      price: '₹4.5 Lakh onwards',
      icon: Home,
      features: ['Full interior design', 'Modular kitchen', 'Wardrobes', '3D visualization']
    },
    {
      type: '2 BHK',
      price: '₹6.8 Lakh onwards',
      icon: Home,
      features: ['Complete home interiors', 'Premium finishes', 'Custom furniture', 'Post-handover support']
    },
    {
      type: '3 BHK',
      price: '₹9 Lakh onwards',
      icon: Home,
      features: ['Luxury interiors', 'Designer lighting', 'Premium materials', 'Dedicated project manager']
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Share Your Requirements',
      description: 'Tell us about your home, preferences, and budget via WhatsApp or phone call'
    },
    {
      step: '2',
      title: 'Discovery Call & Site Visit',
      description: 'Our team visits your home, understands your lifestyle, and discusses design possibilities'
    },
    {
      step: '3',
      title: 'Floor Plan & Budget Discussion',
      description: 'Share your floor plan, and we provide a detailed cost breakdown with no hidden charges'
    },
    {
      step: '4',
      title: '3D Design & Quote',
      description: 'Receive detailed 3D designs and a comprehensive quote tailored to your needs'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title={pageSEO.getQuote.title}
        description={pageSEO.getQuote.description}
        keywords={pageSEO.getQuote.keywords}
        canonicalUrl="https://nakshtrainterior.com/get-quote"
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#E7D49E]/20 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your <span className="text-[#047C74]">Free Quote</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Transparent pricing, detailed 3D designs, and personalized solutions for your dream home. Start your interior design journey today!
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-5 rounded-lg font-medium text-lg flex items-center justify-center space-x-3 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Get Quote on WhatsApp</span>
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Quoting Process Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#047C74] to-[#C68D28] opacity-20"></div>
                )}

                <div className="relative bg-gradient-to-b from-[#E7D49E]/10 to-white border border-gray-200 rounded-xl p-6 hover:border-[#047C74] hover:shadow-md transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Ranges */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#E7D49E]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Starting price ranges for full home interiors (actual cost depends on your specific requirements)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingRanges.map((range, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 transform hover:-translate-y-1 ${
                  index === 1
                    ? 'border-[#047C74] scale-105'
                    : 'border-gray-200 hover:border-[#047C74]'
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-xl flex items-center justify-center mb-6">
                  <range.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {range.type}
                </h3>
                <div className="text-3xl font-bold text-[#047C74] mb-6">
                  {range.price}
                </div>
                <ul className="space-y-3 mb-6">
                  {range.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#047C74] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                {index === 1 && (
                  <div className="bg-[#047C74] text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    Most Popular
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              *Final pricing depends on your design choices, materials, and specific requirements
            </p>
          </div>
        </div>
      </section>

      {/* Why Get Quote Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Request a Quote from Us?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      No Hidden Charges
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Complete cost breakdown with transparent pricing. What you see is what you pay.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      3D Design Visualization
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Visualize your home before execution with detailed 3D renderings included in your quote.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Quick Turnaround
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Receive your detailed quote within 24-48 hours after our site visit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Personalized Consultation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      One-on-one discussion to understand your vision and provide expert recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBraXRjaGVufGVufDB8fHx8MTc3MDQ5MzcwNXww&ixlib=rb-4.1.0&q=85"
                  alt="Kitchen interior design"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#047C74] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get your personalized quote in just 24-48 hours. No obligations, completely free!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </button>
            <a
              href="tel:+918999100590"
              className="bg-white text-[#047C74] hover:bg-gray-100 px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;
