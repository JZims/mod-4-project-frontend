import { Switch, Route } from 'react-router-dom'
import React , { useState } from 'react'
import Login from "./Login"
import Header from "./Header"
import Welcome from './Welcome'
import MyPets from './MyPets'
import Adoption from './Adoption'

function App() {

    const[userPets, setUserPets] = useState({pets: []})
    const[userInfo, setUserInfo] = useState({user: []})
    const[userItems, setUserItems] = useState({items: []})
    const[isLoggedIn, setIsLoggedIn] = useState(false)

    

    console.log(userPets)

    return (
    <div>
    <Header isLoggedIn={isLoggedIn}/>
     <Switch>
       <Route exact path='/'>
        <Welcome />
       </Route>
        <Route exact path="/login">
          <Login setUserPets={ setUserPets } setUserInfo={ setUserInfo } setUserItems={ setUserItems } setIsLoggedIn= { setIsLoggedIn }/>
        </Route>
        <Route exact path="/adoption">
          <Adoption />
        </Route>
        <Route exact path='/mypets'>
          <MyPets userInfo={ userInfo } userPets={ userPets } userItems={ userItems }/>
        </Route>
     </Switch>
            
    </div>
    )
}
export default App