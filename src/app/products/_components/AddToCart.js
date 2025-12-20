"use client"
import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/cart/cartSlice'
import { toast } from 'react-toastify'

const AddToCart = ({product}) => {
    const dispatch=useDispatch();

    function AddToCart(){
        delete product.description; 
        dispatch(addToCart(product));
        toast("Product added to cart.",{
          autoClose:1000
        })

    }
  return (
     <button className="text-primary" onClick={AddToCart}>
     <FaCartPlus />
    </button>
  )
}
export default AddToCart;
