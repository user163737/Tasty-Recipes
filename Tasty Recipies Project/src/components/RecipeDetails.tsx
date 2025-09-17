import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChefHat, Star, Tag, ArrowLeft } from 'lucide-react';
import { Recipe } from '../types/recipe';
import { recipes } from '../data/recipes';

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showInstructions, setShowInstructions] = useState(false);
  
  const recipe = recipes.find(r => r.id === id);
  
  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800">Recipe not found</h2>
      </div>
    );
  }
  
  return (
    <article className="container mx-auto px-4 py-8">
      <a
        href="/"
        className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 transition-colors duration-200"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Recipes
      </a>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover"
        />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 font-heading">
            {recipe.title}
          </h1>
          
          <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <ChefHat className="h-5 w-5 text-green-600 mr-2" />
              {recipe.cuisine}
            </div>
            <div>{recipe.category}</div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-1 fill-current" />
              {recipe.rating.toFixed(1)}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {recipe.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center text-sm px-3 py-1 bg-red-50 text-red-600 rounded-full"
              >
                <Tag className="h-4 w-4 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-gray-600 mb-8">{recipe.description}</p>
          
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="mb-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-200"
          >
            {showInstructions ? 'View Ingredients & Reviews' : 'View Instructions'}
          </button>
          
          {!showInstructions ? (
            <div>
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-heading">
                  Ingredients
                </h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600"
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-heading">
                  Reviews
                </h2>
                <div className="space-y-6">
                  {recipe.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-6 last:border-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800">
                          {review.userName}
                        </span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">
                            {review.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                      <span className="text-sm text-gray-500 mt-2 block">
                        {review.date}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors duration-200">
                  Leave Review
                </button>
              </section>
            </div>
          ) : (
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-heading">
                Instructions
              </h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4">
                      {index + 1}
                    </span>
                    <p className="text-gray-600">{instruction}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>
      </div>
    </article>
  );
};

export default RecipeDetails;