import React, { useState } from "react";
//import BirdCard from "./BirdCard";



const Cart = ({cart}) => {
    debugger
    // const [total, setTotal] = useState(0)

    // const handleTotal = (event) => {
    //     event.preventDefault()
    //     cart.map(({amount}) => {
    //         setTotal(total += amount)
    //     })
    // }

    return (
        <div className="Cart">
            <ol>
            {cart.map(({name, amount})=>{
                return(
                <li>{name} - {amount}</li>
                )
            })}       
            </ol>
            <h4>Discount: </h4>
            <h4>Total : $ </h4>
        </div>
    )
}




export default Cart
