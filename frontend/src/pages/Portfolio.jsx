import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Home, Calendar, ArrowRight, Play } from 'lucide-react';
import { projects } from '../data/mockProjects';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import SEO, { pageSEO } from '../components/SEO';

const Portfolio = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/portfolio/${projectId}`);
  };

  // Example before/after images (replace with your actual before/after photos)
  const beforeAfterExample = {
    before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
    after: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#E7D49E]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#047C74]">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Explore our completed projects across Maharashtra. Each project reflects our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            See the <span className="text-[#047C74]">Transformation</span>
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Drag the slider to see how we transform spaces
          </p>
          <BeforeAfterSlider
            beforeImage={beforeAfterExample.before}
            afterImage={beforeAfterExample.after}
            title="Kitchen Transformation Example"
          />
          <p className="text-sm text-gray-500 text-center mt-4">
            * Replace this with your actual before/after photos in the code
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.thumbnailImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="inline-block bg-[#047C74] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.type}
                    </div>
                    {project.videos && project.videos.length > 0 && (
                      <div className="flex items-center bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
                        <Play className="w-3 h-3 mr-1 fill-current" />
                        Video
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#047C74] transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-[#047C74]" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Home className="w-4 h-4 mr-2 text-[#047C74]" />
                      {project.area}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-[#047C74]" />
                      {project.completionDate}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-[#047C74] font-bold text-lg">
                      {project.budget}
                    </span>
                    <button className="text-[#047C74] font-medium text-sm flex items-center space-x-1 group-hover:space-x-2 transition-all duration-200">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#047C74] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's transform your space into something extraordinary
          </p>
          <button
            onClick={() => {
              const phoneNumber = '918999100590';
              const message = encodeURIComponent(
                "Hi Nakshatra Interiors, I'd like to discuss my interior design project."
              );
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="bg-white text-[#047C74] hover:bg-gray-100 px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
