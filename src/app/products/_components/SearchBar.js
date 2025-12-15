"use client"
import { PRODUCT_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdCancel, MdClose } from "react-icons/md";

const SearchBar = () => {
    const [productName,setProductName]=useState("");
    const router=useRouter();

    function searchProduct(e){
        if(e.key!="Enter") return;
    const params = new URLSearchParams();
    params.set("name", productName);
    router.push(`?${params.toString()}`);
        
    }

    function clearSearch(){
     setProductName("");
      router.push(PRODUCT_ROUTE);
    }
  return (
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="text-gray-500"/>
        </div>
        <input
          type="text"
          id="search"
          className="block w-full py-2 ps-9 bg-gray-50 text-heading text-sm rounded-base border border-gray-300 focus:ring-brand focus:border-brand shadow-2xs rounded-xl placeholder:text-body"
          placeholder="Search for products..."
          onChange={(e)=>setProductName(e.target.value)}
          onKeyDown={searchProduct}
          value={productName}
        />
        <div className="absolute top-2.5 right-1">
          {productName!="" && <MdClose className="text-red-500" onClick={clearSearch}/>}
        </div>
      </div>
  );
};

export default SearchBar;
