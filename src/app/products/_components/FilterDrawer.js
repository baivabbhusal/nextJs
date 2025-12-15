import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FilterDrawer = ({ showFilter, setShowFilter }) => {
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState(JSON.stringify({ createdAt: -1 }));
  const [min,setMin]=useState(0);
  const [max,setMax]=useState(10000000);
  const [category,setCategory]=useState(null);

  const router = useRouter();

  function setFilter() {
    const params = new URLSearchParams();
    params.set("limit", limit);
    params.set("sort", sort);
    params.set("min", min<0?0:min);
    params.set("max", max);
    params.set("category",category)
    router.push(`?${params.toString()}`);
  }

  return (
    <div className={showFilter ? "block absolute" : "hidden"}>
      <div
        className="fixed top-0 right-0 h-screen w-full z-10 opacity-20 bg-slate-900"
        onClick={() => setShowFilter(!showFilter)}
      ></div>
      <div className="overflow-y-auto fixed h-screen bg-slate-50 min-w-64 top-0 left-0 z-20 px-4 pt-8 dark:bg-slate-950">
        <h1 className="text-xl font-medium mt-16">Filter Product</h1>
        <div className="py-2">
          <label
            for="limit"
            className="block mb-2.5 text-sm text-gray-600 uppercase font-medium text-heading"
          >
            limit
          </label>
          <select
            id="limit"
            name="limit"
            className="block w-full px-3 py-2.5 rounded-xl bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body dark:bg-slate-600"
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </div>

        <div className="py-2">
          <label
            for="limit"
            className="block mb-2.5 text-sm text-gray-600 uppercase font-medium text-heading"
          >
           Order By
          </label>
          <select
            id="order-by"
            name="order-by"
            className="block w-full px-3 py-2.5 rounded-xl bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body dark:bg-slate-600"
            onChange={(e) => setSort(e.target.value)}

          >
            <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
            <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
            <option value={JSON.stringify({ price: 1 })}>
              Price Low to High
            </option>
            <option value={JSON.stringify({ price: -1 })}>
              Price High to Low
            </option>
          </select>
        </div>
        <div className="py-2">
          <label
            for="price"
            className="block mb-2.5 text-sm text-gray-600 uppercase font-medium text-heading"
          >
            Price Range
          </label>
          <label
            for="min-price"
            className="block mb-2.5 text-sm text-black dark:text-white uppercase font-medium text-heading"
          >
            Minimum Price:
          </label>
          <input
            type="number"
            id="min-price"
            className="block w-full px-3 py-2.5 rounded-xl bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body dark:bg-slate-600 mb-2.5"
          onChange={(e) => setMin(e.target.value)}
          min={0}
          ></input>
          <label
            for="max-price"
            className="block mb-2.5 text-sm text-black dark:text-white uppercase font-medium text-heading"
          >
            Maximum Price:
          </label>
          <input
            type="number"
            id="max-price"
            className="block w-full px-3 py-2.5 rounded-xl bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body dark:bg-slate-600 mb-2.5"
          onChange={(e) => setMax(e.target.value)}
          ></input>
        </div>
                <div className="py-2">
          <label
            for="category"
            className="block mb-2.5 text-sm text-gray-600 uppercase font-medium text-heading"
          >
            category
          </label>
          <select
            id="category"
            name="category"
            className="block w-full px-3 py-2.5 rounded-xl bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body dark:bg-slate-600"
            onChange={(e) => setCategory(e.target.value)}

          >
              <option value="Pant">Pant</option>
              <option value="T-shirt">T-Shirt</option>
              <option value="Hoodie">Hoodie</option>
              <option value="Underwear">Underwear</option>
              <option value="Coat">Coat</option>
              <option value="Traditional">Traditional</option>
              <option value="shirt">Shirt</option>

          </select>
        </div>

        <button
          className="bg-primary px-4 py-2 text-xl mt-4  text-white rounded-xl hover:bg-primary/80"
          onClick={setFilter}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterDrawer;
