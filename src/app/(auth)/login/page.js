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
      <form onSubmit={handleSubmit(submitForm)}>
        <label className="block">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address.",
            },
          })}
          placeholder="Enter a email"
        />
        <p>{errors.email?.message}</p>
        <label className="block">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength:{
              value:6,
              message:"Password length must be greather than 6."
            }
          })}
          placeholder="Enter a password"
        />
        <p>{errors.password?.message}</p>
        <br></br>
        <input
          type="submit"
          className="bg-amber-400 text-2xl text-amber-50 px-3.5 my-1"
          value={"Login"}
        ></input>
      </form>
    </div>
  );
};

export default LoginPage;
