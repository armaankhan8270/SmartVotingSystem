import React from "react";
const Contact = () => {
  return (
    <div className="ml-44">
      {" "}
      <div className="w-[80%] shadow rounded-lg  h-[700px] m-4 shadow-slate-900">
        <h1 className="text-4xl text-center pt-4 font-bold text-pule-600  ">
          👤 <span className="text-purple-600">Contact us</span>
        </h1>
        <div className="grid grid-cols-2">
          <div className="m-4 ">
            <img
              alt=""
              className=" "
              src="https://img.freepik.com/premium-photo/beautiful-cartoon-character-sitting-comfortable-red-chair-with-laptop-bearded-businessman-suit-3d-illustration_578102-3355.jpg?w=740"
            />
          </div>
          <div>
            <div className="mt-12 mr-12 capitalize text">
              <input
                placeholder="name"
                type="text"
                className="outline-none m-2 p-2 focus:outline-none shadow-md w-full  h-12 "
                name=""
                id=""
              />
              <input
                placeholder="name"
                type="text"
                className="outline-none m-2 p-2 focus:outline-none shadow-md w-full  h-12 "
                name=""
                id=""
              />
              <input
                placeholder="name"
                type="text"
                className="outline-none m-2 p-2 focus:outline-none shadow-md w-full  h-12 "
                name=""
                id=""
              />
              <textarea
                className="border- mr-12 w-[100%] p-2 border-slate-700 rounded outline-none shadow-md"
                name=""
                id=""
                cols="50"
                rows="7"
                placeholder="enter message"
              ></textarea>
              <button className="text-2xl ml-64 mb-2 text-white bg-cyan-600 p-2   rounded-2xl">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default Contact;
