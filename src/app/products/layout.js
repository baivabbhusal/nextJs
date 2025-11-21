import React from 'react'

export const metadata={
  title:"Product",
  description:"clothing Product",
  keyword:"online nepal"//static method
};

const ProductLayout = ({children}) => {
  return (

            <div className='bg-slate-100 py-10 dark:bg-black dark:text-white'>

                {children}
                
            </div>

   
  )
}

export default ProductLayout