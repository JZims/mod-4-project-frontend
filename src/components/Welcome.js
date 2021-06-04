import React from 'react'
// import { Link } from 'react-router-dom'

function Welcome() {
   

    return (
        <div className="main">
            <h1 className="welcome">Welcome Page</h1>
            <p className="splash">Adopt your 90's pets</p>
            {/* <Link to='/login'>Login Here</Link> */}
            <img src="https://images-na.ssl-images-amazon.com/images/I/617tHG4xudL._AC_.jpg" className="banner"/>
            <img src="http://cdn.shopify.com/s/files/1/2534/8132/products/ABPID10698-Cartoons_20Of_20The_2090s_20Assorted_20Characters-convert-20200918020818438715_1200x1200.jpg?v=1613767218" className="banner"/>
            <img src="https://img.buzzfeed.com/store-an-image-prod-us-east-1/2d1e5Z1E.png" className="banner"></img>
        </div>
    )
}
export default Welcome