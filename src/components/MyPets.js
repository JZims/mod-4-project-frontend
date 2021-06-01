import React, {useState, useEffect} from 'react'
import PetCard from './PetCard'


function MyPets({userData}) {
    const [pets, setPets] = useState([userData.pets])



    console.log(userData)

    function handleDelete(id) {
        const updatedPetsArray = pets.filter((pet) => pet.id !== id);
            setPets(updatedPetsArray)
        }

    const cardIterator = pets.map(pet => { 
       return  <PetCard key={pet.id} showPet={pet} handleDelete={handleDelete}/>
        }
    )


    return (
        <div>
 
            {userData.username ? 
                <h1>{userData.username}'s MyPets Page {cardIterator}</h1>

            : <h3>Please Login First</h3>}
        </div>
    )
}

export default MyPets