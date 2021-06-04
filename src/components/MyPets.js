import React, {useState, useEffect} from 'react'
import PetCard from './PetCard'
import { Link } from 'react-router-dom'


function MyPets({userPets, userInfo}) {
    
    const [pets, setPets] = useState(userPets.pets)
    // console.log(pets)
    
    function handleDelete(id) {
        const updatedPetsArray = pets.filter((pet) => pet.id !== id);
            setPets(updatedPetsArray)
        }

    const cardIterator = userPets.pets.map(pet => { 
       return  <PetCard key={pet.id} showPet={pet} handleDelete={handleDelete}/>
        } 
    )
    return (
        <div className="card-container">
            <h1 className="user-name">{userInfo.username}'s MyPets Page</h1>
            <div className="flex-box">
            {userPets.length > 0 ? cardIterator : <h3>Duuuude, you don't have any pets yet! Check out the <Link to='/adoption'>Adoption</Link> page to get some little buddies. Rad!</h3>}
            </div>
        </div>

    )
}

export default MyPets