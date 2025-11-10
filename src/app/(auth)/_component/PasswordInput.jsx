"use client"
import React from 'react'
import { FaRegEye,FaRegEyeSlash  } from 'react-icons/fa'
import { useState } from 'react'

const PasswordInput = (props) => {
  const [showPassword,setShowPassword]=useState(false);
  return (
    <div className='relative'>
                <input
                type={showPassword ? "text":"password"} 
             placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             {...props}
             
             />
             <button type="button" 
             className='absolute top-4 right-3'
             onClick={()=>setShowPassword(!showPassword)} 
             >
              {showPassword ? <FaRegEye />:<FaRegEyeSlash />}</button>
              
            
             </div>
  )
}


export default PasswordInput