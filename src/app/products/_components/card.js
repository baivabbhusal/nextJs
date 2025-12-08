import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaCartPlus, FaStar, FaStarHalf } from "react-icons/fa";
import { PRODUCT_ROUTE } from "@/constants/routes";

import emptyImage from "@/assets/images/products/imagePlaceholder.png"
import LoadingCard from "../loading";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md dark:bg-slate-900 dark:text-white">
      <div className="relative  w-full h-48 rounded-t-lg overflow-hidden">
        <Link href={`${PRODUCT_ROUTE}/${product._id}`}>
          <Image
            src={product.imageUrls[0] ?? emptyImage}
            className="object-contain hover:scale-105 transition-transform duration-300"
            alt={product.name}
            fill

          ></Image>
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
              Rs. {product.price}
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
