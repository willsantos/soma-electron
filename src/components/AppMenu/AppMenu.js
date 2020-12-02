import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  makeStyles,
  IconButton,

} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) =>({
  grow:{
    flexGrow:1
  }
}));



const AppMenu = () =>{
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" >
          Empreendedor Digital
        </Typography>
        <div className={classes.grow}/>
        <Button color="inherit">Login</Button>
        
      </Toolbar>
    </AppBar>
  )
}

export default AppMenu;