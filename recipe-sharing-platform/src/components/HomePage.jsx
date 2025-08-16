import React, { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
    const [recipe, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(data); // load mock data
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Recipe Sharing Platform
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {setRecipes.map((recipe) => (
                    <Link
                      to={`/recipe/${recipe.id}`}
                      key={recipe.id}
                      className="bg-white rounded-2×l shadow hover:shadow-lg hover:scale-105 transition transform p-4"
                     >
                        <img
                          src={recipe.image}
                          alt={recipe.tittle}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-semibold mt-3">{recipe.tittle}</h2>
                        <p className="text-gray-600 mt-1">{recipe.summary}</p>
                     </Link> 
                ))}
            </div>
        </div>
    );
}

export default HomePage;