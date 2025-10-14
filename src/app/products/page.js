import React from "react";
import ProductCard from "./_components/card";
import { getProducts } from "@/api/products";


const Products = async () => {
  const response = await getProducts();
  const products = response.data;

  return (
    <>
    <h1 className="text-3xl font-bold mb-2">All products</h1>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}

    </div>
    </>
  );
};
export default Products;
