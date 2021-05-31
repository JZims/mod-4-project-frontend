import React, { useState } from 'react'
import Signup from './Signup'
import { Link, useHistory } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'



function Login({setUserData, setIsLoggedIn}) {
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
    localStorage.token = r.jwt
    
    if (r.user) {
      setIsLoggedIn(prevState => !prevState)
    } else { 
      alert("No Matching User! Try Again.")
      
    }
    setUserData(r.user)
    history.push('/mypets')
    })

}

function handleSignup(){
  setShowCreateUser(prevState => !prevState)
}

    return (
    <>
    { showCreateUser ?  <Signup setUserData={setUserData} handleSignup={handleSignup}/> :
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='green' textAlign='center'>
             Log-in to your account
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
    
              <Button color='green' fluid size='large' type='submit'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            <Button color='green' fluid size='large' onClick={handleSignup}> New to us? Sign up here!</Button>
          </Message>
        </Grid.Column>
       </Grid>
        }
       
     </>
    )
}

export default Login