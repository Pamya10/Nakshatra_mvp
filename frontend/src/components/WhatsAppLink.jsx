import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';

// Reusable WhatsApp link component that works properly on mobile
const WhatsAppLink = ({ 
  children, 
  message = "Hi Nakshatra Interiors, I'd like a quote for my home interiors.",
  className = "",
  ...props 
}) => {
  const whatsappUrl = getWhatsAppUrl(message);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export default WhatsAppLink;
