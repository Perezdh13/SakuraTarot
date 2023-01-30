import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import deckCards from "../img/mazoCartas.png";
import reverseCard from "../img/reversoCarta.png";

function MainPage() {


  function seeCards() {
    let deckCards = []
    for (let i = 0; i < 18; i++) {
      deckCards.push(reverseCard)
    }
    return deckCards
  }

  console.log(seeCards());


  return (
    <div className='main-page'>
      <h1>Escoje tus cartas</h1>
      <div className='main-page-cards'>
        {seeCards().map((item) => {
          return <img className='main-page-cards-img' src={item}></img>
        })}
      </div>
      <div className='main-page-deck'>
        <Link to="/prediction">
          <img className='main-page-deck-img' src={deckCards}></img>
        </Link>
      </div>
    </div>
  )
}

export default MainPage