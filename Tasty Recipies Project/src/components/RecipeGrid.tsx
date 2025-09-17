import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '../types/recipe';

interface RecipeGridProps {
  recipes: Recipe[];
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes }) => {
  const [visibleRecipes, setVisibleRecipes] = useState<Recipe[]>(recipes.slice(0, 6));
  
  const handleLoadMore = () => {
    const currentLength = visibleRecipes.length;
    const more = recipes.slice(currentLength, currentLength + 3);
    setVisibleRecipes([...visibleRecipes, ...more]);
  };
  
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-heading">
        Delicious Recipes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      
      {visibleRecipes.length < recipes.length && (
        <div className="mt-10 text-center">
          <button 
            onClick={handleLoadMore}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors duration-200 inline-flex items-center"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeGrid;