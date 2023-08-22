import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import CartContext from "./context/CartContext";
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { ToastContainer } from 'react-toastify';
import { initializeApp } from "firebase/app";
import DasbhoardContainer from "./components/DashboardContainer"
import UserContext from "./context/UserContext";
import OrdersContainer from "./components/OrdersContainer";

function App() {

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBaVVaV2h75AFdyLog_kJD-Rv-K-89XCjk",
    authDomain: "mundo-peludo-5c157.firebaseapp.com",
    projectId: "mundo-peludo-5c157",
    storageBucket: "mundo-peludo-5c157.appspot.com",
    messagingSenderId: "370720908727",
    appId: "1:370720908727:web:4e69debd854cd82f15b432"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <BrowserRouter>
      <UserContext>
        <CartContext>
          <ToastContainer />
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
            <Route exact path="dashboard" element={<DasbhoardContainer />} />
            <Route exact path="orders" element={<OrdersContainer />} />
          </Routes>
        </CartContext>
      </UserContext>
    </BrowserRouter>
  );
}

export default App;
