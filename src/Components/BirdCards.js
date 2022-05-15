import React from "react";
import BirdCard from "./BirdCard";
import birdData from "../data/birds";


const BirdCards = () => {

    return(
        <ul>
        {birdData.map(({img, amount, name, id})=> {
            return(
                <li key={id}>
                    <BirdCard img={img} amount={amount} name={name}/>
                </li>
            )
        })}
        </ul>
    )

}
export default BirdCards