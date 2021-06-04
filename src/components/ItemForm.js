import React, { useState } from "react";

function ItemForm({onAddItem}) {

    const[name, setName] = useState("");
    const[swag_points, setSwagPoints]=useState("");
    const[image, setImage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                name: name,
                swag_points: swag_points,
                image: image,
            }),
        })
            .then((r) => r.json())
            .then((newItem)=>onAddItem(newItem))
    }


  return (
    <div className="new-item-form">
        <h2 className="form-header">Add New Item</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="name"
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <input
                type="number"
                swag_points="swag_points"
                placeholder="swag points"
                value={swag_points}
                onChange={(e) => setSwagPoints(e.target.value)}
                />
            <br/>
            <input
                type="text"
                name="image"
                placeholder="image URL"
                value={image}
                onChange={(e)=>setImage(e.target.value)}
                />
                <br/>
                <button type="submit" className="add-button">Create</button>
                </form>
    </div>
  );
}

export default ItemForm;