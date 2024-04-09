import React, { useState } from "react";
import axios from "axios";

const Register2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [selectedImage, setSelectedImage] = useState(""); // State to store selected image file
  const [otp, setOtp] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAadhaarNumberChange = (event) => {
    setAadhaarNumber(event.target.value);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]); // Store the selected image file in state
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(); // Create FormData object
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phoneNumber", phoneNumber);
      formData.append("aadhaarNumber", aadhaarNumber);
      // formData.append("profileImage", selectedImage); // Append the selected image file to FormData

      const response = await axios.post(
        "http://localhost:3001/Voteuser/create",
        {
          email,
          password,
          phoneNumber,
          aadhaarNumber,
          peofileImage: selectedImage,
        }
      );

      console.log("User registered successfully:", response.data);
      // Handle success (redirect, show success message, etc.)
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error (show error message, etc.)
    }
  };
  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              New User Registration
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Enter Your Details to Register
            </p>
          </div>

          <div className="relative max-w-md mx-auto mt-8 md:mt-16">
            <div className="overflow-hidden bg-white rounded-md shadow-md">
              <div className="px-4 py-6 sm:px-8 sm:py-7">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-base font-medium text-gray-900"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        className="block w-full py-4 pl-3 pr-10 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-base font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                        className="block w-full py-4 pl-3 pr-10 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Phone Number{" "}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-phone"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                          </svg>
                        </div>

                        <input
                          type="number"
                          name=""
                          id=""
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          placeholder="Enter Your Phone Number"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                      <button
                        type="button"
                        // onClick={handleSendOTP}
                        className="inline-block mt-2 text-sm text-blue-600 underline focus:outline-none"
                      >
                        Send OTP
                      </button>
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        AADHAAR Number{" "}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>

                        <input
                          type="number"
                          name=""
                          id=""
                          value={aadhaarNumber}
                          onChange={handleAadhaarNumberChange}
                          placeholder="Enter Your AAdhaar Number"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div
                      id="image-preview"
                      className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
                    >
                      <input
                        id="upload"
                        type="file"
                        onChange={handleImageChange}
                        className="hidden"
                        accept="image/*"
                      />
                      <label htmlFor="upload" className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-8 h-8 text-gray-700 mx-auto mb-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                          />
                        </svg>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                          Upload New Image{" "}
                        </h5>
                        <p className="font-normal text-sm text-gray-400 md:px-6">
                          Choose photo size should be less than{" "}
                          <b className="text-gray-600">2mb</b>
                        </p>
                        <p className="font-normal text-sm text-gray-400 md:px-6">
                          and should be in{" "}
                          <b className="text-gray-600">JPG, PNG, or GIF</b>{" "}
                          format.
                        </p>
                        <span
                          id="filename"
                          className="text-gray-500 bg-gray-200 z-50"
                        ></span>
                      </label>
                    </div>
                    <div>
                      <div className="flex flex-row items-center space-x-4">
                        <div className="w-3/4">
                          <label
                            htmlFor="otp"
                            className="block text-base font-medium text-gray-900"
                          >
                            OTP
                          </label>
                          <input
                            type="text"
                            id="otp"
                            value={otp}
                            // onChange={handleOtpChange}
                            placeholder="Enter OTP"
                            className="block w-full py-4 pl-3 pr-10 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                        <div className="w-1/3">
                          <button
                            type="button"
                            // onClick={handleSendOTP}
                            className="w-full px-2 py-3 mt-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                          >
                            Send OTP
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register2;
