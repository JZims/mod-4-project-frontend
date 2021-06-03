import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Shop from './Shop'

function Welcome() {
    const [items, setItems] = useState([])


    return (
        <div className="login">
            <h1>Welcome Page</h1>
            <Link to='/login'>Login Here</Link>
           <Shop />
    
        </div>
    )
}
export default Welcome