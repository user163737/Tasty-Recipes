import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RecipeGrid from './components/RecipeGrid';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';
import LoginPage from './components/LoginPage';
import { recipes } from './data/recipes';
import { Recipe } from './types/recipe';

function App() {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredRecipes(recipes);
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const filtered = recipes.filter(
      recipe => 
        recipe.title.toLowerCase().includes(lowerQuery) ||
        recipe.cuisine.toLowerCase().includes(lowerQuery) ||
        recipe.category.toLowerCase().includes(lowerQuery) ||
        recipe.description.toLowerCase().includes(lowerQuery) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
    
    setFilteredRecipes(filtered);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <Routes>
          <Route
            path="/"
            element={
              <main className="container mx-auto px-4 py-8">
                <RecipeGrid recipes={filteredRecipes} />
                <SearchBar onSearch={handleSearch} />
              </main>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        
        <footer className="bg-gray-800 text-white py-6 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>© 2025 Tasty Recipes. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;