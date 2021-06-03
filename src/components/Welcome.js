import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
function Welcome() {
    const [items, setItems] = useState([])

    return (
        <div className="login">
            <h1>Welcome Page</h1>
            <Link to='/login'>Login Here</Link>
    
        </div>
    )
}
export default Welcome