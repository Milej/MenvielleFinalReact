import React, { useEffect, useState } from "react";
import Item from "./Item";

const ItemListContainer = () => {
  const getProducts = async () => {
    const response = await fetch("../../api.json");
    const data = await response.json();
    return data;
  };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts().then((product) => setProduct(product), []);
  });

  console.log(product);
  return (
    <>
      <div className="flex flex-col px-10">
        <h1 className="text-4xl self-center p-3">Lista de productos</h1>
        <div className="grid gap-4 grid-cols-6 p-4">
          {product.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.category}
                image={item.image}
                price={item.price}
              ></Item>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
