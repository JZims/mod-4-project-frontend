import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Signup from './Signup'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

function Login() {
  const[userNameInput, setUserNameInput] = useState("")
  const[passwordInput, setPasswordInput] = useState("")

  function handleLogin(e){
    e.preventDefault()
   
    fetch('http://localhost:3000/api/v1/login', {
       method: "POST", 
       headers:{
           "Content-Type": "Application/json"
       },
        body: JSON.stringify({})
   })
   .then(r => r.json())
   .then(r => console.log(r))
}

    return (
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
            <Link to="/signup">New to us? Sign up here!</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
}

export default Login