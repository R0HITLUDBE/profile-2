import React from "react";
import Html from "../assests/html-5.png";
import Css from "../assests/css-3.png";
import Js from "../assests/js.png";
import REACT from "../assests/atom-symbol.png";
import Express from "../assests/express.png";
import Node from "../assests/nodejs.png";
import Next from "../assests/nextjs.svg";
import Mongodb from "../assests/mongodb.svg";
import firebase from "../assests/google-firebase.svg";

const SkillAll = () => {
  return (
    <div className="w-full py-16 px-4" id="skills">
      <div className="text-center mb-10">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">
          Skills
        </h1>
      </div>
      <div className="grid grid-flow-row mx-20 ">
        <div className=" grid md:grid-flow-col gap-5">
          <div className="p-3 grid grid-flow-col items-center border shadow-md rounded-lg hover:-tracking-tight cursor-pointer">
            <img className="h-14 text-center" src={Html} alt="" />
            <p>HTML</p>
          </div>
          <div className="p-5 grid grid-flow-col items-center border shadow-md rounded-lg hover:-tracking-tight cursor-pointer">
            <img className="h-14 text-center" src={Css} alt="" />
            <p>CSS</p>
          </div>
          <div className="p-5 grid grid-flow-col items-center border shadow-md rounded-lg hover:-tracking-tight cursor-pointer">
            <img className="h-14 text-center" src={Js} alt="" />
            <p>JS</p>
          </div>
          <div className="p-5 grid grid-flow-col items-center border shadow-md rounded-lg hover:-tracking-tight cursor-pointer">
            <img className="h-14 text-center" src={REACT} alt="" />
            <p>REACT JS</p>
          </div>
          <div className="p-5 grid grid-flow-col items-center border shadow-md rounded-lg hover:-tracking-tight cursor-pointer">
            <img className="h-14 text-center" src={Next} alt="" />
            <p>NEXT JS</p>
          </div>
        </div>
        <div className=" grid md:grid-flow-col gap-5 mt-5">
          <div className="p-5 grid grid-flow-col items-center border shadow-md rounded-lg hover:-tracking-tight cursor-pointer">
            <img className="h-14 text-center" src={REACT} alt="" />
            <p>REACT NATIVE</p>
          </div>
          <div className="p-5 grid grid-flow-col items-center border shadow-md rounded-lg hover:-tracking-tight cursor-pointer">
            <img className="h-10 text-center" src={Express} alt="" />
            <p>EXPRESS JS</p>
          </div>
          <div className="p-5 grid grid-flow-col items-center border shadow-md rounded-lg hover:-tracking-tight cursor-pointer">
            <img className="h-14 text-center" src={Node} alt="" />
            <p>NODE JS</p>
          </div>
          <div className="p-5 grid grid-flow-col items-center border shadow-md rounded-lg hover:-tracking-tight hover:duration-200 cursor-pointer">
            <img className="h-14 text-center" src={Mongodb} alt="" />
            <p>MONGODB</p>
          </div>

          <div className="p-3 grid grid-flow-col items-center border shadow-md rounded-lg hover:-tracking-tight cursor-pointer">
            <img className="h-14 text-center" src={firebase} alt="" />
            <p>FIREBASE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAll;
