import React from "react";
import { Link } from "react-router-dom";
import img from "../../Media/search-mockup-dark.png";

const Hero = () => {
  return (
    <section class="bg-gray-900 font-segoe">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-6">
          <Link to='/signup'>
          <button className="flex my-5 px-2 py-1 rounded-full bg-gray-800 text-white">
            <button className="py-1 px-3 text-xs font-medium text-center bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              New
            </button>
            <p className="md:font-bold md:ml-4">
              Sign Up Now for New!!!
            </p>
            <p className="md:font-bold md:ml-4">&gt;</p>
          </button>
          </Link>
          <h1 class="text-center md:text-left max-w-2xl my-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            We invest in the world’s potential
          </h1>
          <p class="text-center md:text-left max-w-2xl my-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 md:pr-14">
            Here at GovUK we focus on markets where innovation can unlock
            long-term value and drive economic growth.
          </p>
         
          <form className="md:w-8/12">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div class="lg:mt-0 lg:col-span-6 lg:flex">
          <img src={img} alt="mockup" />
        </div>
      </div>

      <div className="md:flex max-w-screen-xl px-4 pb-14 mx-auto">
        <div className="flex mb-3 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={5}
            stroke="currentColor"
            className="w-6 h-6 text-primary-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
          <div className="text-white px-5 -mt-2">
            <h4 className="font-bold text-2xl">Customizable Categories</h4>
            <p className="text-gray-400 pr-5 text-lg">
              Host code that you don't want to share with the world in private.
            </p>
          </div>
        </div>

        <div className="flex mb-3 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="5"
            stroke="currentColor"
            class="w-6 h-6 text-primary-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <div className="text-white px-5 -mt-2">
            <h4 className="font-bold text-2xl">Private repos</h4>
            <p className="text-gray-400 pr-5 text-lg">
              Host code that you don't want to share with the world in private.
            </p>
          </div>
        </div>

        <div className="flex mb-3 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6 text-primary-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
            />
          </svg>

          <div className="text-white px-5 -mt-2">
            <h4 className="font-bold text-2xl">Tracking Saving Rate</h4>
            <p className="text-gray-400 pr-5 text-lg">
              Host code that you don't want to share with the world in private.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
