import React from 'react'

 function PetCard({pet}) {


    return (
        <div>
            <ul>
            <li className="card">
                <h4>{pet.name}</h4>
                <p>{pet.swag_total}</p>
                <p>{pet.user_id}</p>
                <img src = {pet.image} alt="name" />
            </li>
            </ul>
        </div>
    )
}

export default PetCard