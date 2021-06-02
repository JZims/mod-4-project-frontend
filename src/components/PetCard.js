import React from 'react'

 function PetCard({showPet, handleDelete}) {
    //  const [pets, setPets] = useState("")
    console.log(showPet)

    function onDelete() {
        fetch(`http://localhost:3000/pets${showPet.id}`, {
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
        <div>
            <ul>
            <li className="pet-card">
                <h4>Name: {showPet.name}</h4>
                <p>Swag Pts: {showPet.swag_total}</p>
                {/* <p>{showPet.user_id}</p> */}
                <img src={showPet.image} alt={showPet.name} className="pet-card-image" />
                <button onClick= {onDelete}>Delete</button>
            </li>
            </ul>
        </div>
    )
}

export default PetCard;
