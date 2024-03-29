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
import SkillIndividual from "./SkillIndividual";

const SkillAll = () => {
  return (
    <div className="w-full py-16 px-4" id="skills">
      <div className="text-center mb-10">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">
          Skills
        </h1>
      </div>
      <div className="grid sm:grid-flow-row grid-flow-col sm:mx-20 sm:overflow-hidden overflow-x-scroll ">
        <div className=" grid grid-flow-col gap-5 mr-5 sm:mr-0">
          <SkillIndividual image={Html} title="HTML" />
          <SkillIndividual image={Css} title="CSS" />
          <SkillIndividual image={Js} title="JS" />
          <SkillIndividual image={REACT} title="REACT JS" />
          <SkillIndividual image={Next} title="NEXT JS" />
        </div>
        <div className=" grid grid-flow-col gap-5 sm:mt-5">
          <SkillIndividual image={REACT} title="REACT NATIVE" />
          <SkillIndividual image={Express} title="EXPRESS" />
          <SkillIndividual image={Node} title="NODE JS" />
          <SkillIndividual image={Mongodb} title="MONGODB" />
          <SkillIndividual image={firebase} title="FIREBASE" />
        </div>
      </div>
    </div>
  );
};

export default SkillAll;
