import React from 'react';
import Card from './Card';

function CardGroup() {
    let obj = ["pasado", "Presente", "Futuro"]
    return (
        <div className='main-cardGroup'>
            {obj.map((item,index) =>
            <React.Fragment key={index}>
                <Card item={item} />
            </React.Fragment>
             
             )}

        </div>
    )
}

export default CardGroup
