import React from "react";

const Education = () => {
  return (
    <div className="h-[700px]  shadow-xl m-4">
      <h1 className="text-4xl text-center pt-4 font-bold text-pule-600  ">
        👤 My <span className="text-purple-600">Education</span>
      </h1>

      <p className="text-black font-bold text-[19px] text-center w-1/2 ml-64 pt-4 ">
        "Education is the passport to the future, for tomorrow belongs to those
        who prepare for it today.” —Malcolm X.{" "}
      </p>
      <div className="shadow-xl h-48 w-[1100px] ml-44 uppercase ">
        <div className="flex h-full">
          <img src="" alt="" className="h-full" />
          <h1 className="text-3xl w-full pl-4 p-4 text-purple-800 font-bold ">
            bachelor of engineering in Data science From Mumbai universty{" "}
            <span className="text-red-400 mt-4">2020- 2024 |Pursuing</span>
          </h1>
        </div>
        <div className=" h-full mb-5 shadow-2xl bg-cyan-700">
          <h1 className="text-3xl w-full pl-4 pt-8 text-white font-bold ">
            Hsc From Science Bk Patil Juniour College
          </h1>
          <h1 className="text-white text-3xl ml-5"> 2018-2020 | completed</h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default Education;
