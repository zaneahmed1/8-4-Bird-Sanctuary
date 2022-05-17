import React, { useState } from "react";
//import BirdCard from "./BirdCard";

const Cart = ({ cart }) => {
  let totalAmount = 0;
  cart.forEach((element) => {
    totalAmount += element.amount;
    return totalAmount;
  });

  //debugger
  // const [total, setTotal] = useState(0)

  // const handleTotal = (event) => {
  //     event.preventDefault()
  //     cart.map(({amount}) => {
  //         setTotal(total += amount)
  //     })
  // }

  const discountCheck = () => {
    if (cart.length >= 3) {
      return (totalAmount *= 0.9), (<h4 id="discount">Discount: 10%</h4>);
    } else {
      return <h4>Discount : 0%</h4>;
    }
  };

  return (
    <div className="Cart">
      <ol id="basket">
        {cart.map(({ name, amount }) => {
          return (
            <li>
              {name} - {amount}
            </li>
          );
        })}
      </ol>
      {discountCheck()}
      <h4>Total: ${totalAmount} </h4>
      <ol>Bonus items go here</ol>
    </div>
  );
};

export default Cart;
