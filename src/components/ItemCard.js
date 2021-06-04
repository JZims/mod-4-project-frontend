import React from 'react'
// import ItemForm from "./ItemForm"

function ItemCard({name, swag_points, image}) {
 

    function handlePopup() {
        alert("swag points added to pet");
    }

    // function handleAddItem(newItem) {
    //     const updatedItemsArray = [...items, newItem];
    //     setItems(updatedItemsArray)
    // }
    return (
        <div className="item-container">
            <h2 className="item-name">Name: {name}</h2>
            <p>swag_points: {swag_points}</p>
            <div className="popup">
            <img src={image} className="item-card" onClick={handlePopup}/>
            </div>
            {/* <ItemForm onAddItem={handleAddItem}/> */}
        </div>
    )
}
export default ItemCard