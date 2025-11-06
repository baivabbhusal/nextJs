import React from 'react'
import emptyImage from "@/assets/images/products/imagePlaceholder.png"
import Image from 'next/image';
import Logo from '@/components/logo';
import manWear from "@/assets/images/loginDesign/manWear.jpg"

const layout = ({children}) => {
  return (
<section className='flex py-10 md:items-center justify-center bg-slate-100'>
 <div className='container mx-auto px-4'>
  <div className='flex justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-white'>
    <div className='hidden md:flex flex-col justify-evenly p-3 h-full'>
      <Image 
      alt="This is image"
      src={manWear}
      className='rounded-4xl'
      ></Image>
    </div>
      <div>{children}</div>

  </div>

  </div>

 </div>
</section>
    
  )
}

export default layout