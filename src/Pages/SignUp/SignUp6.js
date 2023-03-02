import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp6 = () => {
  const navigate = useNavigate();
  function nave(n){
    setTimeout(() => {
      navigate(n);
  }, 500);
  }
  function back() {
    navigate(-1);
  }
  return (
    <div className="md:w-6/12 w-11/12 md:my-28 my-24 pt-5 rounded-xl bg-white mx-auto">
      <div>
      <div className="px-10">
      <h2 className="text-2xl md:text-5xl font-bold">
        What is your date of birth?
      </h2>
      <p className="text-lg lg:pr-40 md:pr-10 my-5">For example, 27 3 2007.</p>
      <div>
        <input
          style={{ width: "250px" }}
          className="text-xl font-bold text-gray-600"
          type="date"
          // onChange={()=>nave("/signup/6")}
        />
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
            to="/signup/6"
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

export default SignUp6;
