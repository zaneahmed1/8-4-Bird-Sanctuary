import React, { useState } from "react";

const Checkout = () => {
    const thankYou = () =>{
        alert(`You have adopted birds. Thank you!`)

    }
    return (
        <form id="checkout">
            <label for="First">First Name</label>
            <input type="text" name="First" id="First"></input>
            <label for="Last">Last Name</label>
            <input type="text" name="Last" id="Last"></input>
            <label for="email">E-Mail</label>
            <input type="email" name="email" id="email"></input>
            <label for="zipcode">Zipcode</label>
            <input type="number" name="zipcode" id="zipcode"></input>
            <br></br>
            <button type="submit" onClick={thankYou}>Submit</button>
        </form>
    )
}

export default Checkout