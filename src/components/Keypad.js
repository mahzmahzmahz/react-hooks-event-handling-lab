// Code Keypad Component Here
import React from "react"

function Keypad(){

    function handleClick(){
    console.log('Entering password...')
    }
    return (
        <input type="password" onChange={handleClick}/>
    )
}

export default Keypad;