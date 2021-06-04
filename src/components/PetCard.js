import React from 'react'
import { Link } from 'react-router-dom'

 function PetCard({showPet, setFilteredPets, userPets}) {
    

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

    function handleDelete(id) {
        const updatedPetsArray = userPets.filter((pet) => pet.id !== id);
        setFilteredPets(updatedPetsArray)
    }     

    return (
            <div className="pet-card">
                <h4 className="pet-name">{showPet.name}</h4>
                <p className="swag">Swag Total: {showPet.swag_total}</p>
                {/* <p>{showPet.user_id}</p> */}
                <img src={showPet.image} alt={showPet.image} />
                <br/><button className="item-button"><Link to='/items'>Item Shop</Link></button>
                <br/><button onClick= {onDelete} className="delete">Delete</button>
            </div>
        
    )
}


export default PetCard;
