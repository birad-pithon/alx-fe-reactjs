import { useRecipeStore } from '../store/recipeStore';
import { useEffect } from 'react';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input 
       type="text"
       placeholder="Search by tittle, ingredients, or prep time..."
       onChange={(e) => setSearchTerm(e.target.value)}
    />
  );

  useEffect(() => {
    filterRecipes();
  }, [useRecipeStore(state => state.searchTerm)]);

  return <input placeholder="Search..." onChange={handleChange} />;

};

export default SearchBar;
