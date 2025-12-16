import React from "react";
import ProductCard from "./_components/card";
import { getProducts } from "@/api/products";
import FilterButton from "./_components/FilterButton";
import SearchBar from "./_components/SearchBar";


const Products = async ({searchParams}) => {
  const response = await getProducts( await searchParams);
  const products = response.data;

  return (
    <>
    <div className="flex flex-col justify-between items-center md:flex-row">
      <h1 className="text-3xl font-bold mb-2 text-black dark:text-white">All products</h1>
<div className="flex items-center justify-center gap-2 md:gap-12">
        <SearchBar />
      <FilterButton />
</div>

  
     </div>
           {products?.length==0 && (
        <div className=" mx-auto w-full my-5 bg-secondary/50 text-center">
          <h1 className="font-semibold text-white text-3xl text-center p-4">Products not found</h1>
          </div>
      )}
    <div className=" container mx-auto p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}

    </div>
    </>
  );
};
export default Products;
