import React from 'react'
import emptyImage from "@/assets/images/products/imagePlaceholder.png"
import Image from 'next/image';

const layout = ({children}) => {
  return (
<section className='flex items-center justify-center h-screen bg-slate-100'>
 <div className='container mx-auto px-4'>
  <div className='flex justify-center items-center bg-white'>
    <Image
     href={ emptyImage }
     width={300}
     height={300} 
      ></Image>
      <div>{children}</div>

  </div>

 </div>
</section>
    
  )
}

export default layout