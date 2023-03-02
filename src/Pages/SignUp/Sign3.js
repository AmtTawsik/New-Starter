import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sign2 = () => {
  const [european, setEuropean] = useState();
  const navigate = useNavigate();
  function handleSubmit() {
    if (european === "yes") {
      navigate("/signup/13");
    } else {
      navigate("/signup/3");
    }
  }
  function back() {
    navigate(-1);
  }

  function nave(n) {
    setTimeout(() => {
      navigate(n);
    }, 260);
  }
  return (
    <div className="md:w-6/12 w-11/12 md:my-20 my-10 pt-5 rounded-xl bg-white mx-auto">
      <div>
      <div className="px-10">
      <h2 className="text-2xl md:text-5xl font-bold">
        Are you from a country in the European Union or European Economic Area?
      </h2>
      <p className="my-3">
        You can check if you are from a country in the European Union or
        European Economic Area if you do not know.
      </p>
      <ul class="grid w-full gap-6 md:grid-cols-2">
    <li>
        <input onClick={() => nave("/signup/13")} type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" />
        <label for="hosting-small" class="inline-flex items-center justify-between w-full px-5 py-2 text-primary-700 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-900 peer-checked:border-2 hover:text-white hover:bg-primary-700 ">
                <h2 class="w-full text-3xl font-bold text-center">Yes</h2>
        </label>
    </li>
    <li>
        <input onClick={() => nave("/signup/3")} type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" />
        <label for="hosting-big" class="inline-flex items-center justify-between w-full px-5 py-2 text-primary-700 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-900 peer-checked:border-2 hover:text-white hover:bg-primary-700 ">
                <h2 class="w-full text-3xl font-bold text-center">No</h2>
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
        <button
          onClick={handleSubmit}
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium px-5 py-2.5 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded-br-lg border-l border-gray-600"
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default Sign2;
