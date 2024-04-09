import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // Import Firestore

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Sign in the admin user using Firebase Authentication
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // If sign-in is successful, navigate to "/select" page
      alert("Login Successfully");
      navigate("/select");
    } catch (error) {
      console.error("Error signing in:", error);
      alert(error.message);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      // Create user with email and password using Firebase Authentication
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      // If user creation is successful, add user data to Firestore
      await firebase
        .firestore()
        .collection("users")
        .doc(userCredential.user.uid)
        .set({
          email: email,
          // You can add more user data here if needed
        });

      // If sign-up is successful, navigate to "/select" page
      alert("Signup Successfully");
      navigate("/select");
    } catch (error) {
      console.error("Error signing up:", error);
      alert(error.message);
    }
  };

  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Admin Login
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Enter Admin Details
            </p>
          </div>

          <div className="relative max-w-md mx-auto mt-8 md:mt-16">
            <div className="overflow-hidden bg-white rounded-md shadow-md">
              <div className="px-4 py-6 sm:px-8 sm:py-7">
                <form onSubmit={handleSubmit} action="#" method="POST">
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
                        placeholder="Enter email"
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
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="block w-full py-4 pl-3 pr-10 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Log in
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={handleSignup}
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-green-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Signup
                      </button>
                    </div>

                    <div className="text-center">
                      <p className="text-base text-gray-600">
                        Don’t have an account?{" "}
                        <a
                          href="#"
                          title=""
                          className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                        >
                          Create a free account
                        </a>
                      </p>
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

export default Admin;
