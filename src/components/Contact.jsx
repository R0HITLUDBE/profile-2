import React from "react";
import pdf from "../assests/RohitLudbe_Resume1.pdf";

const Contact = () => {
  return (
    <div className="w-full bg-white pb-16 px-10" id="contact">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold py-2 px-3">Contact</h1>
        <div className="mt-5">
          <a className="p-5 font-bold" href="https://github.com/R0HITLUDBE">
            Github
          </a>
          <a
            className="p-5 font-bold"
            href="https://www.linkedin.com/in/rohit-ludbe-1075561a2/"
          >
            LinkedIn
          </a>
          <a className="p-5 font-bold" href="mailto:rohit.ludbe01@gmail.com">
            Email
          </a>
          <a className="p-5 font-bold" href={pdf} download>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
