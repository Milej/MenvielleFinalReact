import { useRef } from "react";

const ItemCount = ({ id, stock, quantity, setQuantity }) => {

  const inputCount = useRef();

  const onSubstract = () => {
    quantity > 1 && setQuantity(quantity - 1, id);
  };

  const onAdd = () => {
    quantity < stock && setQuantity(quantity + 1, id);
  };

  const handleOnChange = () => {
    const value = parseInt(inputCount.current.value);
    if (value <= stock && value != 0) {
      setQuantity(value, id);
    }
  };

  return (
    <div className="flex">
      <button
        className="border border-zinc-700 text-zinc-700 text-base px-3 py-1 rounded-l-lg hover:text-white hover:bg-zinc-700 max-h-10"
        onClick={onSubstract}
      >
        -
      </button>
      <input
        type="number"
        ref={inputCount}
        className="remove-arrow border-t border-b outline-none text-center text-base border-zinc-700 text-zinc-700 max-h-10"
        value={quantity}
        onChange={handleOnChange}
        min={1}
      />
      <button
        className="border border-zinc-700 text-zinc-700 text-base px-3 py-1 rounded-r-lg hover:text-white hover:bg-zinc-700 max-h-10"
        onClick={onAdd}
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;
