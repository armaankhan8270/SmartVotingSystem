import React from "react";

const CallToActionPage = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8">
      {/* Voter Registration Section */}
      <div className="mx-auto flex lg:my-12 flex-col sm:flex-row items-center justify-between rounded-lg shadow-lg overflow-hidden">
        <div className="sm:w-1/2 mb-12 sm:mb-0 px-6 order-1">
          <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Register to Vote
            </h2>
            <p className="text-gray-600 mb-6">
              Make your voice heard! Register to vote and participate in shaping
              your community and country.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
              Register Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="sm:w-1/2 order-2">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?t=st=1709793768~exp=1709797368~hmac=e41c31ab5f8f68178e0751a31e58dbccd423a2d0f41c4e2be8466ec02145ae02&w=740"
            alt="Voting Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Voting Section */}
      <div className="mx-auto flex lg:my-12 flex-col sm:flex-row items-center justify-between rounded-lg shadow-lg overflow-hidden mt-8">
        <div className="sm:w-1/2 px-6 order-3">
          <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Vote Now
            </h2>
            <p className="text-gray-600 mb-6">
              It's time to cast your ballot and make a difference. Vote for the
              future you want to see.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
              Vote Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="sm:w-1/2 order-4">
          <img
            src="https://img.freepik.com/premium-vector/register-vote-with-megaphone-icon_686319-960.jpg?w=740"
            alt="Voting Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToActionPage;
