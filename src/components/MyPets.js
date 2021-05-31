import React from 'react'
import PetCard from './PetCard'

function MyPets({userData}) {

    return (
        <div>
            <h1>{userData.username}'s MyPets Page</h1>
            
        </div>
    )
}

export default MyPets