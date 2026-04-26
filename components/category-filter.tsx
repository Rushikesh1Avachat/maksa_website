import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Simple: { bg: 'bg-amber-800', text: 'text-white', border: 'border-amber-800' },
  Classic: { bg: 'bg-yellow-100', text: 'text-amber-800', border: 'border-yellow-300' },
  Joyful: { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-300' },
  Vibrant: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
  Premium: { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300' },
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex gap-4 justify-center flex-wrap mb-12">
      {categories.map((category) => {
        const colors = CategoryColors[category];
        const isSelected = selectedCategory === category;

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 ${
              isSelected
                ? `${colors.bg} ${colors.text} shadow-lg scale-105 border-2 ${colors.border}`
                : `${colors.bg} ${colors.text} border-2 ${colors.border} hover:shadow-md`
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
