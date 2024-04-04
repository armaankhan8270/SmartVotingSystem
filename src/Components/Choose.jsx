import React from "react";
import { useNavigate } from "react-router-dom";

const Choose = () => {
  const navigate = useNavigate();

  const handleSubmit = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 500);
  };

  return (
    <div>
      <section className="py-10 w-full bg-white sm:py-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="w-full mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Make Your Choice
            </h2>
            <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Choose your preferred option to participate in the voting process.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mt-8 sm:mt-16 flex justify-between">
            <div
              onClick={() => handleSubmit("/create")}
              className="overflow-hidden h-44 w-72 transition-all hover:border-blue-600 duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer flex items-center"
            >
              <img
                src={
                  "https://img.freepik.com/premium-vector/unique-design-illustration-online-team_362714-4056.jpg?size=626&ext=jpg&ga=GA1.1.570651861.1704119948&semt=ais"
                }
                alt="New User"
                className="w-32 h-44 mr-4"
              />
              <div>
                <p className="text-xl font-semibold text-black">New User</p>
                <p className="text-sm text-gray-600">Not Registered Yet</p>
              </div>
            </div>

            <div
              onClick={() => handleSubmit("/login")}
              className="overflow-hidden transition-all h-44 w-72 duration-200 bg-white border-2 hover:border-blue-600 rounded-md hover:bg-gray-50 cursor-pointer flex items-center"
            >
              <img
                src={
                  "https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-2850.jpg?size=626&ext=jpg&ga=GA1.1.570651861.1704119948&semt=ais"
                }
                alt="Registered User"
                className="w-32 h-44 mr-4"
              />
              <div>
                <p className="text-xl font-semibold text-black">
                  Registered User
                </p>
                <p className="text-sm text-gray-600">
                  Already Registered with Government
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleSubmit("/login")}
            title=""
            className="inline-flex items-center justify-center w-full px-12 py-4 mt-6 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
            role="button"
          >
            Proceed
          </button>
        </div>
      </section>
    </div>
  );
};

export default Choose;
