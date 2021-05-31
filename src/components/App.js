import { Switch, Route } from 'react-router-dom'
import React , { useState } from 'react'
import Login from "./Login"
import Header from "./Header"
import Welcome from './Welcome'
import MyPets from './MyPets'

function App() {

    const[userData, setUserData] = useState({})
    const[isLoggedIn, setIsLoggedIn] = useState(false)

    

    console.log(userData)

    return (
    <div>
    <Header isLoggedIn={isLoggedIn}/>
     <Switch>
       <Route exact path='/'>
        <Welcome />
       </Route>
        <Route exact path="/login">
          <Login setUserData={ setUserData } setIsLoggedIn= { setIsLoggedIn }/>
        </Route>
        {/* <Route exact path="/signup">
          <Signup setUserData={ setUserData } setIsLoggedIn= { setIsLoggedIn }/>
        </Route> */}
        <Route exact path='/mypets'>
          <MyPets userData={ userData }/>
        </Route>
     </Switch>
            
    </div>
    )
}
export default App