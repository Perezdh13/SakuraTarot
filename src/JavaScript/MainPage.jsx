import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import deckCards from "../img/mazoCartas.png";
import reverseCard from "../img/reversoCarta.png";
import seer from "../img/Component 2.png";
function MainPage() {

  let [chooseCardStyle, setChooseCardStyle] = useState(Array(18).fill("defaultCard"))
  let [check, setCheck] = useState("")
  let [seerTxt, setSeerTxt] = useState("...")
  let [timer, setTimer] = useState(0)


  function chooseCards(index) {
    let newChooseCardStyle = [...chooseCardStyle];
    let chooseCardQuantity = newChooseCardStyle.filter(element => element === "glowingCard").length
    if (chooseCardQuantity < 3) {
      newChooseCardStyle[index] = "glowingCard";
      setChooseCardStyle(newChooseCardStyle)
    }
    if (chooseCardQuantity === 2) {
      setCheck("/prediction")
      clearTimeout(timer)
      setSeerTxt("Haz click en el mazo para proceder con la predicción")
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
      let newChooseCardStyle = [...chooseCardStyle];
      let chooseCardQuantity = newChooseCardStyle.filter(element => element === "glowingCard").length
      if (chooseCardQuantity === 0) {
        setSeerTxt("Tienes que seleccionar tres cartas")
      }
      return () => clearTimeout(timer)
    }, 5000))
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
        <Link to={check}>
          <img className='main-page-deck-img' src={deckCards} alt="reverse card" />
        </Link>
      </div>
    </div>
  )
}

export default MainPage