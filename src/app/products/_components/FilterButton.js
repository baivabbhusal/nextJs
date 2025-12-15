"use client"
import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import FilterDrawer from './FilterDrawer'

const FilterButton = () => {
const [showFilter,setShowFilter]=useState(false)
  return (
    <>
    <button className='bg-secondary py-2 px-4 flex justify-center items-center gap-2 rounded-xl mr-2 text-white hover:bg-secondary/90 ' onClick={()=>setShowFilter(!showFilter)}>Filter<FaFilter /></button>
     <FilterDrawer showFilter={showFilter} setShowFilter={setShowFilter}/>
    </>
  )
}

export default FilterButton
