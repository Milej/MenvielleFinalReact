import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import CartContext from "./context/CartContext";
import Login from "./components/Login"
import SignUp from "./components/SignUp"

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route exact path="item/:id" element={<ItemDetailContainer />} />
          <Route exact path="cart" element={<Cart />} />
          <Route exact path="checkout" element={<Checkout />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<SignUp />} />
        </Routes>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
