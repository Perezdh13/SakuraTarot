import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import deckCards from "../img/mazoCartas.png";
import reverseCard from "../img/reversoCarta.png";
import seer from "../img/Component 2.png";

function MainPage() {

  let [chooseCardStyle, setChooseCardStyle] = useState(Array(18).fill("defaultCard"))
  let [deckLink, setDeckLink] = useState("")
  let [seerTxt, setSeerTxt] = useState("Hola, amiguitos. ¿Habéis venido para que os lea el futuro?")
  let [timer, setTimer] = useState(0)


  function chooseCards(index) {
    let newChooseCardStyle = [...chooseCardStyle];
    let chooseCardQuantity = newChooseCardStyle.filter(element => element === "glowingCard").length
    if (chooseCardQuantity < 3) {
      newChooseCardStyle[index] = "glowingCard";
      setChooseCardStyle(newChooseCardStyle)
    }
    if (chooseCardQuantity === 2) {
      setDeckLink("/prediction")
      clearTimeout(timer)
      setSeerTxt("Ahora, haz click en el mazo para proceder con la predicción")
    }
  }


  function seeCards() {
    let deckCards = []
    for (let i = 0; i < 18; i++) {
      deckCards.push([reverseCard])
    }
    return deckCards
  }


  useEffect(() => {
    setTimer(setTimeout(() => {
      let chooseCardQuantity = chooseCardStyle.filter(element => element === "glowingCard").length
      if (chooseCardQuantity === 0) {
        setSeerTxt("Necesito que escojas tres cartas.")
      }
    }, 5000))
    return () => clearTimeout(timer)
  }, [chooseCardStyle])






  return (
    <div className='main-page' >
      <h1>Escoje tres cartas</h1>
      <div className='main-page-cardsSeer'>
        <img className='main-page-cardsSeer-img' src={seer} alt="seer img" />
        <div className='main-page-cardsSeer-p'>
          <p >{seerTxt}</p>
        </div>
      </div>
      <div className='main-page-cards'>
        {seeCards().map((item, index) => {
          return (
            <div key={index} className={`main-page-cards-img ${chooseCardStyle[index]}`} >
              <img src={reverseCard} onClick={() => chooseCards(index)} alt="reverse card" />
            </div>
          )
        })}
      </div>
      <div className='main-page-deck'>
        <Link to={deckLink}>
          <img className='main-page-deck-img' src={deckCards} alt="reverse card" />
        </Link>
      </div>
    </div>
  )
}

export default MainPage