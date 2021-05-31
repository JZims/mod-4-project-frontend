import React from 'react'
import MyPets from './MyPets'
import Adoption from './Adoption'
import Shop from './Shop'

function Header() {
    const [pets, setPets] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:3000/pets")
        .then (r => r.json())
        .then ((petsArray) => {
            console.log(petsArray);
        });
    }, []);
    return (
        <div>
<<<<<<< HEAD
            <main>
                <MyPets />
            </main>
=======
            <p>Header Page</p>
>>>>>>> 945d3c87ea876ab13da54ecee241a1906c228707
        </div>
    )
}

export default Header