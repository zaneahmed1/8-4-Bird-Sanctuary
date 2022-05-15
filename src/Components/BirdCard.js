import React from "react";
// import Cart from "./Cart";


const BirdCard = ({ img, name, amount }) => {
        return(
            <div>
                <h2>{name}</h2>
                <p>Price: ${amount}</p>
                <img src= {img} alt= "BirdCard" width={200} height={200}></img>
                <button type="button">Adopt</button>
            </div>
        )


}

export default BirdCard;


