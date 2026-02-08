import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Home, Calendar, DollarSign, Clock, ArrowLeft, X, Play } from 'lucide-react';
import { projects } from '../data/mockProjects';

// Helper function to extract YouTube video ID
const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Helper function to extract Vimeo video ID
const getVimeoVideoId = (url) => {
  const regExp = /vimeo\.com\/(?:.*\/)?(\d+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

// Video Player Component
const VideoPlayer = ({ video }) => {
  if (video.type === 'youtube') {
    const videoId = getYouTubeVideoId(video.url);
    return (
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-900">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.title || 'YouTube video'}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (video.type === 'vimeo') {
    const videoId = getVimeoVideoId(video.url);
    return (
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-900">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}`}
          title={video.title || 'Vimeo video'}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // Direct video file
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-900">
      <video
        controls
        className="absolute inset-0 w-full h-full object-cover"
        src={video.url}
        title={video.title || 'Project video'}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/portfolio')}
            className="text-[#047C74] hover:underline"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 bg-gradient-to-b from-[#E7D49E]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/portfolio')}
            className="flex items-center space-x-2 text-[#047C74] hover:text-[#036860] mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Portfolio</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Project Info */}
            <div>
              <div className="inline-block bg-[#047C74] text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                {project.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4 bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#047C74] mt-1" />
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-semibold text-gray-900">{project.location}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="w-5 h-5 text-[#047C74] mt-1" />
                  <div>
                    <div className="text-sm text-gray-500">Area</div>
                    <div className="font-semibold text-gray-900">{project.area}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-[#047C74] mt-1" />
                  <div>
                    <div className="text-sm text-gray-500">Budget</div>
                    <div className="font-semibold text-gray-900">{project.budget}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#047C74] mt-1" />
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 col-span-2">
                  <Calendar className="w-5 h-5 text-[#047C74] mt-1" />
                  <div>
                    <div className="text-sm text-gray-500">Completed</div>
                    <div className="font-semibold text-gray-900">{project.completionDate}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[500px]">
              <img
                src={project.thumbnailImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    View Full Image
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Videos Section (if available) */}
          {project.videos && project.videos.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center mb-6">
                <Play className="w-6 h-6 text-[#047C74] mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">Project Videos</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.videos.map((video, index) => (
                  <div key={index} className="space-y-2">
                    <VideoPlayer video={video} />
                    {video.title && (
                      <p className="text-sm font-medium text-gray-700 text-center">
                        {video.title}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#E7D49E]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Like This Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create something similar for your home
          </p>
          <button
            onClick={() => {
              const phoneNumber = '918999100590';
              const message = encodeURIComponent(
                `Hi Nakshatra Interiors, I loved the ${project.title} project. I'd like to discuss a similar design for my home.`
              );
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="bg-[#047C74] hover:bg-[#036860] text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
