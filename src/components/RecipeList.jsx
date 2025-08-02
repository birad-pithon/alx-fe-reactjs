import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

    return (
        <div>
            {useRecipeStore.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

const recipes = useRecipeStore(state => state.filteredRecipes);
