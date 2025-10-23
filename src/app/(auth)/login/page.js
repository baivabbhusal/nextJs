"use client";
import { login } from "@/api/auth";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "@/constants/regex";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const email = register("email");

  async function submitForm(data) {
    try {
      const response = await login(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center">
<form className="max-w-sm mx-auto" onSubmit={handleSubmit(submitForm)}>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email"
    {...register("email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address.",
            },
          })}
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
           <p>{errors.email?.message}</p>
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password"
     {...register("password", {
            required: "Password is required",
            minLength:{
              value:6,
              message:"Password length must be greather than 6."
            }
          })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          <p>{errors.password?.message}</p>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


    </div>
  );
};

export default LoginPage;
