import React from "react";

const RecipeCard = ({ recipes }) => {
  const recipe = recipes || {}; // Handle cases where recipes is not provided

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      <div className="p-4">
        <img
          src={recipe.image || "https://via.placeholder.com/300"} // Default image placeholder
          alt={recipe.name || "Recipe Image"}
          className="h-64 w-full object-cover mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {recipe.name || "Unknown Recipe"}
        </h2>
        <p className="text-gray-600 mb-2">
          Rating: {recipe.rating || "N/A"} ({recipe.reviewCount || 0} reviews)
        </p>
        <p className="text-gray-600 mb-2">
          Cuisine: {recipe.cuisine || "Unknown Cuisine"}
        </p>
        <p className="text-gray-600 mb-2">
          Meal Type: {recipe.mealType?.join(", ") || "Unknown Meal Type"}
        </p>
        <p className="text-gray-600 mb-2">Difficulty: {recipe.difficulty}</p>
        <p className="text-gray-600 mb-2">Servings: {recipe.servings}</p>
        <p className="text-gray-600 mb-2">
          Cook Time: {recipe.cookTimeMinutes} minutes
        </p>
        <p className="text-gray-600 mb-2">
          Prep Time: {recipe.prepTimeMinutes} minutes
        </p>
        <p className="text-gray-600 mb-2">
          Calories Per Serving: {recipe.caloriesPerServing}
        </p>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc pl-6 mb-4">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient || "Unknown Ingredient"}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
        <ol className="list-decimal pl-6">
          {recipe.instructions?.map((instruction, index) => (
            <li key={index}>{instruction || "Unknown Instruction"}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeCard;
