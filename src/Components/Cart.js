import React, { useState } from "react";
//import BirdCard from "./BirdCard";
import bonusItems from "../data/bonusItems";



const Cart = ({cart}) => {
    debugger
    
    const [deleteButton, setDeleteButton] = useState(cart)

    const handleDeleteButton = (index) => {
        setDeleteButton(deleteButton.splice(index, 1))
    }


    let total = 0
    cart.forEach(element => {
       total += element.amount
       return total
    });

    const bonuses = () => {
        if (total > 100 && total <= 300) {
          return <li>{bonusItems[0]}</li>;
        } else if (total >= 301 && total <= 500) {
          return (
            <>
              <li>{bonusItems[0]}</li>
              <li>{bonusItems[1]}</li>
            </>
          );
        } else if (total >= 501 && total <= 1000) {
          return (
            <>
              <li>{bonusItems[0]}</li>
              <li>{bonusItems[1]}</li>
              <li>{bonusItems[2]}</li>
            </>
          );
        } else if (total > 1000) {
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

    const discounts = () => {
       if(cart.length >= 3){
           return (total *= 0.9), (<h4>Discount: 10%</h4>)
       } else {
           return (<h4>Discount: 0%</h4>)
       }
    } 


    return (
        <div className="Cart">
            <ol>
            {cart.map(({name, amount})=>{
                return(
                <li>
                    {name} - {amount}
                <button onClick={handleDeleteButton}>Delete</button>
                </li>
                )
            })}       
            </ol>
            {discounts()}
            <h4>Total : ${total} </h4>
            <ul>
            {bonuses()}
            </ul>
        </div>
    )
}




export default Cart
