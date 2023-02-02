import React, { useState } from 'react'
import reverseCard from "../img/reversoCarta.png";

function Card(props) {
    let [reverseStyle, setReverseStyle] = useState({ display: "block" })
    let [frontStyle, setFrontStyle] = useState({ display: "none", opacity: "1"})
    let [nameStyle, setNameStyle] = useState({ display: "none"})
    let [meaning, setMeaning] = useState("")
    let [checkMouseout, setCheckMouseout] = useState(false)


    function turnCard() {
        setReverseStyle(frontStyle)
        setFrontStyle(reverseStyle)
        setNameStyle(reverseStyle)
    }
    function overCard(event) {
        if (checkMouseout === false) {
            setCheckMouseout ((event.type ==="mouseout")? true : false)
        }else {
            setMeaning((event.type === "mouseover") ? props.meaning : "")
            setFrontStyle((event.type === "mouseover") ? { display: "block", opacity: "0.6"} : { display: "block", opacity: "1"})
        }
    }
    
    return (
        <div className='main-cardGroup-card'>
            <p className='main-cardGroup-card-name' style={nameStyle}>{props.name}</p>
            <div className='main-cardGroup-card-img'>
                <img src={reverseCard} onClick={turnCard} style={reverseStyle} alt="reverse Card" />
                <img src={props.image} onMouseOut={(event) => { overCard(event) }} onMouseOver={(event) => { overCard(event) }} style={frontStyle} alt="reverse Card" />
                <p onMouseOut={(event) => { overCard(event) }} onMouseOver={(event) => { overCard(event) }} className='main-cardGroup-card-descripcion'>{meaning}</p>
            </div>
            
            <p className='main-cardGroup-card-type'>{props.cardType}</p>
        </div>
    )
}

export default Card 
