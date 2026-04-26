'use client';

import { Star, MessageCircle, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ReviewsDesign3() {
  // Animated live counter
  const [live, setLive] = useState(0);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (live < 667) {
      interval = setInterval(() => {
        setLive((prev) => Math.min(prev + 7, 667));
      }, 20);
    }
    return () => clearInterval(interval);
  }, [live]);

  const reviews = [
    {
      id: 1,
      name: 'Virat Bhatt',
      rating: 5,
      text: 'Achha hai but confusing. Pehle socha why purchase ab weirdly enjoying it. Flavor is okay.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      rating: 5,
      text: 'Absolutely love this product. The chocolate flavor is just perfect. Great quality and taste!',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      rating: 4,
      text: 'Great product at a reasonable price. Delivery was fast. Will definitely buy again.',
      avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    },
    {
      id: 4,
      name: 'Anjali Singh',
      rating: 5,
      text: 'The taste and texture are amazing. Very healthy and I love the chocolate addition. Highly recommended!',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Social Proof Banner */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-2xl border border-amber-200">
        <div className="flex items-center gap-4">
          <Users size={36} className="text-amber-700" />
          <div>
            <div className="text-3xl font-bold text-amber-700">{live}+</div>
            <div className="text-gray-700 font-medium">Happy Customers</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Star size={36} className="text-yellow-400" />
          <div>
            <div className="text-3xl font-bold text-amber-700">4.7/5</div>
            <div className="text-gray-700 font-medium">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Carousel of Reviews */}
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 shadow hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-200"
                />
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-base">{review.text}</p>
              <div className="flex gap-2 mt-2">
                <button className="flex items-center gap-1 text-amber-700 hover:text-amber-900 text-sm font-medium">
                  <MessageCircle size={14} /> Reply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Review Button */}
      <div className="text-center">
        <button className="px-8 py-3 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition">
          Add Your Review
        </button>
      </div>
    </div>
  );
}
