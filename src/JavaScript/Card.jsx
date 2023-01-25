import React from 'react'
import reverseCard from "../img/reversoCarta.png";

function Card(props) {
    console.info(props)
    return (
        <div className='main-cardGroup-card'>
            <img src={reverseCard} alt="reverse Card" />
            <p>{props.item}</p>
        </div>
    )
}

export default Card
