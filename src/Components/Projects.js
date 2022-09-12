import React from "react";
import p1 from "./Images/lo.png";
import p3 from "./Images/das.png";
import p2 from "./Images/notes.png";
import p4 from "./Images/weat.png";
import p5 from "./Images/net.png";
import p6 from "./Images/Screenshot 2022-09-12 151645.png";
const Projects = () => {
  return (
    <div className="bg-slate-900 m-4 text-white">
      {" "}
      <div className="w-full shadow h-[800px] m-4  shadow-slate-900">
        <h1 className="text-4xl font-semibold text-center pt-4 first-letter:text-cyan-400  ">
          💻 Project Made
        </h1>
        <div className="flex flex-wrap">
          <div className="w-[30%] m-3 float-right shadow-2xl h-[300px] rounded-lg bg-white">
            <img alt="" className="w-full h-full p rounded-lg" src={p1} />
          </div>
          <div className="w-[30%] shadow-slate-400 m-3 shadow-2xl h-[300px] rounded-lg bg-white">
            <img alt="" className="w-full h-full p rounded-lg" src={p2} />
          </div>
          <div className="w-[30%] shadow-slate-400  m-3 shadow-2xl h-[300px] rounded-lg bg-white">
            <img alt="" className="w-full h-full p-3 rounded-lg" src={p6} />
          </div>
          <div className="w-[30%] shadow-slate-400  m-3 shadow-2xl h-[300px] rounded-lg bg-white">
            <img alt="" className="w-full h-full p rounded-lg" src={p5} />
          </div>
          <div className="w-[30%] shadow-slate-400  m-3 shadow-2xl h-[300px] rounded-lg bg-white">
            <img alt="" className="w-full h-full p-3 rounded-lg" src={p4} />
          </div>
          <div className="w-[30%] shadow-slate-400 hover:scale-[1.09]  m-3 shadow-2xl h-[300px] rounded-lg bg-white">
            <img alt="" className="w-full h-full p-4 rounded-lg" src={p3} />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default Projects;
