import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import VoteOtp from "./Verify.js";
import { useUser } from "./Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VoteOtp1 from "./Verify";
const Authenticate = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const handleAadhaarNumberChange = (event) => {
    setAadhaarNumber(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSendOTP = async () => {
    try {
      const appVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
        }
      );
      const confirmation = await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier);
      setVerificationId(confirmation.verificationId);
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await firebase.auth().signInWithCredential(credential);
      console.log("User authenticated successfully");
      setShowAlert(true);
      toast.success("Verified SuccessFully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // onClose: () => navigate("/party"),
      });
      alert("verified successfully");
      // Navigate to party page after OTP verification
      // navigate("/party");
    } catch (error) {
      toast.error(`"Error searching for user:", ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError(error.message);
      alert("wrong otp");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Find user in the database using Aadhaar number
      const userSnapshot = await firebase
        .firestore()
        .collection("users")
        .where("aadhaarNumber", "==", aadhaarNumber)
        .get();
      // toast.success(
      //   `AsslamuAlikum ${user.email} your aadhar number is verifed SuccessFully`,
      //   {
      //     position: "top-right",
      //     autoClose: 3000,
      //     hideProgressBar: true,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     // onClose: () => navigate("/party")
      //   }
      // );
      // alert("Aadahr Number is valid");
      const userData1 = userSnapshot.docs[0].data();
      toast.success(
        `AsslamuAlikum ${userData1.email} your aadhar number is verifed SuccessFully`,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          // onClose: () => navigate("/party")
        }
      );
      updateUser(userData1);
      setTimeout(() => {
        toast.success(`And You Registerd Number is ${userData1.phoneNumber} `, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          // onClose: () => navigate("/party"),
        });
      }, 1000);
      // alert(userData1.phoneNumber);

      if (!userSnapshot.empty) {
        // If user found, get user's phone number
        const phoneNumber = "+91" + userData1.phoneNumber;
        setPhoneNumber(phoneNumber);
        setTimeout(() => {
          toast.success(
            `Now Yoy get Otp On Your Registerd Phone NUmber ${phoneNumber} `,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              onClose: () => setShowAlert(true),
            }
          );
        }, 2000);
        // alert(phoneNumber);

        // Send OTP to user's phone number
        // await handleSendOTP();
      } else {
        console.log("User not found with Aadhaar number:", aadhaarNumber);
      }
    } catch (error) {
      toast.error(`"Error searching for user:", ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("Error searching for user:", error);
      alert(error.message);
    }
  };

  return (
    <div>
      {showAlert ? (
        //   <div
        //     role="alert"
        //     className="alert justify-center text-center mx-25 alert-success bg-green-800"
        //   >
        //     <svg
        //       xmlns="http://www.w3.org/2000/svg"
        //       className="stroke-current shrink-0 h-6 w-6"
        //       fill="none"
        //       viewBox="0 0 24 24"
        //     >
        //       <path
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //         strokeWidth="2"
        //         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        //       />
        //     </svg>
        //     <span className="text-white text-3xl">
        //       Your Verification Is Successful
        //     </span>
        //   </div>
        <VoteOtp1 phoneNumber={phoneNumber} />
      ) : (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <ToastContainer />
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm  font-bold leading-tight text-black sm:text-4xl lg:text-2xl first-letter:text-blue-900 first-letter:text-5xl">
                Enter The Voter AadhaarCard Number To Verify
              </p>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                After Verification We Send Otp To Number That Linked With Aadahr
              </p>
            </div>

            <div className="relative max-w-md mx-auto mt-8 md:mt-16">
              <div className="overflow-hidden bg-white rounded-md shadow-md">
                <div className="px-4 py-6 sm:px-8 sm:py-7">
                  <form action="#" onSubmit={handleSubmit} method="POST">
                    <div className="space-y-5">
                      <div>
                        <label
                          htmlFor="aadhaarNumber"
                          className="text-base font-medium text-gray-900"
                        >
                          Aadhaar Number
                        </label>
                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              className="w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                              />
                            </svg>
                          </div>

                          <input
                            type="text"
                            id="aadhaarNumber"
                            value={aadhaarNumber}
                            onChange={handleAadhaarNumberChange}
                            placeholder="Enter Aadhaar number"
                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>
                      {/* 
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
                            onChange={handleOtpChange}
                            placeholder="Enter OTP"
                            className="block w-full py-4 pl-3 pr-10 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                        <div className="w-1/3">
                          <button
                            type="button"
                            onClick={handleVerifyOTP}
                            className="w-full px-2 py-3 mt-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                          >
                            Verify OTP
                          </button>
                        </div>
                      </div> */}

                      <div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                        >
                          Verify User
                        </button>
                      </div>

                      <div className="text-center"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Authenticate;
