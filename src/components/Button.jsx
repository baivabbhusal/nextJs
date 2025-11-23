import React from 'react'
import Spinner from './spinner'

const Button = ({label,loading=false,type="submit",className="bg-primary hover:bg-secondary"}) => {
  return (
          <button
        
           type="submit" 
          disabled={loading}
          className={` relative grid gap-3 w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${className}`}>
            {label}
            {loading && <Spinner className="w-5 h-6 fill-secondary absolute right-3 top-2.5"/>}
            </button>
  )
}

export default Button
