import Item from "./Item";

const ItemList = ({products}) => {

  return products.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      category={item.categoryName}
      image={item.image}
      price={item.price}
    />
  ));
};

export default ItemList;
