import React, {useState} from 'react'
import PetCard from './PetCard'


function MyPets({userData}) {
    const [pets, setPets] = useState([userData.pets])

    function handleDelete(id) {
        const updatedPetsArray = pets.filter((pet) => pet.id !== id);
            setPets(updatedPetsArray)
        }

    const cardIterator = pets.map(pet => { console.log(pet)
       return  <PetCard key={pet.id} showPet={pet} handleDelete = {handleDelete}/>
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