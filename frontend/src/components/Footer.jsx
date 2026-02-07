import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_home-design-pune/artifacts/czpqaa5j_TRANSPARENT%20LOGO%20FOR%20MULTIPURPOSE%20USE%20%281%29.png"
                alt="Nakshatra Interiors Logo"
                className="h-12 w-auto"
              />
              <div>
                <div className="text-white font-bold text-lg">
                  Nakshatra Interiors
                </div>
                <div className="text-[#C68D28] text-xs italic">
                  Adding aesthetics to life
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Transforming homes across Pune, Mumbai, Dhule & Nashik with innovative, personalized interior design solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-[#C68D28] transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-[#C68D28] transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/get-quote"
                  className="text-sm hover:text-[#C68D28] transition-colors duration-200"
                >
                  Get Quote
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-sm hover:text-[#C68D28] transition-colors duration-200"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-[#C68D28] transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Full Home Interiors</li>
              <li>Modular Kitchen</li>
              <li>Wardrobes & Storage</li>
              <li>Renovation</li>
              <li>Commercial Interiors</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#C68D28] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a
                    href="tel:+918999100590"
                    className="hover:text-[#C68D28] transition-colors duration-200 block"
                  >
                    +91 8999100590
                  </a>
                  <a
                    href="tel:+917709596817"
                    className="hover:text-[#C68D28] transition-colors duration-200 block"
                  >
                    +91 7709596817
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#C68D28] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:interiorsbynakshatra@gmail.com"
                  className="text-sm hover:text-[#C68D28] transition-colors duration-200"
                >
                  interiorsbynakshatra@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C68D28] flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Serving PAN Maharashtra
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Instagram className="w-5 h-5 text-[#C68D28] flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.instagram.com/nakshatra.interior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#C68D28] transition-colors duration-200"
                >
                  @nakshatra.interior
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Nakshatra Interiors. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Founded August 2021 | 50+ Homes Transformed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
