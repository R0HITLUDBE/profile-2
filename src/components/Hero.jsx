import React from "react";
import HeroImage from "../assests/undraw_programmer_re_owql.svg";
import { HiDownload } from "react-icons/hi";
import pdf from "../assests/RohitLudbe_Resume1.pdf";

const Hero = () => {
  return (
    <div className="px-4">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className=" grid md:grid-cols-2">
          <img
            className="w-[250px] md:w-[350px] mx-auto my-4"
            src={HeroImage}
            alt=""
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
              Hello!
            </h1>
            <p className="md:text-4xl text-2xl font-bold ">
              I'm Rohit, a Web and Android developer.
            </p>
            <a href={pdf} download>
              <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 flex justify-center align-center ">
                <HiDownload size={25} color="white" />
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
