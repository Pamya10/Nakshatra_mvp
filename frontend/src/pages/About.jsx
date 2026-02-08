import React from 'react';
import { Users, Target, Heart, Lightbulb, Handshake, TrendingUp } from 'lucide-react';
import SEO, { pageSEO } from '../components/SEO';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring top-quality craftsmanship and attention to detail.'
    },
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'Innovative designs that blend functionality with aesthetics, creating unique spaces that inspire.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest communication, transparent pricing, and ethical practices in all our client relationships.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Staying ahead with latest design trends and technologies to deliver modern, future-ready interiors.'
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'Working closely with clients to understand their vision and bring their dream spaces to life.'
    },
    {
      icon: Users,
      title: 'Perfection',
      description: 'Meticulous attention to every detail, ensuring flawless execution and exceeding expectations every time.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#E7D49E]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-[#047C74]">Nakshatra Interiors</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Adding aesthetics to life since August 2021
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in <span className="font-semibold text-[#047C74]">August 2021</span> by{' '}
                  <span className="font-semibold">Er. Akanksha Bari</span> and{' '}
                  <span className="font-semibold">Er. Namrata Hivrale</span>, Nakshatra Interiors was born from a shared passion for transforming ordinary spaces into extraordinary living experiences.
                </p>
                <p>
                  With backgrounds in engineering and a deep love for aesthetics, our founders recognized the need for practical, affordable, and beautiful interior design solutions for first-time homeowners in Pune and beyond.
                </p>
                <p>
                  What started as a small venture has grown into a trusted name, completing{' '}
                  <span className="font-semibold text-[#047C74]">50+ projects</span> across Pune, Mumbai, Dhule, and Nashik. Our commitment to precision, creativity, and genuine care for our clients has made us the go-to choice for those seeking personalized and timeless interior solutions.
                </p>
                <p>
                  At Nakshatra Interiors, we believe that every home has a story to tell, and our mission is to help you tell yours through thoughtful, innovative design that reflects your personality and enhances your lifestyle.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwyfHxsaXZpbmclMjByb29tfGVufDB8fHx8MTc3MDQ5MzcxMHww&ixlib=rb-4.1.0&q=85"
                  alt="Nakshatra Interiors workspace"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 flex space-x-6">
                <div>
                  <div className="text-3xl font-bold text-[#047C74]">4+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="w-px bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-[#047C74]">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="w-px bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-[#047C74]">4</div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#E7D49E]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To transform spaces into captivating reflections of our clients' dreams through innovative, personalized, and timeless interior design solutions. We are committed to delivering excellence in craftsmanship, maintaining transparency in our processes, and ensuring every project enhances the quality of life for those who inhabit it.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C68D28] to-[#047C74] rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a trusted destination for bespoke interior design across India, known for our exceptional craftsmanship, creativity, and unparalleled client experience. We aspire to continuously improve lives through beautiful, functional spaces that inspire and delight, while building lasting relationships based on trust and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-[#E7D49E]/5 to-white border border-gray-200 rounded-xl p-8 hover:border-[#047C74] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Decorative motif */}
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#047C74] to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#E7D49E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate engineers turned interior designers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#047C74] to-[#C68D28] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Er. Akanksha Bari
              </h3>
              <p className="text-[#047C74] font-medium mb-4">Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                With an engineering background and a keen eye for design, Akanksha brings technical precision and creative vision to every project.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#C68D28] to-[#047C74] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Er. Namrata Hivrale
              </h3>
              <p className="text-[#047C74] font-medium mb-4">Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                Namrata's passion for aesthetics and attention to detail ensures that every space reflects the unique personality of its inhabitants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#047C74] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Create Your Dream Home Together
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Experience the Nakshatra difference – where your vision meets our expertise
          </p>
          <button
            onClick={() => {
              const phoneNumber = '918999100590';
              const message = encodeURIComponent(
                "Hi Nakshatra Interiors, I'd like to discuss my interior design project."
              );
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="bg-white text-[#047C74] hover:bg-gray-100 px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 inline-block"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
