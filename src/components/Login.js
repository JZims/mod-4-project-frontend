import React, { useState } from 'react'
import Signup from './Signup'
import { useHistory } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'



function Login({setUserPets, setUserInfo, setUserItems, setIsLoggedIn}) {
  const[userNameInput, setUserNameInput] = useState("")
  const[passwordInput, setPasswordInput] = useState("")
  const[showCreateUser, setShowCreateUser] = useState(false)

  const history = useHistory()

  const userLogin = {
    username: userNameInput, 
    password: passwordInput
  }

  function handleLogin(e){
    e.preventDefault()
   
    fetch('http://localhost:3000/api/v1/login', {
       method: "POST", 
       headers:{
           "Content-Type": "Application/json"
       },
        body: JSON.stringify({user: userLogin})
   })
   .then(r => r.json())
   .then(r => {
     
    if (r.user) {
      setIsLoggedIn(true)
      setUserPets({pets:[...r.user.pets]})
      setUserInfo(r.user)
      setUserItems({items:[...r.user.items]})
      const token = r.jwt
      localStorage.token=token
      history.push('/mypets')
    } else { 
      alert("No Matching User! Try Again.")
    }
  
    
    })

}

function handleSignup(){
  setShowCreateUser(prevState => !prevState)
}

    return (
    <div className="login">
    { showCreateUser ?  <Signup setUserInfo={setUserInfo} setIsLoggedIn={ setIsLoggedIn } setUserPets={ setUserPets } setUserItems={ setUserItems } handleSignup={handleSignup}/> :
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='purple' textAlign='center'>
             
          </Header>
          <Form size='large' onSubmit={handleLogin}>
            <Segment stacked>
              <Form.Input 
              fluid 
              icon='user' 
              iconPosition='left' 
              placeholder='Username'
              onChange={e => setUserNameInput(e.target.value)}
              />

              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={e => setPasswordInput(e.target.value)}
              />
    
              <Button color='purple' fluid size='large' type='submit'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            <Button color='purple' fluid size='large' onClick={handleSignup}> N00b? Sign up here!</Button>
          </Message>
        </Grid.Column>
       </Grid>
        }
       
     </div>
    )
}

export default Login