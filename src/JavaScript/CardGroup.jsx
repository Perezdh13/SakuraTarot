import React, { useEffect, useState } from 'react';
import Card from './Card';

function CardGroup() {
    let cardType = ["pasado", "Presente", "Futuro"]
    let [selectedCards, setSelectedCards] = useState([])
    let api = `https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/`

    function getRandomInt(max) {
        return Math.floor(Math.random() * (max-1))
    }

    useEffect(() => {
        function compareNumbers(randomInt, dataArr, data) {
            return dataArr.includes(data[randomInt])? compareNumbers(getRandomInt(data.length), dataArr, data): randomInt
        }
      (async function getData() {
        let response = await fetch(api)
        let data = await response.json()
        let dataArr = []
        for (let i = 0; i < 3; i++) {
            let randomInt = getRandomInt(data.length)
            dataArr.push(data[compareNumbers(randomInt, dataArr, data)])
        }
        setSelectedCards(dataArr)
      })()
    }, [api])
    


    return (
        <div className='main-cardGroup'>
            {selectedCards.map((item,index) =>
            <React.Fragment key={index}>
                <Card item={item} name={item.spanishName} meaning={item.meaning} image={item.clowCard} cardType={cardType[index]} />
            </React.Fragment>
            )}

        </div>
    )
}

export default CardGroup
