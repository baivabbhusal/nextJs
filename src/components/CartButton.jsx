"use client"
import { PRODUCT_CART_ROUTE } from '@/constants/routes';
import { useRouter } from 'next/navigation';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const CartButton = () => {
    const router=useRouter();
    const {products}=useSelector((state)=>state.cart)
  return (
    
    
        <button onClick={()=>router.push(PRODUCT_CART_ROUTE)} className='text-sm relative'>    
        <span className='text-primary font-bold text-[0.7rem] p-0.5 relative top-0.5 left-0.2 bg-secondary text-white rounded-b-full dark:bg-white dark:text-secondary'>{products.length}</span>                 
        <BsCart3 />
        </button>
      
  )
}

export default CartButton
