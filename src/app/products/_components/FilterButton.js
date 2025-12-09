"use client"
import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import FilterDrawer from './FilterDrawer'
import { set } from 'date-fns'

const FilterButton = () => {
const [showFilter,setShowFilter]=useState(false)
  return (
    <>
    <button className='bg-secondary p-2 flex justify-center items-center gap-2 rounded-xl mr-2 text-white hover:bg-secondary/90 ' onClick={()=>setShowFilter(!showFilter)}>Filter<FaFilter /></button>
     <FilterDrawer showFilter={showFilter} setShowFilter={setShowFilter}/>
    </>
  )
}

export default FilterButton
