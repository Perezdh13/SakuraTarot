import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import deckCards from "../img/mazoCartas.png";
import reverseCard from "../img/reversoCarta.png";

function MainPage() {

let [choseCardStyle, setChoseCardStyle] = useState(Array(18).fill({display:"block"})) 

function chooseCards(index){
  let newChoseCardStyle = [...choseCardStyle];
    newChoseCardStyle[index] = {display: "block", opacity:"0.5"};
    setChoseCardStyle(newChoseCardStyle)
    console.log(newChoseCardStyle);
}


  function seeCards() {
    let deckCards = []
    for (let i = 0; i < 18; i++) {
      deckCards.push([reverseCard])
    }
   console.log(deckCards);
    return deckCards
  }


  return (
    <div className='main-page' >
      <h1>Escoje tus cartas</h1>
      <div className='main-page-cards'>
        {seeCards().map((item,index) => {
          return (
          <div id={index} className='main-page-cards-img'>
         <img id={index} src={reverseCard} onClick={() => chooseCards(index)} style={choseCardStyle[index]} alt="reverse card" />
          </div>
        )})}
      </div>
      <div className='main-page-deck'>
        <Link to="/prediction">
          <img className='main-page-deck-img' src={deckCards} alt="reverse card" />
        </Link>
      </div>
    </div>
  )
}

export default MainPage