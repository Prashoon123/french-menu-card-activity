import React from "react";
import Image from "next/image";

function FoodItem({ name, image, width, price, id }) {
  return (
    <div className="bg-gray-300 rounded-md xl:h-40 xl:w-80 my-10 mr-10 p-4 flex flex-row items-center">
      <Image
        loading="lazy"
        className="rounded-lg"
        // objectFit="cover"
        layout="fixed"
        height={140}
        width={width || 140}
        src={image}
      />
      <div className="flex flex-col items-start">
        <h2 className="font-semibold text-2xl ml-2">{name}</h2>
        {/* <p className="ml-2">EUR {price || 10}</p> */}
        <p className="ml-2">
          <span>€</span>
          {price || 10}
        </p>
      </div>
    </div>
  );
}

export default FoodItem;
