"use client";
import { login } from "@/api/auth";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "@/constants/regex";
import Link from "next/link";
import { HOME_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router=useRouter();
  const email = register("email");

  async function submitForm(data) {
    try {
      const response = await login(data);
      console.log(response);
      localStorage.setItem("authToken",response.data?.authToken);
      toast.success("Login Sucessfull",{
        autoClose:1000,
      })
      router.push(HOME_ROUTE)
    }
     catch (error) {
      toast.error(error.response?.data,{
        autoClose:1000,

      })
    }
  }

  return (
      <div className="p-2 space-y-4 md:space-y-6 sm:p-6">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white text-center">Welcome back!</h1>
        <h1 className="text-xl leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white text-center">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(submitForm)}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" 
    {...register("email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address.",
            },
          })}
           id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
           <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" 
                 {...register("password", {
            required: "Password is required",
            minLength:{
              value:6,
              message:"Password length must be greather than 6."
            }
          })}
            id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
              </div>
            </div>
            <a href="#" className="text-sm font-medium text-primary hover:underline dark:text-primary-500">Forgot password?</a>
          </div>
          <button type="submit" className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? <Link href={REGISTER_ROUTE} className="font-medium text-primary hover:underline dark:text-primary-500">Sign up</Link>
          </p>
        </form>
      </div>

  );
};

export default LoginPage;
