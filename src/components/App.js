import { Switch, Route } from 'react-router-dom'
import React , { useState, useEffect } from 'react'
import Login from "./Login"
import Header from "./Header"
import Welcome from './Welcome'
import MyPets from './MyPets'
import Adoption from './Adoption'
import Shop from './Shop'
import ItemForm from './ItemForm'

function App() {

    const[userPets, setUserPets] = useState({pets: []})
    const[userInfo, setUserInfo] = useState({user: []})
    const[userItems, setUserItems] = useState({items: []})
    const[isLoggedIn, setIsLoggedIn] = useState(false)


    useEffect(() => {

        if(localStorage.token){
          fetch(`http://localhost:3000/api/v1/profile`, {
            headers:{
                Authorization: `Bearer ${localStorage.token}`
           } 
          }
         )
          .then(r => r.json())
          .then(r => 
              console.log(r)
              // helpSetUser(r.user)
            )
          } else {
            alert("Please Log In First!")
          }
        }, [])

      const helpSetUser = (user) => {
        setUserPets({pets: [...user.pets]})
        setUserItems({items: [...user.items]})
        setUserInfo(user)
      }

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
          <MyPets userInfo={ userInfo } userPets={ userPets } setUserPets= { setUserPets} userItems={ userItems }/>
        </Route>
        <Route exact path='/items'>
          <Shop />
        </Route>
        <Route exact path='/itemsform'>
          <ItemForm />
        </Route>
     </Switch>
            
    </div>
    )
}
export default App