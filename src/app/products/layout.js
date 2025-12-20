import React from 'react'

export const metadata={
  title:"Product",
  description:"clothing Product",
  keyword:"online nepal"//static method
};

const ProductLayout = ({children}) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 pb-16 pt-4">
        <div className="min-h-screen">{children}</div>
      </div>
    </div>

   
  )
}

export default ProductLayout