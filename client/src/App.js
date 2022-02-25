import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts.jsx'
import Form from './components/Form/Form.jsx'
import useStyles from './styles'
import {getPosts} from './actions/posts'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [currentId, setCurrentId] = useState(null);

  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

  return (
    <Container maxWidth ='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h4' align='center' > Blogger </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
