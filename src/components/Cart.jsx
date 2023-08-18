import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { currencyFormatter } from "../utils/formatter";
import ItemCount from "./ItemCount";

const Cart = () => {
  // const { cart, cartItems } = useContext(CartContext);
  // console.log(cart);

  const cartItems = 2;
  const cart = [
    {
      id: 1,
      name: "Cat Chow Adulto Carne Y Pollo X 15 Kg",
      categoryId: "alimento",
      categoryName: "Alimento",
      description:
        "Purina Cat Chow Defense Plus + es un alimento 100% balanceado y completo, con prebiótico natural, sin colorantes ni sabores artificiales, indicado para gato adulto a partir de 1 año de edad. Su fórmula refuerza la protección del tracto urinario y ayuda a reducir la acumulación de sarro, cuidando la piel y manteniendo su pelo saludable. Sabor a carne.",
      image:
        "http://localhost:5173/src/img/productos/alimentos/alimento-catchow-cyp-gato.webp",
      price: 19500,
      stock: 10,
      quantity: 10
    },
    {
      id: 2,
      name: "Cat Chow Adulto Pescado Y Pollo X 15 Kg",
      categoryId: "alimento",
      categoryName: "Alimento",
      description:
        "Purina Cat Chow Defense Plus + es un alimento 100% balanceado y completo, con prebiótico natural, sin colorantes ni sabores artificiales, indicado para gato adulto a partir de 1 año de edad. Su fórmula refuerza la protección del tracto urinario y ayuda a reducir la acumulación de sarro, cuidando la piel y manteniendo su pelo saludable. Sabor a pescado.",
      image:
        "http://localhost:5173/src/img/productos/alimentos/alimento-catchow-pyp-gato.webp",
      price: 19500,
      stock: 5,
      quantity: 10
    },
  ];
  return (
    <div className="bg-gray-200 max-w-screen min-h-screen p-10 ">
      <div className="container bg-white mx-auto">
        <h1 className="text-lg font-semibold px-10 py-5">
          Productos a comprar
        </h1>

        {cartItems > 0 ? (
          cart.map((item) => (
            <div className="flex p-5 border-t border-b border-zinc-200">
              <img src={item.image} alt={item.name} className="w-32 h-32" />
              <div className="flex">
                <h2 className="text-md font-semibold">{item.name}</h2>
                <button className="text-red-500">Quitar producto</button>
              </div>
              <ItemCount
                stock={item.stock}
                quantity={item.quantity}
                setQuantity={""}
              />
              {/* <div className="flex-row space-y-14">
              
              <h6 className="text-4xl">{currencyFormatter(item.price)}</h6>
              <p className="text-zinc-400 text-sm text-justify">
                {item.description}
              </p>
            </div> */}
            </div>
          ))
        ) : (
          <h1>Sin datos</h1>
        )}
        <div className="container flex"></div>
      </div>
    </div>
  );
};

export default Cart;
