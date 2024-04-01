// recipesList.js

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsFromSecondAPI } from "../Reduxcomp/api";
import RecipeCard from "./RecipeCard";

function ReceipiItem() {
  const dispatch = useDispatch();
  const productapi2 = useSelector((state) => state.AlldataStore?.Api2.recipes);

  const status = useSelector((state) => state.AlldataStore?.status);
  const error = useSelector((state) => state.AlldataStore?.error);
  const ProductItems = useSelector((state) => {
    console.log("ProductItems------->", state);
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProductsFromSecondAPI());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="productapi1">
        {productapi2 ? (
          productapi2?.map((recipes) => (
            <div key={recipes.id}>
              <RecipeCard recipes={recipes} />
            </div>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

export default ReceipiItem;
