import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
    
    return (
        <div>
            <h1>Welcome Page</h1>
            <Link to='/login'>Login Here</Link>
            <br>
            </br>
            <Link to='/signup'>Sign Up Here</Link>
        </div>
    )
}
export default Welcome