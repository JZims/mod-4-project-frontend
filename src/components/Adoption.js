import React, {useEffect, useState} from 'react'
import AdoptionCard from './AdoptionCard'

function Adoption() {
    const [adoptions, setAdoptions] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/adoptions")
        .then((r) => r.json())
        .then((adoptions => {
            setAdoptions(adoptions)
        }))
    })
    const adoptionCards = adoptions.map((adoption) => {
        return <AdoptionCard 
            key={adoption.id}
            adoption={adoption}
        />
    })

    return (
        <div>
            {adoptionCards}
        </div>
    )
}
export default Adoption