import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageCircle } from 'lucide-react';

const ConsultationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('consultationPopupShown');
    
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasBeenShown(true);
        sessionStorage.setItem('consultationPopupShown', 'true');
      }, 10000); // Show after 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '918999100590';
    const message = encodeURIComponent(
      "Hi Nakshatra Interiors, I'd like to book a free consultation for my home interiors."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    handleClose();
  };

  const handleFormClick = () => {
    // Placeholder Google Form - to be replaced by owner
    const formUrl = 'https://forms.google.com/YOUR_FORM_ID_HERE';
    window.open(formUrl, '_blank');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative animate-slideUp">
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
            Share a few details and we'll call you back within 24 hours with ideas and estimates for your dream home.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleFormClick}
            className="w-full bg-[#047C74] hover:bg-[#036860] text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Submit & Get Callback</span>
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp Instead</span>
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting, you agree to be contacted by Nakshatra Interiors
        </p>
      </div>
    </div>
  );
};

export default ConsultationPopup;
