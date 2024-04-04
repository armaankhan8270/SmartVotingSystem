import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Components/Header3";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Admin from "./Components/Admin";
import Choose from "./Components/Choose";
import Register2 from "./Components/Regsier2";
import Navbar from "./Components/Navbar";
import PhoneAuth from "./Components/otp";
import Party from "./Components/part";
import ImageComparisonPage from "./Components/Compare";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/siginup" element={<Signup />} />
      <Route path="/Home" element={<HeroSection />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/select" element={<Choose />} />
      <Route path="/create" element={<Register2 />} />
      <Route path="/add" element={<PhoneAuth />} />
      <Route path="/party" element={<Party />} />
      <Route path="/image" element={<ImageComparisonPage />} />
    </Routes>
  </BrowserRouter>
);
