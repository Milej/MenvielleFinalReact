import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({ id, name, category, image, price }) => {

  return (
    <div className="col-span-1 rounded shadow-lg">
      <img src={image} alt={name} className="w-full" />
      <div className="px-6 py-4">
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          {category}
        </span>
        <div className="text-base mb-2">{name}</div>
        <p className="text-gray-700 font-bold text-base">${price}</p>
        <NavLink
          to={`item/${id}`}
          className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 my-4 border border-blue-500 hover:border-transparent rounded"
        >
          Detalle
        </NavLink>
      </div>
    </div>
  );
};

export default Item;
