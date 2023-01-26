import React, { useState } from 'react'
import reverseCard from "../img/reversoCarta.png";

function Card(props) {
    let [reverseStyle, setReverseStyle] = useState({ display: "block" })
    let [frontStyle, setFrontStyle] = useState({ display: "none" })
    let [mouseOver, setMouseOver] = useState("")


    function turnCard() {
        setReverseStyle(frontStyle)
        setFrontStyle(reverseStyle)
    }

    function overCard(event) {
        setMouseOver((event.type === "mouseover") ? props.meaning : "")
    }


    return (
        <div className='main-cardGroup-card'>
            <p style={frontStyle}>{props.name}</p>
            <img src={reverseCard} onClick={turnCard} style={reverseStyle} alt="reverse Card" />
            <img src={props.image} onMouseOut={(event) => { overCard(event) }} onMouseOver={(event) => { overCard(event) }} style={frontStyle} alt="reverse Card" />
            <p>{mouseOver}</p>
            <p>{props.cardType}</p>
        </div>
    )
}

export default Card 
