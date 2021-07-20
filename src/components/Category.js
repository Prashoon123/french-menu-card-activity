import React from "react";
import FoodItem from "../components/FoodItem";

function Category({ name, data }) {
  return (
    <div className="bg-gray-100 rounded-xl border-gray-300 border-8 my-10 p-5 w-auto">
      <h2 className="font-semibold text-2xl">{name}</h2>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3">
        {data.map((item) => (
          <FoodItem key={item.id} id={item.id} name={item.name} image={item.image} width={item.width ? item.width : null} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default Category;
