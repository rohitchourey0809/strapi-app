// ProductList.js

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../Reduxcomp/api";

function ProductItems() {
  const dispatch = useDispatch();
  const productapi1 = useSelector((state) => state.AlldataStore?.Api1.products);

  const status = useSelector((state) => state.AlldataStore?.status);
  const error = useSelector((state) => state.AlldataStore?.error);
    const ProductItems = useSelector((state) => {
      console.log("ProductItems------->", state);
    });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
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
        {productapi1?.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductItems;
