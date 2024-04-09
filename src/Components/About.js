import React from "react";
import ov from "./Images/armaan1.jpeg";
const About = () => {
  return (
    <div className=" shadow-lg bg-slate-100 h-[800px]">
      <h1 className="text-4xl text-center pt-4 font-bold text-pule-600">
        👤 About <span className="text-purple-600">Me</span>
      </h1>
      <div className="flex  ">
        <div className="w-1/2 rounde shadw-l p-24  b h-[700px] ">
          <img className="h-full rounded-full w-full" src={ov} alt="" />
        </div>
        <div className="w-1/2 shadow-md  h-[700px] ">
          <h1 className="text-3xl text-slate-800 ml-4 mt-32 font-bold">
            Im Armaan Khan
          </h1>
          <h1 className="ml-4 mt-1 text-xl ">Full Stack Devoloper</h1>
          <p className="text-sm pl-4 mt-3 w-[80%]">
            I am a Full-Stack developer based in Pune, India. I am an
            Information Technology undergraduate from SPPU. I am very passionate
            about improving my coding skills & developing applications &
            websites. I build WebApps and Websites using MERN Stack. Working for
            myself to improve my skills. Love to build Full-Stack clones.
          </p>
          <h1 className="text-[20px] font-bold ml-4 mt-4 text-blue-500">
            <span className="text-slate-900">Age :</span> 19{" "}
            <span className="ml-[40%] text-slate-800 ">
              Email :{" "}
              <span className="text-blue-700">KarmanKkhan@gmail.com</span>
            </span>
          </h1>
          <h1 className="text-[20px] font-bold ml-4 mt-4 text-blue-500">
            <span className="text-slate-900">Phone :</span> 8433639534{" "}
            <span className="ml-[20%] text-slate-800 ">
              Place :{" "}
              <span className="text-blue-700">Mumbai Andehri 40053</span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
