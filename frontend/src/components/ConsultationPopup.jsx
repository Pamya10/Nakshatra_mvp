import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useConsultation } from '../context/ConsultationContext';
import { getWhatsAppUrl } from '../utils/whatsapp';

const ConsultationPopup = () => {
  const { isPopupVisible, popupSource, closeConsultationPopup, openConsultationPopup } = useConsultation();
  const [hasAutoShown, setHasAutoShown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: ''
  });

  const whatsappUrl = getWhatsAppUrl("Hi Nakshatra Interiors, I'd like to book a free consultation for my home interiors.");

  // Auto-show popup after 10 seconds (only once per session)
  useEffect(() => {
    const popupShown = sessionStorage.getItem('consultationPopupShown');
    
    if (!popupShown && !hasAutoShown) {
      const timer = setTimeout(() => {
        openConsultationPopup('auto');
        setHasAutoShown(true);
        sessionStorage.setItem('consultationPopupShown', 'true');
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [hasAutoShown, openConsultationPopup]);

  const handleClose = () => {
    closeConsultationPopup();
    // Reset form when closing
    setFormData({
      name: '',
      phone: '',
      email: '',
      requirement: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validate name
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

    // Validate phone number
    if (!formData.phone.trim()) {
      toast.error('Please enter your phone number');
      return;
    }
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      toast.error('Phone number must be exactly 10 digits');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
      toast.error('Please enter a valid Indian mobile number starting with 6-9');
      return;
    }

    // Validate email
    if (!formData.email.trim()) {
      toast.error('Please enter your email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const leadSource = popupSource === 'auto' 
        ? 'Consultation Popup (10 sec auto)' 
        : 'Book Free Consultation Button';

      const response = await fetch('https://formsubmit.co/ajax/interiorsbynakshatra@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Name': formData.name.trim(),
          'Phone': phoneDigits,
          'Email': formData.email.trim().toLowerCase(),
          'Requirement': formData.requirement.trim() || 'Not specified',
          'Request Type': 'FREE CONSULTATION',
          'Lead Source': leadSource,
          'Timestamp': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          'Status': '🔥 HOT LEAD - IMMEDIATE CALLBACK NEEDED',
          _subject: '📅 URGENT: Free Consultation Request - Nakshatra Interiors',
          _template: 'table',
          _captcha: false,
          _autoresponse: `Dear ${formData.name.trim()},\n\nThank you for requesting a free consultation with Nakshatra Interiors!\n\nOur design team will contact you at ${phoneDigits} within 24 hours to schedule your personalized consultation.\n\nYour Requirement: ${formData.requirement.trim() || 'Not specified'}\n\nDuring the consultation, we will:\n• Understand your home requirements\n• Show you our completed projects\n• Discuss design ideas and styles\n• Provide accurate cost estimates\n• Answer all your questions\n\nFor immediate assistance:\n📱 WhatsApp: +91 8999100590\n📧 Email: interiorsbynakshatra@gmail.com\n🌐 Website: nakshtrainterior.com\n\nBest regards,\nNakshatra Interiors Team\n"Adding aesthetics to life"`
        })
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success('Request received! We\'ll call you within 24 hours.');
        handleClose();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Consultation request error:', error);
      toast.error('Please use WhatsApp to book consultation.');
      handleWhatsAppClick();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isPopupVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative animate-slideUp max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Book a Free Interior Design Consultation
          </h2>
          <p className="text-gray-600 text-sm">
            Share your details and we'll call you within 24 hours with ideas and estimates for your dream home.
          </p>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleFormSubmit} className="space-y-4 mb-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#047C74] focus:border-transparent"
              pattern="[A-Za-z\s]+"
              title="Name should contain only letters"
              minLength="2"
              maxLength="50"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit Mobile Number *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#047C74] focus:border-transparent"
              pattern="[6-9][0-9]{9}"
              title="Please enter a valid 10-digit Indian mobile number"
              maxLength="10"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#047C74] focus:border-transparent"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
            />
          </div>
          <div>
            <textarea
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              placeholder="Tell us about your requirement (e.g., 2BHK full interior, modular kitchen, etc.)"
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#047C74] focus:border-transparent resize-none"
              maxLength="500"
            />
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : 'bg-[#047C74] hover:bg-[#036860] text-white'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>{isSubmitting ? 'Sending Request...' : 'Submit & Get Callback'}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp Instead</span>
            </a>
          </div>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting, you agree to be contacted by Nakshatra Interiors
        </p>
      </div>
    </div>
  );
};

export default ConsultationPopup;
