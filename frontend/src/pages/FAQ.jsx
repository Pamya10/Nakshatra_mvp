import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does a 2BHK interior project typically take?',
      answer: 'A standard 2BHK interior project typically takes 45-55 days from start to completion. This includes design finalization, procurement, execution, and final handover. The timeline may vary based on the project complexity and customization requirements.'
    },
    {
      question: 'What is included in your interior design package?',
      answer: 'Our package includes complete home interiors: modular kitchen, wardrobes, TV units, false ceiling, electrical work, painting, flooring, lighting, and all furniture. We also provide 3D design visualization, project management, and post-handover support.'
    },
    {
      question: 'Do you provide 3D designs before starting work?',
      answer: 'Yes! We provide detailed 3D visualizations of your space before execution begins. This helps you visualize the final outcome and make any changes before we start the actual work.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We follow a transparent milestone-based payment structure: 10% at design approval, 40% at material procurement, 40% during execution, and final 10% after completion. No hidden charges - everything is clearly mentioned in the quotation.'
    },
    {
      question: 'Do you offer a warranty on your work?',
      answer: 'Yes, we provide a warranty on our workmanship and materials. Specific warranty periods vary by item (typically 1-10 years depending on the component). Complete warranty details are provided in your contract.'
    },
    {
      question: 'Can I choose my own materials and finishes?',
      answer: 'Absolutely! While we recommend quality materials within your budget, you have complete freedom to choose materials, finishes, colors, and brands. We can source materials from your preferred vendors or suggest alternatives.'
    },
    {
      question: 'Do you handle all permissions and approvals?',
      answer: 'Yes, we take care of all society permissions and coordinate with building management. Our team handles documentation and ensures compliance with society rules throughout the project.'
    },
    {
      question: 'What if I need changes during the project?',
      answer: 'Minor changes can be accommodated during execution. For major changes, we\'ll assess the impact on timeline and cost, and proceed only with your approval. Our team is flexible and works to meet your vision.'
    },
    {
      question: 'Do you work in areas outside Pune?',
      answer: 'Yes, we serve PAN Maharashtra including Pune, Mumbai, Nashik, Dhule, and other cities. We have completed projects across the state and have a mobile team ready to work at your location.'
    },
    {
      question: 'What post-handover support do you provide?',
      answer: 'Post-handover support is our biggest USP! We provide free maintenance support for any issues that arise after completion. Our team is just a call away for any adjustments, repairs, or questions you may have.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#E7D49E]/20 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-[#047C74]">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Got questions? We've got answers! Find everything you need to know about our interior design services.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#047C74] transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#047C74] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed animate-slideDown">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#047C74] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help! Get in touch for personalized answers.
          </p>
          <button
            onClick={() => {
              const phoneNumber = '918999100590';
              const message = encodeURIComponent(
                "Hi Nakshatra Interiors, I have some questions about your services."
              );
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="bg-white text-[#047C74] hover:bg-gray-100 px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Chat with Us on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
