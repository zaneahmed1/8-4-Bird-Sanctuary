import React, { useState } from "react";
import BirdCard from "./BirdCard";


const Cart = ({name, amount} ) => {
    const [adopt, setAdopt] = useState("");
    const handleAdopt = (event) =>{
        event.preventDefault();
        setAdopt(console.log(name, amount));
    }
    return (
        <div className="Cart">
            <ol>
            </ol>
            <h4>Total :</h4>


        </div>
    )
}

export default Cart
