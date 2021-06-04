import React, {useState} from 'react'
// import ItemForm from "./ItemForm"

function ItemCard({name, swag_points, image, id, onDelete}) {
 const[items,setItems]=useState([])

    function handlePopup() {
        alert("swag points added to pet");
    }
    // function handleOnDelete() {
    //     fetch(`http://localhost:3001/items${id}`, {
    //         method: "DELETE",
    //     })
    //     .then((r) => r.json())
    //     .then(() => {
    //         onDelete(id)
    //     })
    // }
    // function onDelete(id) {
    //     const updatedItemsArray = items.filter(item=>item.id !==id)
    //         setItems(updatedItemsArray)
    // }
    return (
        <div className="item-container">
            <h2 className="item-name">Name: {name}</h2>
            <p>swag_points: {swag_points}</p>
            <div className="popup">
            <img src={image} className="item-card" onClick={handlePopup}/>
            </div>
            {/* <button onClick={handleOnDelete}>Delete</button> */}
        </div>
    )
}
export default ItemCard