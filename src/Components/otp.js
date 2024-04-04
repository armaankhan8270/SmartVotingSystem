// import React, { useState } from "react";
// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithPhoneNumber } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD_ov82MZz2vveVzMdnq-eeB3RQUrb6ZjU",
//   authDomain: "thenotesapp-97c49.firebaseapp.com",
//   databaseURL: "https://thenotesapp-97c49-default-rtdb.firebaseio.com",
//   projectId: "thenotesapp-97c49",
//   storageBucket: "thenotesapp-97c49.appspot.com",
//   messagingSenderId: "232514177265",
//   appId: "1:232514177265:web:361030aa7b2c7143cdc150",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const PhoneAuth = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [verificationCode, setVerificationCode] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState(null);

//   const handleSendOTP = async () => {
//     try {
//       const confirmation = await signInWithPhoneNumber(auth, phoneNumber);
//       setConfirmationResult(confirmation);
//       alert("OTP sent successfully. Check your phone for OTP.");
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       alert("Error sending OTP. Please try again.");
//     }
//   };

//   const handleVerifyOTP = async () => {
//     try {
//       await confirmationResult.confirm(verificationCode);
//       console.log("OTP verified successfully.");
//       // Handle successful verification (e.g., navigate to next page)
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       alert("Error verifying OTP. Please try again.");
//     }
//   };

//   return (
//     <div className="m-32 bg-slate-400">
//       <h2>Phone Number Authentication</h2>
//       <div className="m-4">
//         <label>Phone Number:</label>
//         <input
//           type="text"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//         <button onClick={handleSendOTP}>Send OTP</button>
//       </div>
//       <div>
//         <label>Verification Code:</label>
//         <input
//           type="text"
//           value={verificationCode}
//           onChange={(e) => setVerificationCode(e.target.value)}
//         />
//         <button onClick={handleVerifyOTP}>Verify OTP</button>
//       </div>
//     </div>
//   );
// };

// export default PhoneAuth;
