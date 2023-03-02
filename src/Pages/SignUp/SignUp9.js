import React from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp9 = () => {
  const handleSignUp = () => {
    toast.success("Sign Up Successfuly");
  };
  const navigate = useNavigate();
  function back() {
    navigate(-1);
  }

  function nave(n){
    setTimeout(() => {
      navigate(n);
  }, 260);
  }
  return (
    <div className="md:w-6/12 w-11/12 md:my-28 my-20 pt-5 rounded-xl bg-white mx-auto">
      <div>
      <div className="px-10">
      
      <h2 className="text-2xl md:text-5xl font-bold">
        What is your home address?
      </h2>
      <p className="text-lg lg:pr-40 md:pr-10 my-5">
        Enter your full address, including the postcode.
      </p>
      <div class="relative">
        <input
          type="text"
          id="floating_outlined"
          class="block px-2.5 pb-2.5 pt-4 lg:w-2/6 md:w-4/6 w-5/6 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="floating_outlined"
          class="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          Your Address
        </label>
      </div>
      </div>
      <div className="mt-10 flex">
          <button
          onClick={back}
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium px-5 py-2.5 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded-bl-lg border-r border-gray-600"
          >
            Previous
          </button>
          <Link
          to='/'
          onClick={handleSignUp}
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium px-5 py-2.5 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded-br-lg border-l border-gray-600 text-center"
          >
            Next
          </Link>
      </div>
    </div>
    </div>
  );
};

export default SignUp9;
