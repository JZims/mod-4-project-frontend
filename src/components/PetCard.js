import React from 'react'

 function PetCard({pet}) {


    return (
        <div>
            <ul>
            <li className="card">
                <h3>{pet.name}</h3>
                <p>Swag Pts: {pet.swag_total}</p>
                <img src ={pet.image} alt="name" />
            </li>
            </ul>
        </div>
    )
}

export default PetCard