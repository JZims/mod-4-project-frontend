import React from 'react'
import PetCard from './PetCard'


function MyPets({userData}) {

    const cardIterator = userData.pets.map(pet => {
       return  <PetCard pet={pet} />
        }
    )

    return (
        <div>
            <h1>{userData.username}'s MyPets Page</h1>
            {cardIterator}
        </div>
    )
}

export default MyPets