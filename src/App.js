import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import NavBar from './components/NavBar';
import Footer from './components/Footer';


const useStyles = makeStyles(theme => ({
  container: {
    height: 'calc(100vh - 64px)',
    marginTop: 64,
    background: 'black',
    color: 'white'
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
        <div className={classes.container}></div>
      <Footer />
    </div>
  );
}






















/* import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */