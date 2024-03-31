import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center mb-4">
        <div className="md:w-24 md:h-24 md:rounded-full md:overflow-hidden md:mr-4 md:border-2 md:border-gray-200">
          <img
            className="w-full h-full object-cover"
            src={product.thumbnail}
            alt={product.brand}
          />
        </div>
        <div className="md:flex-grow">
          <h2 className="text-xl font-semibold mb-2 text-blue-900">
            {product.brand}
          </h2>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>

      <div className="md:flex justify-between items-center">
        <div>
          <p className="text-gray-700 font-semibold">Price: ${product.price}</p>
          <p className="text-gray-700 font-semibold">
            Rating: {product.rating}
          </p>
        </div>
        <div className="text-right">
          <p className="text-gray-700 font-semibold">
            Category: {product.category}
          </p>
          <p className="text-gray-700 font-semibold">
            {product.discountPercentage}% off
          </p>
          <p className="text-gray-700 font-semibold">Stock: {product.stock}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
