import React from 'react'
import { Link } from 'react-router-dom'
function Welcome() {
   

    return (
        <div className="login">
            <h1>Welcome Page</h1>
            <Link to='/login'>Login Here</Link>
    
        </div>
    )
}
export default Welcome