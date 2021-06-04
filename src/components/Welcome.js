import React from 'react'
import { Link } from 'react-router-dom'
function Welcome() {
   

    return (
        <div className="">
            <h1 className="welcome">Let's Get Weird!</h1>
            <div className="login-button"><Link to='/login'>Login Here</Link></div>
    
        </div>
    )
}
export default Welcome