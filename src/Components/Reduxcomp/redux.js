// ProductList.js

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchProductsFromSecondAPI } from "./api";
import ProductItem from "../ProductComp/ProductCard";
import RecipeCard from "../ReceipeComp/ReceipiItem";

function ProductList() {
  const dispatch = useDispatch();

  // AlldataStore: productsReducer,

  const productapi1 = useSelector((state) => state.AlldataStore?.Api1.products);
  const productapi2 = useSelector((state) => state.AlldataStore?.Api2.recipes);
  console.log("productapi2---->", productapi2);

  const status = useSelector((state) => state.AlldataStore?.status);
  const error = useSelector((state) => state.AlldataStore?.error);
  const AllState = useSelector((state) => {
    console.log("AllState------->", state);
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
      dispatch(fetchProductsFromSecondAPI());
    }
  }, [status, dispatch]);
  // useEffect(() => {
  //   // Dispatch async thunk functions to fetch data from APIs
  //   //  dispatch(fetchProductsFromFirstAPI());

  // }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="productapi1">
        {productapi1?.map((product) => (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
      <div className="productapi1">
        {productapi2?.map((recipes) => (
          <div key={recipes.id}>
            <RecipeCard recipes={recipes} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
