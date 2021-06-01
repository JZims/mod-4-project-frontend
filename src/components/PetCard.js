import React from 'react'

 function PetCard({showPet}) {
    //  const [pets, setPets] = useState("")

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
            <li className="card">
                <h4>{showPet.name}</h4>
                <p>{showPet.swag_total}</p>
                <p>{showPet.user_id}</p>
                <img src = {showPet.image} alt="name" />
                <button onClick= {handleDelete}>Delete</button>
            </li>
            </ul>
        </div>
    )
}

export default PetCard