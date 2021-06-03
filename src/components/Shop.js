import React from 'react'

function Shop({items}) {
    const{name, swag_points, image} = items


    return (
        <div className="item-card">
            <h2 className="item">{name}</h2>
            <img src={image} alt={name}/>
            <p>Swag Points: {swag_points}</p>        
        </div>
    )
}

export default Shop