import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";



export default function App() {
  const { register, formState: {errors} , handleSubmit, getValues } = useForm();
  

  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  
  


  

  return (
    <form
      className="flex flex-col bg-slate-50 bg-opacity-90  rounded-md mx-[10%] lg:w-[28%] "
      onSubmit={handleSubmit(onSubmit)}
    >


      <h1 className="text-xl font-light pl-7 pt-7 bg-slate-50 p-5 bg-opacity-50 border-b-2">
        Registration form
      </h1>


      {/* userName input */}
      <div className="flex flex-col px-7 mb-8">
        <div className="mt-8 relative border-slate-100 border-2  text-m">
          <input
          minLength={5}
            className=" p-1 w-full outline-none"
            placeholder="Username"
            type="text"
            {...register("userName", { required: true })}
          />
          <FontAwesomeIcon
            className=" bg-white p-2 absolute right-0 border-l-2 text-slate-200 "
            icon={faUser}
          />
        </div>


         {/* email input */}
        <div className="mt-5 relative border-slate-100 border-2  text-m">
          <input
            className="p-1 border-orange-50 w-full outline-none"
            placeholder="Email adress"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net)$/,
              message: "Please enter a valid email"
            })}
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="bg-white p-2 absolute right-0 border-l-2 text-slate-200"
          />
        </div>
        {errors.email && <span className="text-red-900 text-sm">x Email only (.com or .net)</span>}


         {/* password input */}
        <div className="mt-5 relative border-slate-100 border-2  text-m">
          <input
          minLength={8}
            className="p-1 border-orange-50 w-full outline-none"
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          <FontAwesomeIcon
            icon={faLock}
            className="bg-white p-2 absolute right-0 border-l-2 text-slate-200"
          />
        </div>
        
        {/* confirm Password input */}
        <div className="mt-5 relative border-slate-100 border-2 text-m">
          <input

          minLength={8}
            className="p-1 border-orange-50 w-full outline-none"
            placeholder="Confirm password"
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => {
              const { password } = getValues();
              return password === value || "Passwords should match!";
              }
            })}
          />
          <FontAwesomeIcon
            icon={faLock}
            className="bg-white p-2 absolute right-0 border-l-2 text-slate-200"
          />
        </div>
        {errors.confirmPassword && <p className="text-red-900 text-sm">{errors.confirmPassword.message}</p>}
      </div>
      <hr />

      <div className="mt-5 px-7 flex">
        <div className=" relative border-slate-100 border-2  text-m mr-2">
          <input
          minLength={3}
            className="p-1 border-orange-50 w-full outline-none"
            placeholder="First Name"
            type="text"
            {...register("firstName", {
              required: true,
            })}
          />
        </div>
        <div className="relative border-slate-100 border-2  text-m">
          <input
          minLength={3}
            className="p-1 border-orange-50 w-full outline-none"
            placeholder="Last Name"
            type="text"
            {...register("lastName", {
              required: true,
            })}
          />
        </div>
      </div>
      <div className="px-7 font-light mb-5">
        <input
          className="self-start mt-7 p-1 border-slate-100 border-2"
          name="rules"
          type="checkbox"
          {...register("rules", { required: true })}
        />
        <label htmlFor="rules"> I agree to the Terms of Service</label>
      </div>
      <hr/>
      <div className="text-l font-light pl-7 pt-7 bg-slate-100 w-full p-5 bg-opacity-90 self-end text-end">
      <input className="p-2 bg-[#54d8cb] hover:bg-[#509d96] ease-in duration-100 text-white bg-opacity-40 font-normal px-4 rounded my-2 mx-1"  type="submit" />
      </div>
    </form>
  );
}

