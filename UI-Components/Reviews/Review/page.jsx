import React, { useState } from 'react';
import { Star, StarHalf, ThumbsUp, Flag, MessageCircle, Share2 } from 'lucide-react';

const ReviewComponent = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      username: "@sarahj",
      rating: 4.5,
      date: "March 15, 2024",
      content: "Absolutely amazing experience! The attention to detail and quality of service exceeded my expectations. Would definitely recommend to anyone looking for top-notch service.",
      image: "/api/placeholder/64/64",
      likes: 124,
      replies: 8,
      verified: true,
      badges: ['Top Reviewer', 'Early Adopter']
    },
    {
      id: 2,
      name: "Michael Chen",
      username: "@mchen",
      rating: 5,
      date: "March 14, 2024",
      content: "Outstanding service from start to finish. The team was professional, friendly, and delivered exactly what was promised. This is exactly what exceptional service looks like.",
      image: "/api/placeholder/64/64",
      likes: 89,
      replies: 4,
      verified: true,
      badges: ['Verified Purchase']
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      username: "@emilyr",
      rating: 4,
      date: "March 13, 2024",
      content: "Very pleased with my experience. The staff was knowledgeable and helpful throughout the entire process. There's room for minor improvements, but overall great service.",
      image: "/api/placeholder/64/64",
      likes: 56,
      replies: 2,
      verified: true,
      badges: ['Product Expert']
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-star-${i}`} className="w-4 h-4 text-gray-600" />
      );
    }

    return stars;
  };

  const filters = ['all', '5 stars', '4 stars', '3 stars', '2 stars', '1 star'];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex items-center space-x-1">
              {renderStars(4.5)}
            </div>
            <span className="text-3xl font-bold text-white">4.5</span>
            <span className="text-gray-400">/ 5</span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <div className="flex items-start space-x-4">
                {/* User Image with Online Status */}
                <div className="relative">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-800"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                </div>

                <div className="flex-1">
                  {/* Header Section */}
                  <div className="flex flex-wrap items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                        <span className="text-sm text-gray-400">{review.username}</span>
                        {review.verified && (
                          <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-0.5 rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center space-x-1">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm text-gray-400">• {review.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {review.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Review Content */}
                  <p className="text-gray-300 leading-relaxed">
                    {review.content}
                  </p>

                  {/* Review Actions */}
                  <div className="flex items-center space-x-6 mt-4">
                    <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors group">
                      <ThumbsUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{review.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors group">
                      <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{review.replies}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors group">
                      <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors group ml-auto">
                      <Flag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;