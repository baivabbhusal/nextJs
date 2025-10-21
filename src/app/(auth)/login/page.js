"use client"
import { login } from "@/api/auth"
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register , handleSubmit}=useForm();
  const email=register("email");


  async function submitForm(data){
    try {
      const response=await login(data);
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-center'>

        <form onSubmit={handleSubmit(submitForm)}>
            <label className='block'>Email</label>
             <input type="email" {...register("email")} placeholder="Enter a email" />
            <label className='block'>Password</label>
             <input type="password" {...register("password")} placeholder="Enter a password" />
        <br></br>
        <button type="submit" className="bg-amber-400 text-2xl text-amber-50 px-3.5 my-1">Login</button>
        </form>
    </div>
  )
}

export default LoginPage