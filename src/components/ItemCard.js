import React from 'react'


function ItemCard({name, swag_points, image}) {


    return (
        <div className="item-container">
            <h2 className="item-name">Name: {name}</h2>
            <p>swag_points: {swag_points}</p>
            <img src={image} className="item-card"/>
        </div>
    )
}
export default ItemCard