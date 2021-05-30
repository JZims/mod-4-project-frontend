import React from 'react'
import MyPets from './MyPets';
import Adoption from './Adoption';

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
            <main>
                <MyPets />
            </main>
        </div>
    )
}

export default Header