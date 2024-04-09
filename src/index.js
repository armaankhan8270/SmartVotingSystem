import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Admin from "./Components/Admin";
import Choose from "./Components/Choose";
import Register2 from "./Components/Regsier2";
import Navbar from "./Components/Navbar";
import PhoneAuth from "./Components/otp";
import Party from "./Components/part";
import SignUpForm from "./Components/FirebaseAddUser";
import Authenticate from "./Components/Authanticate";
import ThankYouForVoting from "./Components/AfterVote";
import { UserProvider } from "./Components/Context";
import VoteCountPage from "./Components/Votecount";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Help from "./Components/Help";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/siginup" element={<Signup />} />
        <Route path="/Home" element={<HeroSection />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/select" element={<Choose />} />
        <Route path="/sign" element={<SignUpForm />} />
        <Route path="/add" element={<PhoneAuth />} />
        <Route path="/party" element={<Party />} />
        {/* <Route path="/image" element={<UserVerificationPage />} /> */}
        <Route path="/create" element={<Register2 />} />
        <Route path="/verify" element={<Authenticate />} />
        <Route path="/thanks" element={<ThankYouForVoting />} />
        <Route path="/count" element={<VoteCountPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        {/* <Route
        path="/check"
        element={<VoteOtp phoneNumber={"+918433639534"} />}
      /> */}
      </Routes>
    </UserProvider>
  </BrowserRouter>
);
