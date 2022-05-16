import React, { useState } from "react";
import BirdCards from "./Components/BirdCards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

const App = () => {
  const [cart, setCart] = useState([]);


  return (
    <div>
      <BirdCards setCart={setCart} cart={cart}/>
      <Cart cart={cart} />
      <Checkout />
    </div>
  );
};

export default App;
