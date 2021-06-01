import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'


function Signup({ setUserPets, setUserInfo, setUserItems, handleSignup, setIsLoggedIn }) {

    const [newUserName, setNewUserName] = useState("")
    const [newUserPassword, setNewUserPassword] = useState("")
    const [newUserBio, setNewUserBio] = useState("")
    const [newUserImage, setNewUserImage] = useState("")

    const history = useHistory()
    
    const newUserObj = {
        username: newUserName, 
        password: newUserPassword, 
        bio: newUserBio,
        image: newUserImage, 
        currency: 1200
    }

    function handleNewUser(e){
        e.preventDefault()
       
        fetch('http://localhost:3000/api/v1/users', {
           method: "POST", 
           headers:{
               "Content-Type": "Application/json"
           },
            body: JSON.stringify({user: newUserObj})
       })
       .then(r => r.json())
       .then(r => {
        if (r.user) {
          setIsLoggedIn(prevState => !prevState)
          setUserPets({pets:[...r.user.pets]})
          setUserInfo(r.user)
          setUserItems({items:[...r.user.items]})
          const token = r.jwt
          localStorage.setItem=(token)
          history.push('/mypets')
        } else { 
            alert("Something went wrong. Please try again")
        }

    }
  )
}


    return (
        <div>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='green' textAlign='center'>
             Create your Account
          </Header>
          <Form size='large' onSubmit={handleNewUser}>
            <Segment stacked>
              <Form.Input 
              fluid 
              required
              maxLength="20" 
              icon='user' 
              iconPosition='left' 
              placeholder='Username' 
              name='username'
              onChange={e => setNewUserName(e.target.value)}
              />

              <Form.Input
                fluid
                required
                maxLength="14"
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name='password'
                onChange={e => setNewUserPassword(e.target.value)} 
              />

              <Form.Input 
              fluid 
              required 
              maxLength="120" 
              icon='beer' 
              iconPosition='left' 
              placeholder='A Little Bit About Yourself' 
              name='bio'
              onChange={e => setNewUserBio(e.target.value)}
              />

              <Form.Input 
              fluid 
              required 
              icon='camera retro' 
              iconPosition='left' 
              placeholder='Provide an Image URL of Your Choice' 
              name='image'
              onChange={e => setNewUserImage(e.target.value)}
              />
    
              <Button color='green' fluid size='large' type='submit'>
                Submit
              </Button>
              <Button color='green' fluid size='large' onClick={handleSignup}>
                Back to Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
        </div>
    )
}


export default Signup