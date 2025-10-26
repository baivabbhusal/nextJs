import React from 'react'
import emptyImage from "@/assets/images/products/imagePlaceholder.png";
import Image from 'next/image';

const layout = ({children}) => {
  return (
<section>
 <div className='container mx-auto px-4'>
  <div className='flex justify-center gap-0'>
    <Image href={emptyImage} width={300} height={270}   ></Image>
      <div>{children}</div>

  </div>

 </div>
  <div>{children}</div>

</section>
    
  )
}

export default layout