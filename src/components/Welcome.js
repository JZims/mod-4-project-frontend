import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
    const [items, setItems] = useState([])
    
    // useEffect(()=> {
    //     fetch("http://localhost:3001/items")
    //         .then((r) => r.json())
    //         .then((itemsArray) => {
    //             console.log(itemsArray)
    //         });
    //     }, [])

    //     const itemCards = itemsArray.map((item) => {
    //         return <Shop
    //             key={item.name}
    //             name={item.name}
    //         />
    //     })

    return (
        <div className="login">
            <h1>Welcome Page</h1>
            <Link to='/login'>Login Here</Link>
    
        </div>
    )
}
export default Welcome