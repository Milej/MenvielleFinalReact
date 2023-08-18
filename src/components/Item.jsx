import React from "react";
import { Link } from "react-router-dom";
import { currencyFormatter } from "./../utils/formatter";

const Item = ({ id, name, category, image, price }) => {
  
  return (
    <Link
      className="col-span-1 rounded shadow-xl cursor-pointer hover:scale-105 ease-in duration-100"
      to={`/item/${id}`}
    >
      <img src={image} alt={name} className="w-full" />
      <div className="px-6 py-4 space-y-3">
        <span className="rounded-md bg-orange-400 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/20">
          {category}
        </span>
        <p className="text-zinc-800 text-3xl">{currencyFormatter(price)}</p>
        <div className="text-sm">{name}</div>
      </div>
    </Link>
  );
};

export default Item;
