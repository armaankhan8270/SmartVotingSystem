import React from "react";
import css from "./Images/css.png";
import js from "./Images/js.jpeg";
import express from "./Images/express.png";
import mongodb from "./Images/mong.png";
import boots from "./Images/boots.png";
import gitvc from "./Images/git vc.png";
import github from "./Images/giyhub.png";
import netlify from "./Images/netli.png";
import node from "./Images/node.png";
import py from "./Images/pyth.png";
import react from "./Images/react.png";
import tail from "./Images/tail.png";
import sql from "./Images/sql.jpeg";
// import py from './Images/pyth.png'
// import py from './Images/pyth.png'

const Skill = () => {
  const Icons = [react, js, mongodb];

  return (
    <div className="bg-slate-100 shadow-xl h-[1000px] mt-2">
      <h1 className="text-5xl pt-8 text-center -4 font-bold text-cyan-500">
        {" "}
        Skills And Abilities
      </h1>
      <div className="m-12 rounded-lg p-3 bg-trasparent bg-slate-600 shadow-xl h-[600px] grid grid-cols-6  gap-y- uppercase text-black bg-whie">
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={css}
          />
          <h1 className="text-center -pb-1">css</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={js}
          />
          <h1 className="text-center -pb-1">JavaScript</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={Icons[2]}
          />
          <h1 className="text-center -pb-1">Html</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={react}
          />
          <h1 className="text-center -pb-1">React</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={mongodb}
          />
          <h1 className="text-center -pb-1">Mongodb</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={express}
          />
          <h1 className="text-center -pb-1">Express</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={boots}
          />
          <h1 className="text-center -pb-1">Bootstrap</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={tail}
          />
          <h1 className="text-center -pb-1">Tailwind</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={github}
          />
          <h1 className="text-center -pb-1">github</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full p-4 rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={gitvc}
          />
          <h1 className="text-center -pb-1">gitvs</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] p-4 w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={py}
          />
          <h1 className="text-center -pb-1">pythin</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={Icons[2]}
          />
          <h1 className="text-center -pb-1">Bootstrap</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={Icons[2]}
          />
          <h1 className="text-center -pb-1">Firebase</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={Icons[2]}
          />
          <h1 className="text-center -pb-1">Context Api</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={Icons[2]}
          />
          <h1 className="text-center -pb-1">Sql</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={Icons[2]}
          />
          <h1 className="text-center -pb-1">Matrial ui</h1>
        </div>
        <div className="b shadow-lg bg-slate-900 text-white rounded-md h-28 w-28   text-xl ">
          <img
            alt=""
            className="h-[80%] w-full rounded bg-transparent bg-contain shadow-inner  shadow-slate-900"
            src={Icons[2]}
          />
          <h1 className="text-center -pb-1">c</h1>
        </div>
      </div>
    </div>
  );
};

export default Skill;

/*
<div className="b shadow-lg uppercase rounded-md h-28 w-28   text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">css</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">Bootsrap</h1>
</div>

<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">Tailwindcss</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">Chakra ul</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">Material ul</h1>
<h1 className="text-center -pb-1">Java Script</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">React</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">Api</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">useContext</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">Firebase</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">Git vsl</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">Github</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">Node</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">Express</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">Netlify</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">Mongo db</h1>
</div>
<div className="b shadow-lg rounded-md h-28 w-28 text-xl ">
<img alt="" className="h-[80%] w-full" src={Icons[1]} />
<h1 className="text-center -pb-1">My sql</h1>
</div>
*/
