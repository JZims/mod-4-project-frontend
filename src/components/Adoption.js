import React, {useEffect, useState} from 'react'
import AdoptionCard from './AdoptionCard'

function Adoption () {
    // const[adoptions, setAdoptions] = useState([])
    

    // useEffect(() => {
    //     // if(localStorage.token){
    //       fetch("http://localhost:3000/pets", {
    //         headers:{
    //             Authorization: `Bearer ${localStorage.token}`
    //        } 
    //       }
    //      )
    //       .then(r => r.json())
    //       .then((petsArray) =>
    //         setAdoptions(petsArray)
    //         )
    //       }, [])
    //         console.log(petsArray)

    //     // const adoptionCards = adoptions.map((adoption) => {
    //     //     return <AdoptionCard
    //     //         key={adoption.id}
    //     //         user={adoption.user_id}
    //     //         pet={adoption.pet_id}
    //     //     />
    //     // })

    //     const adoptionCards= petsArray.map(pet => { 
    //         return  <AdoptionCard 
    //             key={pet.id} 
    //             name={pet.name}
    //             swag_points={pet.swag_points}
    //             image={pet.image}
    //         />
    //     }
    //     )



    return (
        <div>
        {/* {adoptionCards} */}
        </div>
    )
}
export default Adoption