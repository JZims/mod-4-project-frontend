import React, {useState, useEffect} from 'react'
import MyPets from './MyPets'
import Adoption from './Adoption'
import Shop from './Shop'
import { Link }from 'react-router-dom'

function Header({ isLoggedIn }) {



    return (
        <div className="nav-bar">
            <Link className="button" to="/mypets">
              My Pets
            </Link>

            <p className="divider">|</p>
            <Link className="button" to="/items">
              All Items
            </Link>
            <p className="divider">|</p>
            <Link className="button" to="/itemsform">
              Create Item
            </Link>
            <p className="divider">|</p>
            <Link className="button" to="/login">
              Login
            </Link> 

        </div>
    )
}

export default Header