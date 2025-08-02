import create from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [],
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
        filtererdRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    })),
}));


updateRecipe (updatedRecipe) ; set((state) => ({
  recipes: state.recipes.map((recipe) =>
    recipe.id === updatedRecipe.id ? updatedRecipe : recipe
  ),
})),
deleteRecipe (id) ;  set((state) => ({
  recipes: state.recipes.filter((recipe) => recipe.id !== id),
}));

searchTerm: '',
setSearchTerm (term) ; set({ searchTerm: term }),
filterRecipes () ;
  set((state) => ({
    filteredRecipes: state.recipes.filter((r) =>
      r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  }));

export const useRecipeStorecreate ((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set((state) => {
    const filtered = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase()) ||
      recipe.ingredients?.some(ing => ing.toLowerCase().includes(term.toLowerCase())) ||
      String(recipe.prepTime).includes(term)
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),
  
  addRecipe: (recipe) =>
    set((state) => {
      const updated = [...state.recipes, recipe];
      const filtered = updated.filter(r =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        r.ingredients?.some(ing => ing.toLowerCase().includes(state.searchTerm.toLowerCase())) ||
        String(r.prepTime).includes(state.searchTerm)
      );
      return { recipes: updated, filteredRecipes: filtered };
    }),
})); 
