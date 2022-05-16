import React from "react";
import BirdCard from "./BirdCard";
import birdData from "../data/birds";


const BirdCards = ({ setCart, cart }) => {

    return(
        <ul className="birds">
        {birdData.map(({img, amount, name, id})=> {
            return(
                <li key={id}>
                    <BirdCard cart={cart} setCart={setCart} img={img} amount={amount} name={name}/>
                </li>
            )
        })}
        </ul>
    )

}
export default BirdCards