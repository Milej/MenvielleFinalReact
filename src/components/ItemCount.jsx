import { useState, useRef } from "react";

const ItemCount = ({ stock, quantity, setQuantity }) => {

  const inputCount = useRef();

  const onSubstract = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const onAdd = () => {
    quantity < stock && setQuantity(quantity + 1);
  };

  const handleOnChange = () => {
    const value = parseInt(inputCount.current.value);
    if (value <= stock && value != 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex justify-between">
      <button
        className="border border-zinc-700 text-zinc-700 text-base px-3 py-1 rounded-l-lg hover:text-white hover:bg-zinc-700 max-h-10 self-center" 
        onClick={onSubstract}
      >
        -
      </button>
      <input
        type="number"
        ref={inputCount}
        className="remove-arrow border outline-none border-none text-center text-2xl"
        value={quantity}
        onChange={handleOnChange}
        min={1}
      />
      <button
        className="border border-zinc-700 text-zinc-700 text-base px-3 py-1 rounded-r-lg hover:text-white hover:bg-zinc-700 max-h-10 self-center"
        onClick={onAdd}
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;
