import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input';
import { useState } from 'react';

const Auth = () => {

  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);

  // const isSignUp = false;

  const handleSybmit = (e) =>{
      e.preventDefault();
  }

  const handleChange =()=>{

  }

  const switchMode = () =>{
    setIsSignUp((prevState)=> !prevState)
  }

  return (
    <Container component="main" maxWidth="xs"> 
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'> {isSignUp ? 'SignUp' : 'SignIn'} </Typography>
        <form className={classes.form} onSubmit={handleSybmit} >
          <Grid container spacing={2} >
            {
              isSignUp &&(
              <>
                {/* <TextField label="first Name" name="firstname" handleChange={handleChange} autoFocus xs={6}  />   */}
                <Input label="first Name" name="firstName" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} />
             { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
           <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignUp ? 'Sign Up' : 'Sign In' }
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth