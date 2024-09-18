import React from "react";

const ServicesCard = ({ imgURL, label, subtext }) => {
  return (
    <div className=" flex-1  rounded-[20px] shadow-3xl w-full sm:w-[350px]  sm:min-w-[350px] px-10 py-16   ">
      <div className="flex justify-center items-center bg-coral-red rounded-full w-11 h-11 ">
        <img src={imgURL} width={24} height={24} alt="" />
      </div>
      <h3 className=" font-palanquin text-3xl font-bold mt-5 leading-normal   ">
        {label}
      </h3>
      <p className=" font-montserrat text-slate-gray mt-3 leading-normal text-lg break-words  ">
        {subtext}
      </p>
    </div>
  );
};

export default ServicesCard;
