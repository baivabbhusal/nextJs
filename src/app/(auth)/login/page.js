"use client"
import { login } from "@/api/auth"
import React from 'react'

const LoginPage = () => {
  // const { register }=useForm();


  async function loginUser(){
    try {
      const response=await login({
        email:"hari@gmail.com",
        password:"Test@12345",

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
        <br></br>
        <button type="button" className="bg-amber-400 text-2xl text-amber-50 px-3.5 my-1" onClick={loginUser}>Login</button>
        </form>
    </div>
  )
}

export default LoginPage