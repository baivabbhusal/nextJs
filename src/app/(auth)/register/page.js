"use client";

import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from '@/constants/regex';
import Link from 'next/link';
import { HOME_ROUTE, LOGIN_ROUTE } from '@/constants/routes';
import PasswordInput from '../_component/PasswordInput';
import { useRouter } from 'next/navigation';
import { signup } from '@/api/auth';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '@/redux/auth/authActions';
import Button from '@/components/Button';
const RegisterPage = () => {
const { register ,handleSubmit , watch,formState:{errors}} = useForm();
const password=watch("password");
const router=useRouter();
const {user,error,loading}=useSelector((state)=>state.auth);
const dispatch=useDispatch();

 async function submitForm(data) {
  dispatch(registerUser({
            name:data.name,
        email:data.email,
        password:data.password,
        confirmPassword:data.confirmPassword,
        phone:data.phone,
        address:{
          city:data.city,
          province:data.province,
        }
  }));

   }
   useEffect(()=>{
    if (error){
            toast.error(error.response?.data,{
        autoClose:1000,

      });
      return;
    }
    if(user){
      toast.success("Account created sucessfully.",{
        autoClose:1000,
      })
       router.push(HOME_ROUTE);
       }
       
   },[user,router,error])
  return (
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create an account
        </h1>
        <form onSubmit={handleSubmit(submitForm)} className="space-y-4 md:space-y-6">
           <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
            <input type="text"   
              {...register("name", {
                        required: "Name is required",
                        })}
              id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bahadur" required />
               <p className="text-red-500">{errors.name?.message}</p>       
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email"   
              {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: EMAIL_REGEX,
                          message: "Invalid email address.",
                        },
                        })}
              id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@gmail.com.com" required />
               <p className="text-red-500">{errors.email?.message}</p>       
          </div>
           <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input type="tel"   
              {...register("phone", {
                        required: "Phone number is required",
                        })}
              id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9800000000" required />
               <p className="text-red-500">{errors.phone?.message}</p>       
          </div>
          <div>
                      <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
            <input type="text"   
              {...register("city", {
                        required: "City is required",
                        })}
              id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kathmandu" required />
               <p className="text-red-500">{errors.city?.message}</p>       
          </div>
          <div>
            <label htmlFor="province" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Province</label>
            <select id="province"      
                 {...register("province", {
                        required: "province is required",
                        })}
                      defaultValue=""
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              <option value="" disabled>--Select--</option>
              <option value="Bagmati">Bagmati</option>
              <option value="Gandaki">Gandaki</option>
              <option value="Karnali">Karnali</option>
              <option value="Koshi">Koshi</option>
              <option value="Lumbini">Lumbini</option>
              <option value="Madesh">Madesh</option>
              <option value="Sudurpashchim">Sudurpashchim</option>
            </select>
               <p className="text-red-500">{errors.province?.message}</p>       
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <PasswordInput
            id="password"
             {...register("password", {
            required: "Password is required",
            minLength:{
              value:6,
              message:"Password must be at least 6 characters."
            },
          })}/>
           <p className="text-red-500">{errors.password?.message}</p>
          </div>
          <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <PasswordInput
            id="confirm-password"
            {...register("confirmPassword", {
            required: "confirm Password is required",
            minLength:{
              value:6,
              message:"Password length must be greater than 6."
            },
            validate:(value)=>{
              if(value === password ) return true;
              return "Password didn't matched."

              
            }
          })}/>
           <p className="text-red-500">{errors.confirmPassword?.message}</p>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" 
               type="checkbox" 
               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-primary hover:underline dark:text-primary-500" href="#">Terms and Conditions</Link></label>
            </div>
          </div>
          <Button loading={loading} label={"Create an Account"}/>

          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <Link href={LOGIN_ROUTE} className="font-medium text-primary hover:underline dark:text-primary-500">Login here</Link>
          </p>
        </form>
      </div>

  )
}

export default RegisterPage