import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className=" flex flex-1 flex-col w-full max-sm:w-full   ">
      <img src={imgURL} alt={name} className=" w-[280px] h-[280px] " />
      <div className=" mt-8 flex justify-start gap-2.5 ">
        <img src={star} alt="rating" width={24} height={24} />
        <p className=" text-xl font-montserrat text-slate-gray leading-normal  ">
          (4.5)
        </p>
      </div>
      <h3 className=" leading-normal font-semiblod text-2xl mt-2 font-palanquin   ">
        {name}
      </h3>
      <p className=" mt-2 font-montserrat font-semibold text-coral-red text-2lx leading-normal  ">{price}</p>
    </div>
  );
};

export default PopularProductCard;
