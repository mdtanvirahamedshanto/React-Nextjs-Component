import React, { useState, useEffect } from 'react';
import { Users, Rocket, Target, Award, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const CompanyAbout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Marketing Director",
      company: "TechCorp",
      image: "/api/placeholder/80/80",
      rating: 5,
      category: "web",
      content: "The level of creativity and technical expertise displayed by the team is outstanding. They transformed our vision into reality."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "Innovate Inc",
      image: "/api/placeholder/80/80",
      rating: 5,
      category: "branding",
      content: "Their strategic approach to branding helped us establish a strong market presence. Exceptional service from start to finish."
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Product Manager",
      company: "DesignPro",
      image: "/api/placeholder/80/80",
      rating: 5,
      category: "marketing",
      content: "The ROI from their digital marketing campaign exceeded our expectations. Their team is professional and results-driven."
    },
    {
      id: 4,
      name: "David Miller",
      role: "CTO",
      company: "FutureTech",
      image: "/api/placeholder/80/80",
      rating: 5,
      category: "web",
      content: "Implementing their solutions has streamlined our operations significantly. A truly talented and dedicated team."
    }
  ];

  const filters = [
    { id: 'all', label: 'All Reviews' },
    { id: 'web', label: 'Web Development' },
    { id: 'branding', label: 'Branding' },
    { id: 'marketing', label: 'Marketing' }
  ];

  const filteredReviews = reviews.filter(review => 
    activeFilter === 'all' || review.category === activeFilter
  );

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => 
          prev === filteredReviews.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredReviews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === filteredReviews.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? filteredReviews.length - 1 : prev - 1
    );
  };

  // Previous company about code remains the same...

  {/* Add this new review section before the closing div of the component */}
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Previous sections remain the same... */}

      {/* Review Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-300">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>

        {/* Review Filter Options */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setCurrentSlide(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Review Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-gray-800">
            <div className="relative">
              {/* Review Cards */}
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="flex">
                  {filteredReviews.map((review, index) => (
                    <div
                      key={review.id}
                      className="w-full flex-shrink-0 p-8 md:p-12"
                    >
                      {/* Review Content */}
                      <div className="max-w-3xl mx-auto">
                        <div className="flex items-center justify-center mb-6">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-300 text-lg md:text-xl text-center mb-8 italic">
                          "{review.content}"
                        </p>
                        <div className="flex items-center justify-center">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-600/20"
                          />
                          <div className="ml-4 text-left">
                            <h4 className="text-white font-semibold">{review.name}</h4>
                            <p className="text-gray-400 text-sm">{review.role}</p>
                            <p className="text-blue-400 text-sm">{review.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 pb-6">
              {filteredReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? 'bg-blue-600 w-4'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Autoplay Control */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`mt-4 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              isAutoPlaying
                ? 'bg-blue-600/20 text-blue-400'
                : 'bg-gray-800 text-gray-400'
            }`}
          >
            {isAutoPlaying ? 'Pause Autoplay' : 'Start Autoplay'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyAbout;