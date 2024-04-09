import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [selectedImage, setSelectedImage] = useState(""); // State to store selected image file
  const [otp, setOtp] = useState("");
  const history = useNavigate();
  const handleSignUp = async () => {
    try {
      // Sign up the user using Firebase Authentication
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Upload profile image to Firebase Storage
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child("profile_images/" + user.uid); // Use user UID as image filename
      await imageRef.put(selectedImage);
      const imageUrl = await imageRef.getDownloadURL();

      // Store user data in Firestore
      const db = firebase.firestore();
      await db.collection("users").doc(user.uid).set({
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        aadhaarNumber: aadhaarNumber,
        profileImageUrl: imageUrl,
        isVoted: false,
      });

      console.log("User signed up successfully!");
      alert("User signed up successfully!");
      history("/verify");
    } catch (error) {
      console.error("Error signing up:", error);
      alert(error);
    }
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]); // Store the selected image file in state
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="py-10 bg-gray-50 sm:py-16 lg:py-24">
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
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
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
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-base font-medium text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="aadhaarNumber"
                    className="block text-base font-medium text-gray-900"
                  >
                    Aadhaar Number
                  </label>
                  <input
                    type="text"
                    id="aadhaarNumber"
                    value={aadhaarNumber}
                    onChange={(e) => setAadhaarNumber(e.target.value)}
                    placeholder="Enter your Aadhaar number"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="profileImage"
                    className="block text-base font-medium text-gray-900"
                  >
                    Profile Image
                  </label>
                  <input
                    type="file"
                    id="profileImage"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
