import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route, data } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';


function App() {
  const [recipes, setRecipes] = useState(data);

  // function to add new recipe
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { id: recipes.length + 1, ...newRecipe }]);
  };


  return (
    <Router>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Recipe Sharing Platform
        </h1>


        <Routes>
          <Route path= "/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm/>} />
        </Routes>
      </div>
    </Router>
  );

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
