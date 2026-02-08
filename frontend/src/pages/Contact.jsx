import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import SEO, { pageSEO } from '../components/SEO';
import { getWhatsAppUrl } from '../utils/whatsapp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate name (should not be numeric, should contain only letters and spaces)
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      toast.error('Name should contain only letters');
      return;
    }
    if (formData.name.trim().length < 2) {
      toast.error('Name should be at least 2 characters');
      return;
    }

    // Validate phone number (should be exactly 10 digits)
    if (!formData.phone.trim()) {
      toast.error('Please enter your phone number');
      return;
    }
    const phoneDigits = formData.phone.replace(/\D/g, ''); // Remove non-digits
    if (phoneDigits.length !== 10) {
      toast.error('Phone number must be exactly 10 digits');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
      toast.error('Please enter a valid Indian mobile number');
      return;
    }

    // Validate email
    if (!formData.email.trim()) {
      toast.error('Please enter your email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      toast.error('Please enter a valid email address (e.g., name@example.com)');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to FormSubmit
      const response = await fetch('https://formsubmit.co/ajax/interiorsbynakshatra@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name.trim(),
          Phone: phoneDigits,
          Email: formData.email.trim().toLowerCase(),
          City: formData.city.trim(),
          Requirements: formData.message.trim(),
          Source: 'Contact Form - Website',
          Timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          _subject: '🏠 New Inquiry - Nakshatra Interiors Website',
          _template: 'table',
          _captcha: false,
          _cc: '',
          _autoresponse: `Dear ${formData.name.trim()},\n\nThank you for contacting Nakshatra Interiors!\n\nWe have received your inquiry and our team will get back to you within 24 hours with design ideas and cost estimates.\n\nYour Details:\nName: ${formData.name.trim()}\nPhone: ${phoneDigits}\nCity: ${formData.city.trim()}\n\nIn the meantime, feel free to:\n• Browse our portfolio: nakshtrainterior.com/portfolio\n• Use our cost calculator: nakshtrainterior.com/cost-calculator\n• Check our FAQ: nakshtrainterior.com/faq\n• Chat with us: wa.me/918999100590\n\nBest regards,\nNakshatra Interiors Team\n"Adding aesthetics to life"\n\n📱 +91 8999100590 | +91 7709596817\n📧 interiorsbynakshatra@gmail.com\n🌐 nakshtrainterior.com\n📍 Serving PAN Maharashtra`
        })
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success('Thank you! We\'ll get back to you within 24 hours.');
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          city: '',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try WhatsApp: +91 8999100590');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = getWhatsAppUrl("Hi Nakshatra Interiors, I'd like to get in touch regarding interior design services.");

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 8999100590', '+91 7709596817'],
      action: (detail) => `tel:${detail}`
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['interiorsbynakshatra@gmail.com'],
      action: (detail) => `mailto:${detail}`
    },
    {
      icon: Instagram,
      title: 'Follow Us',
      details: ['@nakshatra.interior'],
      action: () => 'https://www.instagram.com/nakshatra.interior'
    },
    {
      icon: MapPin,
      title: 'We Serve',
      details: ['PAN Maharashtra'],
      action: null
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title={pageSEO.contact.title}
        description={pageSEO.contact.description}
        keywords={pageSEO.contact.keywords}
        canonicalUrl="https://nakshtrainterior.com/contact"
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#E7D49E]/20 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-[#047C74]">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Have questions about your interior design project? We're here to help! Reach out via phone, email, WhatsApp, or fill out the form below.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#E7D49E]/5 to-white border border-gray-200 rounded-xl p-6 text-center hover:border-[#047C74] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <div key={idx}>
                      {info.action ? (
                        <a
                          href={info.action(detail)}
                          target={info.title === 'Follow Us' ? '_blank' : undefined}
                          rel={info.title === 'Follow Us' ? 'noopener noreferrer' : undefined}
                          className="text-sm text-[#047C74] hover:underline block"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-600">{detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & WhatsApp */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#E7D49E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#047C74] focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                    pattern="[A-Za-z\s]+"
                    title="Name should contain only letters"
                    minLength="2"
                    maxLength="50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#047C74] focus:border-transparent transition-all duration-200"
                    placeholder="10-digit mobile number"
                    pattern="[6-9][0-9]{9}"
                    title="Please enter a valid 10-digit Indian mobile number"
                    maxLength="10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#047C74] focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#047C74] focus:border-transparent transition-all duration-200"
                    placeholder="Pune, Mumbai, Dhule, or Nashik"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Requirement
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#047C74] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project (1BHK/2BHK/3BHK, new flat or renovation, budget range, etc.)"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#047C74] hover:bg-[#036860] text-white'
                  }`}
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting, you agree to be contacted by Nakshatra Interiors
              </p>
            </div>

            {/* WhatsApp & Info */}
            <div className="space-y-8">
              {/* WhatsApp Card */}
              <div className="bg-gradient-to-br from-[#25D366] to-[#20BA5A] rounded-2xl shadow-xl p-8 text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Prefer WhatsApp?
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Get instant responses! Chat with us on WhatsApp for quick queries, quotes, or to share your floor plans and ideas.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#25D366] hover:bg-gray-100 px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2 inline-flex"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What Happens Next?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#047C74] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm">
                        <span className="font-semibold">Quick Response:</span> We'll reply within 24 hours with initial ideas
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#047C74] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm">
                        <span className="font-semibold">Free Consultation:</span> Schedule a call or site visit at your convenience
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#047C74] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm">
                        <span className="font-semibold">Detailed Quote:</span> Receive a transparent, itemized quote with 3D designs
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-b from-[#E7D49E]/20 to-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span className="font-medium text-gray-900">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium text-gray-900">10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
