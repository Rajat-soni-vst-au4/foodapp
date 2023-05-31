import React, {useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const hideCart = () =>{
    setCartIsShown(false);
  };

  const showCart = () =>{
    setCartIsShown(true);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCart}/>}
      <Header showCart={showCart} hideCart={hideCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
