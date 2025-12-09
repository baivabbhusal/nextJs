import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FilterDrawer = ({ showFilter, setShowFilter }) => {
  const [limit,setLimit]=useState(10);
  const router=useRouter();
  
  function setFilter(){
    const params=new URLSearchParams();
    params.set("limit",limit);
    router.push(`?${params.toString()}`)

  }

  return (
    <div className={showFilter ? "block absolute" : "hidden"}>
      <div
        className="fixed top-0 right-0 h-screen w-full z-10 opacity-20 bg-slate-900"
        onClick={() => setShowFilter(!showFilter)}
      ></div>
      <div className="fixed min-h-screen bg-slate-50 min-w-64 top-16 left-0 z-20 px-4 pt-8">
        <h1 className="text-xl font-medium">Filter Product</h1>
        <div className="py-4">
          <label
            for="limit"
            class="block mb-2.5 text-sm text-gray-600 uppercase font-medium text-heading"
          >
           limit
          </label>
          <select
            id="limit"
            class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            onChange={(e)=>setLimit(e.target.value)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
          <button className="bg-primary" onClick={setFilter}>Apply Filter</button>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;
