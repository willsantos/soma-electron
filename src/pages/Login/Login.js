import {
  Button,
  TextField,
  Box,
  Grid,
  makeStyles,

} from '@material-ui/core';
import { Redirect, Link } from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
  root:{
    padding:theme.spacing(15),
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center'
  }
})); 


const Login = () =>{
  const classes = useStyles();

  function handleLogin(){
    
    return (
      <Redirect
        to={{
          pathname: '/register',
        }}
      />
    );
  }


  return (
    <Box className={classes.root}>
      
      
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      >
        <Grid item><TextField label="username" margin="normal"  /></Grid>
        <Grid item><TextField label="password" type="password" margin="normal"/></Grid>
        <Grid item>
          
        </Grid>
        <Grid item padding={2}>
          <Link style={{ textDecoration: 'none' }} to="/clients" ><Button variant="outlined" color="primary" margin="normal" >Log In</Button></Link>
        </Grid>
      </Grid>
    </Box>


  );

}

export default Login;