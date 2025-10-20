"use client"
import { login } from "@/api/auth"
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register }=useForm();
  const email=register("email");


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
             <input type="email" {...register("email"),{
              required:"email is required"
             }} placeholder="Enter a email" />
            <label className='block'>Password</label>
             <input type="password" {...register("password"),{
              required:"password is required"
             }} placeholder="Enter a password" />
        <br></br>
        <button type="button" className="bg-amber-400 text-2xl text-amber-50 px-3.5 my-1" onClick={loginUser}>Login</button>
        </form>
    </div>
  )
}

export default LoginPage