import React, { useState } from "react";
import bonusItems from "../data/bonusItems";
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

  const bonuses = () => {
    if (totalAmount > 100 && totalAmount <= 300) {
      return <li>{bonusItems[0]}</li>;
    } else if (totalAmount >= 301 && totalAmount <= 500) {
      return (
        <>
          <li>{bonusItems[0]}</li>
          <li>{bonusItems[1]}</li>
        </>
      );
    } else if (totalAmount >= 501 && totalAmount <= 1000) {
      return (
        <>
          <li>{bonusItems[0]}</li>
          <li>{bonusItems[1]}</li>
          <li>{bonusItems[2]}</li>
        </>
      );
    } else if (totalAmount > 1000) {
      return (
        <>
          <li>{bonusItems[0]}</li>
          <li>{bonusItems[1]}</li>
          <li>{bonusItems[2]}</li>
          <li>{bonusItems[3]}</li>
        </>
      );
    }
  };

  return (
    <div className="Cart">
      <ol id="basket">
        {cart.map(({ name, amount }) => {
          return (
            <>
              <li>
                {name} - ${amount}
              </li>
            </>
          );
        })}
      </ol>
      {discountCheck()}
      <h4>Total: ${totalAmount} </h4>
      <ul>{bonuses()}</ul>
    </div>
  );
};

export default Cart;
