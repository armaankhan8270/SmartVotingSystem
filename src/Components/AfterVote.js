import React from "react";
import { Link } from "react-router-dom";

function ThankYouForVoting() {
  return (
    <section className="bg-black text-white rounded-lg lg:m-32 shadow-md  dark:bg-gray-900">
      <div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">
          Thank You for Voting!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Your vote is important to us. It helps us improve and serve you
          better. We appreciate your participation.
        </p>
        <div className="flex flex-col items-center justify-center mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button className="py-3 px-6 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
            Vote Again
          </button>
          <a
            href="#"
            className="py-3 px-6 text-lg font-semibold text-blue-500 rounded-lg hover:text-blue-600 transition duration-300 border border-blue-500 hover:border-blue-600"
          >
            View Results
          </a>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Didn't get a chance to vote?{" "}
          <Link to="/create" className="text-blue-500 hover:underline">
            Vote Now!
          </Link>
        </p>
      </div>
    </section>
  );
}

export default ThankYouForVoting;
