// WhatsApp utility for consistent behavior across desktop and mobile

export const WHATSAPP_PHONE = '918999100590';

export const getWhatsAppUrl = (message = "Hi Nakshatra Interiors, I'd like a quote for my home interiors.") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
};

// For programmatic navigation (use sparingly, prefer WhatsAppLink component)
export const openWhatsApp = (message) => {
  const url = getWhatsAppUrl(message);
  // Using window.location for better mobile compatibility
  // This navigates to WhatsApp but browser handles back navigation properly
  window.location.href = url;
};
