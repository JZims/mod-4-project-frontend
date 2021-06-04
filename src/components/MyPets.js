import React, {useState} from 'react'
import PetCard from './PetCard'
import { Link } from 'react-router-dom'


function MyPets({userPets, userInfo}) {
    
    
    const [filteredPets, setFilteredPets] = useState(userPets)


    console.log(filteredPets)

    const cardIterator = userPets.map(pet => { 
       return  <PetCard key={pet.id} showPet={pet}  userPets= {userPets} setFilteredPets={ setFilteredPets }/>
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