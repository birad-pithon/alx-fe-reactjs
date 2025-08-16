import { useState } from "react";

function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
      let newErrors = {};

      if (!title.trim()) newErrors.title = "Title is required";
      if (!ingredients.trim()) newErrors.ingredients = "ingredients are required";
      if (!steps.trim()) newErrors.steps = "Preparation steps are required";
      if (ingredients.split(",").length < 2) {
        newErrors.ingredients = "Please include at least two ingredients (coma-separated)";

      }

      return newErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validate();
        setErrors(newError);

        if (Object.keys(newErrors).length === 0) {
          AddRecipeForm({
            title,
            summary: steps.slice(0, 50) + "...",
            ingredients: ingredients.split(","),
            steps,
            image: "https://via.placeholder.com/150",
          });

           setTitle("");
            setIngredients("");
            setSteps("");
            Navigate("/");
        }
    };

    return(
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
       <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
         <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>  
        
           {/* Title */}
           <div className="mb-4">
             <label className="block text-gray-700 font-medium mb-2">Recipe Title</label>
             <input
               type="text"
               className="w-full md:w-3/4 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
             />
             {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
           </div>

           {/* Ingredients */}
           <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Ingredients (comma-separated)</label>
              <textarea
                className="w-full md:w-3/4 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                rows="3"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
              {errors.ingredients && (
                  <p className="text-red-500 text-sm">{errors.ingredients}</p>
               )}
           </div>

           {/* Steps */}
           <div>
             <label className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
             <textarea
               className="w-full md:w-3/4 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
               rows="4"
               value={steps}
               onChange={(e) => setSteps(e.target.value)}
             />
             {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
           </div>

           {/* Submit */}
           <button
             type="submit"
             className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
           >
             Add Recipe
           </button>
       </form>
      </div> 
    );
}

export default AddRecipeForm;