import React from 'react'

 function PetCard({showPet, handleDelete}) {
    //  const [pets, setPets] = useState("")

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
                handleDelete(id)
            })
    }

    return (
        <div>
            <ul>
            <li className="card">
                <h4>{showPet.name}</h4>
                <p>{showPet.swag_total}</p>
                <p>{showPet.user_id}</p>
                <img src = {showPet.image} alt="name" />
                <button onClick= {onDelete}>Delete</button>
            </li>
            </ul>
        </div>
    )
}

export default PetCard