import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
    // can be written with props or simply be destructured

    const cardComponent = robots.map((r, i) => {
        return <Card 
        // each child in array needs unique key; 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
        />
    })

    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList