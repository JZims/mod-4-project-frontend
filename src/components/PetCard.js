import React from 'react'

 function PetCard({showPet}) {
    //  const [pets, setPets] = useState("")
    console.log(showPet)

    function handleDelete(id) {
        fetch(`http://localhost:3000/pets${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.token}`
            }
        })
            .then(r =>r.json())
            .then(r => console.log(r))
    }

    return (
        <div>
            <ul>
            <li className="pet-card">
                <h4>Name: {showPet.name}</h4>
                <p>Swag Pts: {showPet.swag_total}</p>
                {/* <p>{showPet.user_id}</p> */}
                <img src={showPet.image} alt={showPet.name} className="pet-card-image" />
                <button onClick= {handleDelete}>Delete</button>
            </li>
            </ul>
        </div>
    )
}

export default PetCard