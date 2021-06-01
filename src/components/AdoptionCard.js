import React from 'react'

 function AdoptionCard({adoption}) {
     const{name, swag_total, image} = adoption;
    return (
        <div>
            <li className="adoption">
                <h4>Name: {name}</h4>
                <p>Swag Total: {swag_total}</p>
                <img src={image} alt={name}/>
            </li>
        </div>
    )
}
export default AdoptionCard