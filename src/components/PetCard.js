import React from 'react'

 function PetCard({showPet, handleDelete}) {
    

    function onDelete() {
        fetch(`http://localhost:3000/pets/${showPet.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.token}`
            }
        })
            .then(r =>r.json())
            .then(r => {
                handleDelete(showPet.id)
            })
    }

    return (
        <div className="flex-box">
            <div className="pet-card">
                <h4 className="pet-name">Name: {showPet.name}</h4>
                <p>Swag Pts: {showPet.swag_total}</p>
                {/* <p>{showPet.user_id}</p> */}
                <img src={showPet.image} alt={showPet.image} />
                <br/><button onClick= {onDelete} className="delete">Delete</button>
            </div>
        </div>
    )
}


export default PetCard;
