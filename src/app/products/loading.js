import React from 'react'
import emptyImage from "@/assets/images/products/imagePlaceholder.png";
import Image from "next/image";
export const LoadingCard=()=>{
return (
      <div className="shadow rounded-2xl bg-slate-50 animate-pulse duration-100 ease-in-out">
        <Image
          src={emptyImage}
          className="rounded-t-lg w-full h-48 object-cover hover:scale-105"
          alt="image"
          height={300}
          width={300}
        />
        <div className="w-full bg-black h-5 mt-3"></div>
        <div className="flex items-center gap-2 my-1">
          <span className="bg-yellow-500 p-1 w-20 h-5 my-1"></span>
          <span className="bg-slate-400 p-1 w-10 h-5 my-1"></span>
        </div>
        <div className="flex items-center gap-2 my-1 w-full mb-4">
          <span className="px-4 bg-purple-700 w-1/3 h-3"></span>
          <span className="bg-slate-500 w-1/3 h-3"></span>
        </div>
      </div>
);

}


const Productloading = () => {
  return (
  
  <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
  <LoadingCard />
  <LoadingCard />
  <LoadingCard />
  <LoadingCard />
  <LoadingCard />
  <LoadingCard />
  <LoadingCard />
  <LoadingCard />
  <LoadingCard />
  <LoadingCard />
  <LoadingCard />
  <LoadingCard />
  </div>

  )
};

export default Productloading;