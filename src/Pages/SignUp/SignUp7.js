import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp7 = () => {
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
    <div className="md:w-6/12 w-11/12 md:my-20 my-20 pt-5 rounded-xl bg-white mx-auto">
      <div>
      <div className="px-10">
      <h2 className="text-2xl md:text-5xl font-bold">
        What is your sex?
      </h2>
      <p className="text-lg lg:pr-40 md:pr-10 my-5">
        Your sex is as shown on your:
      </p>
      <ul className="list-disc text-lg my-5 ml-5">
        <li>birth certificate</li>
        <li>gender recognition certificate</li>
      </ul>
      <ul class="grid w-full gap-6 md:grid-cols-2">
    <li>
        <input onClick={() => nave("/signup/7")} type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" />
        <label for="hosting-small" class="inline-flex items-center justify-between w-full px-5 py-2 text-primary-700 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-900 peer-checked:border-2 hover:text-white hover:bg-primary-700 ">
                <h2 class="w-full text-3xl font-bold text-center">Femail</h2>
        </label>
    </li>
    <li>
        <input onClick={() => nave("/signup/7")} type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" />
        <label for="hosting-big" class="inline-flex items-center justify-between w-full px-5 py-2 text-primary-700 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-900 peer-checked:border-2 hover:text-white hover:bg-primary-700 ">
                <h2 class="w-full text-3xl font-bold text-center">Mail</h2>
        </label>
    </li>
</ul>
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
            to="/signup/7"
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

export default SignUp7;
