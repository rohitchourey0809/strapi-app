import React from "react";

const RecipeCard = ({ recipes }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      <img
        className="h-64 w-full object-cover"
        src={recipes.image}
        alt={recipes.name}
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {recipes.name}
        </h2>
        <div className="flex items-center mb-4">
          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
          <p className="text-gray-600">
            {recipes.rating} ({recipes.reviewCount} reviews)
          </p>
        </div>
        <div className="flex justify-between text-gray-600 mb-4">
          <p>{recipes.cuisine}</p>
          <p>{recipes.mealType.join(", ")}</p>
        </div>
        <div className="flex justify-between text-gray-600 mb-4">
          <p>Difficulty: {recipes.difficulty}</p>
          <p>Servings: {recipes.servings}</p>
        </div>
        <div className="flex justify-between text-gray-600 mb-4">
          <p>Cook Time: {recipes.cookTimeMinutes} minutes</p>
          <p>Prep Time: {recipes.prepTimeMinutes} minutes</p>
        </div>
        <div className="flex justify-between text-gray-600 mb-4">
          <p>Calories Per Serving: {recipes.caloriesPerServing}</p>
        </div>
        <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc pl-6 mb-4">
          {recipes.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
        <ol className="list-decimal pl-6">
          {recipes.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeCard;
