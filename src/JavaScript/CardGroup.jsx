import React, { useEffect, useState } from 'react';
import Card from './Card';

function CardGroup() {
    let cardType = ["pasado", "Presente", "Futuro"]
    let [selectedCards, setSelectedCards] = useState([])
    let api = `https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/`

    useEffect(() => {
      (async function getData() {
        let response = await fetch(api)
        let data = await response.json()
        setSelectedCards(data.splice(0,3))
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
