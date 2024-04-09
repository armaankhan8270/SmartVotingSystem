import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";

const VoteOtp1 = ({ phoneNumber }) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [error, setError] = useState(null);
  const history = useNavigate();
  useEffect(() => {
    if (phoneNumber) {
      handleSendOTP();
    }
  }, [phoneNumber]); // Trigger OTP sending when phoneNumber changes

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
      alert("otp has been sended SuccessFully");
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
      alert("User authenticated successfully");
      history("/party");
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-4">OTP Verification</h1>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">
          Enter Phone Number:
        </label>
        <input
          type="text"
          value={phoneNumber}
          readOnly
          className="block focus:ring-0  shadow-md p-2 focus:border-none border-none  w-full  rounded-md "
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Enter OTP:</label>
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        onClick={handleVerifyOTP}
        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
      >
        Verify OTP
      </button>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default VoteOtp1;
