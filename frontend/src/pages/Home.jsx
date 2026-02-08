import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Home as HomeIcon,
  ChefHat,
  Armchair,
  Hammer,
  Award,
  Clock,
  Palette,
  Users,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Star
} from 'lucide-react';
import GoogleReviews from '../components/GoogleReviews';
import InstagramFeed from '../components/InstagramFeed';
import SEO, { pageSEO } from '../components/SEO';
import { useConsultation } from '../context/ConsultationContext';
import { getWhatsAppUrl } from '../utils/whatsapp';

const Home = () => {
  const navigate = useNavigate();
  const { openConsultationPopup } = useConsultation();
  
  const whatsappUrl = getWhatsAppUrl("Hi Nakshatra Interiors, I'd like a quote for my home interiors.");

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectClick = (projectId) => {
    navigate(`/portfolio/${projectId}`);
  };

  const handleBookConsultation = () => {
    openConsultationPopup('home-button');
  };

  const services = [
    {
      icon: HomeIcon,
      title: 'Full Home Interiors',
      description:
        'Complete interior design solutions for 1BHK, 2BHK, and 3BHK homes tailored to your lifestyle and budget.'
    },
    {
      icon: ChefHat,
      title: 'Modular Kitchen',
      description:
        'Modern, functional kitchens with smart storage solutions and premium finishes for everyday cooking.'
    },
    {
      icon: Armchair,
      title: 'Wardrobes & Storage',
      description:
        'Custom wardrobe designs and storage solutions that maximize space and keep your home organized.'
    },
    {
      icon: Hammer,
      title: 'Renovation & Commercial',
      description:
        'Transform existing spaces or create stunning commercial interiors that reflect your brand identity.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Understand Your Home & Lifestyle',
      description:
        'We start with a friendly meeting to understand your needs, preferences, and budget for your dream home.'
    },
    {
      step: '02',
      title: 'Design & 3D Visualization',
      description:
        'Our designers create detailed 3D designs so you can see exactly how your home will look before execution.'
    },
    {
      step: '03',
      title: 'Execution with In-House Team',
      description:
        'Our skilled in-house team brings your design to life with quality craftsmanship and on-time delivery.'
    },
    {
      step: '04',
      title: 'Post-Handover Support',
      description:
        'We provide strong support even after project completion, ensuring your satisfaction for years to come.'
    }
  ];

  const portfolio = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1642541070065-3912f347e7c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tfGVufDB8fHx8MTc3MDQ5MzcwMHww&ixlib=rb-4.1.0&q=85',
      title: '2BHK – Wakad, Pune',
      description: 'Contemporary bedroom with elegant design'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVufGVufDB8fHx8MTc3MDQ5MzcwNXww&ixlib=rb-4.1.0&q=85',
      title: '3BHK – Hinjewadi, Pune',
      description: 'Modern kitchen with smart storage'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwxfHxsaXZpbmclMjByb29tfGVufDB8fHx8MTc3MDQ5MzcxMHww&ixlib=rb-4.1.0&q=85',
      title: '2BHK – Baner, Pune',
      description: 'Warm living room with cozy atmosphere'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1653974123568-b5eff6d851e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBiZWRyb29tfGVufDB8fHx8MTc3MDQ5MzcwMHww&ixlib=rb-4.1.0&q=85',
      title: '1BHK – Kharadi, Pune',
      description: 'Minimalist bedroom with modern touches'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBraXRjaGVufGVufDB8fHx8MTc3MDQ5MzcwNXww&ixlib=rb-4.1.0&q=85',
      title: '3BHK – Viman Nagar, Pune',
      description: 'Sleek kitchen with island design'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwyfHxsaXZpbmclMjByb29tfGVufDB8fHx8MTc3MDQ5MzcxMHww&ixlib=rb-4.1.0&q=85',
      title: '2BHK – Aundh, Pune',
      description: 'Elegant living space with natural light'
    }
  ];

  const usps = [
    { icon: Clock, text: 'On-time delivery guaranteed' },
    { icon: Palette, text: '3D visualization & design' },
    { icon: Award, text: 'Budget transparency' },
    { icon: Users, text: 'In-house skilled team' },
    { icon: CheckCircle, text: 'Strong post-handover support' },
    { icon: Star, text: 'First-time homeowner friendly' }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        keywords={pageSEO.home.keywords}
        canonicalUrl="https://nakshtrainterior.com/"
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-[#E7D49E]/20 to-white">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#047C74]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C68D28]/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6 animate-fadeIn">
              <div className="inline-flex items-center space-x-2 bg-[#047C74] text-white rounded-full px-5 py-2.5 shadow-lg">
                <Star className="w-5 h-5 text-[#C68D28] fill-[#C68D28]" />
                <span className="text-sm font-semibold">
                  4+ years | 50+ homes transformed
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Transform Your Space Into a{' '}
                <span className="text-[#047C74] relative">
                  Dream Home
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-[#E7D49E] -z-10"></span>
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Complete interior solutions for 1, 2 and 3 BHK homes in Pune with transparent pricing, expert design, and exceptional post-handover support.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-4">
                <div>
                  <div className="text-2xl font-bold text-[#047C74]">4+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#047C74]">50+</div>
                  <div className="text-sm text-gray-600">Homes Transformed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#047C74]">4</div>
                  <div className="text-sm text-gray-600">Cities Served</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#047C74] hover:bg-[#036860] text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={scrollToPortfolio}
                  className="border-2 border-[#047C74] text-[#047C74] hover:bg-[#047C74] hover:text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-200"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative animate-fadeIn">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1682662046457-74fd5b199b92"
                  alt="Modern Indian living room interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#047C74] rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Post-Handover Support
                  </div>
                  <div className="text-xs text-gray-600">Our Biggest USP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive interior design solutions tailored to your needs and
              lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-[#047C74] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#047C74] font-medium text-sm flex items-center space-x-1 hover:space-x-2 transition-all duration-200"
                >
                  <span>Talk to a designer</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#E7D49E]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple, transparent 4-step journey from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#047C74] to-[#C68D28] opacity-20"></div>
                )}

                <div className="relative">
                  <div className="text-7xl font-extrabold text-[#047C74]/30 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our completed projects across Pune, Mumbai, Dhule & Nashik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <div
                key={index}
                onClick={() => handleProjectClick(project.id)}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/portfolio')}
              className="bg-[#047C74] hover:bg-[#036860] text-white px-8 py-3 rounded-lg font-medium inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#E7D49E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Nakshatra Interiors?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by 50+ homeowners for quality, transparency, and exceptional
              support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usps.map((usp, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-lg flex items-center justify-center flex-shrink-0">
                  <usp.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{usp.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Marathi motif decoration */}
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#047C74] to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#047C74] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to design your home interiors in Pune?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Share your details and our team will call you back with ideas and
            estimates
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#047C74] hover:bg-gray-100 px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={handleBookConsultation}
              className="bg-[#C68D28] hover:bg-[#B07A20] text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Instagram Feed Section */}
      <InstagramFeed />
    </div>
  );
};

export default Home;
