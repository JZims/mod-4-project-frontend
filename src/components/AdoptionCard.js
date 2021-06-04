import React from 'react'

 function AdoptionCard({name, swag_points, image}) {

    //POST request to create new Adoption goes here, passes up state


    return (
        <div>
            <h1>Adoptions:</h1>
            <li className="adoption">
                {name}
                {swag_points}
                {image}
            </li>
        </div>
    )
}
export default AdoptionCard