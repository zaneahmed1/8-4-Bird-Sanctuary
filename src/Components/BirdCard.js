import React from "react";
// import Cart from "./Cart";


const BirdCard = ({ img, name, amount, setCart, cart }) => {

    const handleClick = () => {
        setCart([...cart, {name, amount}])
        //debugger
    }

        return(
            <div class="birds">
                <h2>{name}</h2>
                <p>Price: ${amount}</p>
                <img src= {img} alt={name}></img>
                <button type="button" onClick={handleClick}>Adopt</button>
            </div>
        )


}

export default BirdCard;


