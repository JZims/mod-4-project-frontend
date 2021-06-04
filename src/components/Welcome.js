import React from 'react'
import { Link } from 'react-router-dom'
function Welcome() {
   

    return (
        <div className="">
            <h1 className="welcome">Welcome Page</h1>
            <Link to='/login'>Login Here</Link>
    
        </div>
    )
}
export default Welcome