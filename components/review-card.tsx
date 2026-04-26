import React from 'react';
import { Star, Heart, Share2, ThumbsUp, Check } from 'lucide-react';

interface ReviewCardProps {
  title: string;
  content: string;
  rating: number;
  author: string;
  location: string;
  date: string;
  sizeVariant: string;
  imageUrl: string;
  isVerified: boolean;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  content,
  rating,
  author,
  location,
  date,
  sizeVariant,
  imageUrl,
  isVerified,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 border-l-4 border-orange-400 hover:shadow-md transition-shadow">
      {isVerified && (
        <div className="flex justify-end mb-3">
          <span className="inline-flex items-center gap-1 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            <Check size={14} /> Verified Purchase
          </span>
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

      <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
        {content}
      </p>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
        <span className="text-gray-600 text-sm font-medium ml-2">({rating}/5)</span>
      </div>

      <div className="mb-4 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-sm">
            {imageUrl === 'https://via.placeholder.com/80?text=BS' ? 'BS' : author[0]}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">{author}</p>
            <p className="text-gray-500 text-xs">{date} · {location}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <button className="px-3 py-2 rounded-lg bg-orange-100 text-orange-600 text-sm font-medium hover:bg-orange-200 transition">
          Size: <span className="font-bold">{sizeVariant}</span>
        </button>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition text-sm">
            <Heart size={16} /> Like
          </button>
          <button className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition text-sm">
            <ThumbsUp size={16} /> Helpful
          </button>
          <button className="flex items-center gap-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm">
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>
    </div>
  );
};
