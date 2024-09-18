import React from "react";

const ShoeCard = ({ imgUrl, changeBigShoe, bigShoeImage }) => {
  
const handleClick=()=>{
    if(bigShoeImage !== imgUrl.bigShoe){
        changeBigShoe(imgUrl.bigShoe)
    }
}
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgUrl.bigShoe ? "border-coral-red  " : "border-transparent "
      } cursor-pointer max-sm:flex-1   `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-cover bg-center rounded-xl sm:w-40 sm:h-40  max-sm:p-4  ">
        <img
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default ShoeCard;
