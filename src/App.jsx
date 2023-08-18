import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart"
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="category/:categoryId" element={<ItemListContainer />} />
        <Route exact path="item/:id" element={<ItemDetailContainer />} />
        <Route exact path="cart" element={<Cart />} />
        <Route exact path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
