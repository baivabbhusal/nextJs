"use client"
import { login } from "@/api/auth"
import React from 'react'

const LoginPage = () => {
  const { register }=useForm();
  const email=


  async function login(){
    try {
      const response=await login({
        email:"samarajyastha@gmail.com",
        password:"Test@123456",

      }) ;
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-center'>

        <form>
            <label className='block'>Email</label>
             <input type="email" placeholder="Enter a email" />
            <label className='block'>Password</label>
             <input type="password" placeholder="Enter a password" />
        </form>
        <br></br>
        <button type="submit" className="bg-amber-400 text-2xl text-amber-50 w-1/3 ">Submit</button>
    </div>
  )
}

export default LoginPage