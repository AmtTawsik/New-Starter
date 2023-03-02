import React from "react";

const Feature = () => {
  return (
    <div className="bg-gray-900 text-white h-screen py-20">
      <div className="w-11/12 mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white my-5">
          The most trusted cryptocurrency platform
        </h2>
        <p className="text-center text-lg mb-5">
          Here are a few reasons why you should choose Flowbite
        </p>
        <div className="md:flex my-10">
          <div className="text-center px-10">
            <div className="text-primary-800 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                />
              </svg>
            </div>
            <h4 className="text-3xl">Secure storage</h4>
            <p className="text-lg">
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
            <br />
            <p className="text-primary-800">
              Learn how to keep your funds safe{" "}
              <span className="font-bold">&gt;</span>
            </p>
          </div>

          <div className="text-center px-10">
            <div className="text-primary-800 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            </div>
            <h4 className="text-3xl">Secure storage</h4>
            <p className="text-lg">
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
            <br />
            <p className="text-primary-800">
              Learn how to keep your funds safe{" "}
              <span className="font-bold">&gt;</span>
            </p>
          </div>

          <div className="text-center px-10">
            <div className="text-primary-800 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-3xl">Secure storage</h4>
            <p className="text-lg">
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
            <br />
            <p className="text-primary-800">
              Learn how to keep your funds safe{" "}
              <span className="font-bold">&gt;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
