import React, { useState } from 'react'
import reverseCard from "../img/reversoCarta.png";

function Card(props) {
    let [reverseStyle, setReverseStyle] = useState({display: "block"})
    let [frontStyle, setFrontStyle] = useState({display: "none"})

    function turnCard() {
        setReverseStyle(frontStyle)
        setFrontStyle(reverseStyle)
    } 

    return (
        <div className='main-cardGroup-card'>
            <p>{props.name}</p>
            <img src={reverseCard} onClick={turnCard} style={reverseStyle} alt="reverse Card" />
            <img src={props.image} style={frontStyle} alt="reverse Card" />
            
        </div>
    )
}

export default Card
