import React from 'react';
import { Recipe } from '../types/recipe';
import { ChefHat, Tag } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
          <div className="inline-flex items-center px-2 py-1 rounded bg-white/90 text-xs font-medium">
            <span className="text-gray-800">{recipe.cuisine}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2 font-heading">{recipe.title}</h2>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <ChefHat className="h-4 w-4 text-green-600 mr-1" />
          <span>{recipe.category}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-flex items-center text-xs px-2 py-1 bg-red-50 text-red-600 rounded-full"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <a
          href={`/recipe/${recipe.id}`}
          className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition-colors duration-200 flex items-center justify-center"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;