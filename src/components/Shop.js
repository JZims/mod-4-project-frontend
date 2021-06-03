import React, {useEffect, useState} from 'react'
import ItemCard from './ItemCard'

function Shop() {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        // if(localStorage.token){
          fetch("http://localhost:3000/items", {
            headers:{
                Authorization: `Bearer ${localStorage.token}`
           } 
          }
         )
          .then(r => r.json())
          .then((itemsArray) =>
            setItems(itemsArray)
            )
          }, [])


        const itemCards = items.map((item) => {
            return <ItemCard
                key={item.id}
                name={item.name}
                swag_points={item.swag_points}
                image={item.image}
            />
        })


    return (
        <div className="shop">
            <div className="item-card">
            <h1 className="shop">Shop:</h1>
            {itemCards}
        </div>
        </div>
    )
}

export default Shop