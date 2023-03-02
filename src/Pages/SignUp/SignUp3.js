import { TextInput } from "flowbite-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp3 = () => {
  const navigate = useNavigate();
  function back() {
    navigate(-1);
  }

  function nave(n){
    setTimeout(() => {
      navigate(n);
  }, 500);
  }
  return (
    <div className="md:w-6/12 w-11/12 md:my-20 my-10 pt-5 rounded-xl bg-white mx-auto">
      <div>
      <div className="px-10">
      <h2 className="text-2xl md:text-5xl font-bold">
        What is the leaving date on the P45?
      </h2>
      <p className="text-lg lg:pr-40 md:pr-10 my-5">
        The leaving date is shown in box 4 on your P45. <br />
        <br />
        <span className="text-gray-600">Enter as DD MM YYYY</span>
      </p>
      <div>
        <input
          style={{ width: "250px" }}
          className="text-xl font-bold text-gray-600"
          type="date"
          // onChange={()=>nave("/signup/3")}
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
            to="/signup/3"
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

export default SignUp3;
