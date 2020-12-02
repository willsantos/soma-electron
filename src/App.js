import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import './App.css';
import {Route, Switch, HashRouter as Router} from 'react-router-dom';
import AppMenu from './components/AppMenu';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import ClientsPage from './pages/ClientsPage';

const theme = createMuiTheme({
  palette:{
    primary:{
      /* main:'#004d40' */
      main: '#4e342e'
    },
    secondary:{
      main:'#004d40'
    }
  },
  typography:{
    fontSize:20
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppMenu/>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/clients" component={ClientsPage}/>
        </Switch>
      </Router>

      

    </ThemeProvider>
  );
}

export default App;
