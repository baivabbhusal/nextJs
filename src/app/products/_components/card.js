import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaCartPlus, FaStar, FaStarHalf } from "react-icons/fa";
import { PRODUCT_ROUTE } from "@/constants/routes";

import emptyImage from "@/assets/images/products/imagePlaceholder.png"
import LoadingCard from "../loading";

const ProductCard = ({ product }) => {
  return (
    // <div className='shadow p-4 rounded-2xl bg-slate-200'>
    //     <h2 className='text-2xl font-bold'>
    //     <Link href={`/products/${product.id}`}>{product.name}</Link>
    //       </h2>
    //     <div className='flex items-center gap-2'>
    //     <span className='bg-red-300 p-1'>{product.brand}</span>
    //     <span className='bg-amber-100 p-1'>{product.category}</span>
    //     </div>
    //     <p>Rs.{product.price}</p>
    //     <button className='border bg-amber-400 text-gray-600 p-1 rounded-xl'>Add to Cart</button>
    // </div>

    <div className="bg-white rounded-lg shadow-md">
      <div className="relative">
        <Link href={`${PRODUCT_ROUTE}/${product._id}`}>
          <Image
            src={product.imageUrls[0] ?? emptyImage}
            className="rounded-t-lg w-full h-48 object-cover hover:scale-105"
            alt={product.name}
            height={300}
            width={300}

          />
        </Link>

        <span className="absolute top-2 left-2 bg-red-500 text-white rounded-full text-xs py-3 px-1">
          -20%
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-xl hover:text-primary">
          <Link href={`${PRODUCT_ROUTE}/${product._id}`}>
          {product.name}
          </Link>
        </h3>
        <div className="text-yellow-500 text-xs py-2 flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />

          <span className="text-gray-500">(265)</span>
        </div>
        <div className="flex justify-between">
          <div>
            <span className="text-primary font-bold mr-1 text-lg">
              {product.price}
            </span>
            <span className="line-through text-gray-500 text-sm">
              {product.price * 1.2}
            </span>
          </div>
          <button className="text-primary">
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
