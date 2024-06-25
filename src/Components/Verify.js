import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const VoteOtp1 = ({ phoneNumber }) => {
  const [verificationCode, setVerificationCode] = useState(Array(6).fill(""));
  const [verificationId, setVerificationId] = useState("");
  const [error, setError] = useState(null);
  const [sendingOTP, setSendingOTP] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const history = useNavigate();
  const otpInputs = useRef([]);

  useEffect(() => {
    if (phoneNumber) {
      handleSendOTP();
    }
  }, [phoneNumber]);

  useEffect(() => {
    if (verificationCode.every((digit) => digit !== "")) {
      handleVerifyOTP();
    }
  }, [verificationCode]);

  const handleSendOTP = async () => {
    try {
      setSendingOTP(true);
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
      setTimeout(() => {
        setSendingOTP(false);
        toast.success("OTP Has Sent Successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          // onClose: () => hi("/select"),
        });
        // alert("OTP has been sent successfully");
        // Autofocus on the first OTP field after OTP is sent
        if (otpInputs.current[0]) {
          otpInputs.current[0].focus();
        }
      }, 2000);
    } catch (error) {
      setError(error.message);
      alert(error.message);
      setSendingOTP(false);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const code = verificationCode.join("");
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      await firebase.auth().signInWithCredential(credential);
      console.log("User authenticated successfully");
      setVerificationSuccess(true);
      setTimeout(() => {
        history("/party");
      }, 2000);
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };

  const handleInputChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      // Autofocus on the next OTP field
      if (value !== "" && otpInputs.current[index + 1]) {
        otpInputs.current[index + 1].focus();
      }
    }
  };

  return (
    <CSSTransition in={true} timeout={300} classNames="alert" unmountOnExit>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">OTP Verification</h1>
        <div className="mb-4 flex justify-center items-center">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              ref={(el) => (otpInputs.current[index] = el)}
              type="text"
              autoFocus={index === 0}
              value={verificationCode[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              maxLength={1}
              className="w-10 h-10 border-2 border-gray-300 rounded-md text-center mx-1 focus:outline-none focus:border-indigo-500"
            />
          ))}
          <ToastContainer />
        </div>
        <button
          onClick={handleVerifyOTP}
          className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300 ease-in-out"
        >
          Verify OTP
        </button>
        {sendingOTP && <p className="text-indigo-600 mt-4">Sending OTP...</p>}
        {verificationSuccess && (
          <p className="text-green-600 mt-4">Verification successful...</p>
        )}
        {error && <p className="text-red-600 mt-4">{error}</p>}
        <div id="recaptcha-container"></div>
      </div>
    </CSSTransition>
  );
};

export default VoteOtp1;
