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
              Items Shop
            </Link>
            <p className="divider">|</p>
            <Link className="button" to="/itemsform">
              Create Item
            </Link>
            <p className="divider">|</p>
            <Link className="button" to="/login">
              Login
            </Link> 
            <br/>
            <iframe width="800" height="55" src="https://www.youtube.com/embed/2H5uWRjFsGc?start=9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Header