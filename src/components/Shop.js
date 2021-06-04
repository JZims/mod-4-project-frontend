import React, {useEffect, useState} from 'react'
import ItemCard from './ItemCard'
import {Button} from 'semantic-ui-react'
import ItemForm from './ItemForm'

function Shop() {

    const[items, setItems] = useState([])
    const[showForm, setShowForm] = useState(false)

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

    function handleAddItem(newItem) {
        const updatedItemsArray = [...items, newItem];
        setItems(updatedItemsArray)
    }

    function handleFormToggle() {
        setShowForm(!showForm)
    }



    return (
                
        <>
        {showForm ? <ItemForm onAddItem={handleAddItem}/> : 
                <div className="shop">
                <div className="item-card">
                    <h1 className="shop">Shop:</h1>{itemCards}
                </div>
                </div>}
                <Button onClick={handleFormToggle}>Add Item</Button>
        </>
    )
}

export default Shop