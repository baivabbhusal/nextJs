import React from "react";
import config from "@/config";
import { getProductById } from "@/api/products";

export const generateMetadata = async ({ params }) => {
  const productId = (await params).productId;
  const product = await getProductById(productId);
  return {
    title: product?.name,
    keywords: `${product?.name},${product?.brand},${product?.category}`,
  };
};

const ProductDetails = async ({ params, searchParams }) => {
  const productId = (await params).productId;
  const response=await getProductById(productId);


  const product = response.data;

  return (
    <div>
      <h1>Product Id:{productId}</h1>
      <ul className="text-green-500">
        <li>{product.name}</li>
        <li>{product.brand}</li>
        <li>{product.price}</li>
        <li>{product.description}</li>
      </ul>
    </div>
  );
};

export default ProductDetails;
