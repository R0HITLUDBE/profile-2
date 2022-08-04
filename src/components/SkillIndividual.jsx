import React from "react";

const SkillIndividual = ({ image, title }) => {
  return (
    <div className="p-3 grid grid-flow-col items-center border shadow-md rounded-lg hover:-tracking-tight cursor-pointer">
      <img
        className="h-14 w-auto text-center object-contain"
        src={image}
        alt=""
      />
      <p>{title}</p>
    </div>
  );
};

export default SkillIndividual;
