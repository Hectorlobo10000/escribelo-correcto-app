import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    scrollBehavior: 'smooth',
  },
  container: {
    /* height: 'calc(100vh - 64px)', */
    height: '100vh',
    /* marginTop: 64, */
    marginTop: 0,
    paddingTop: 80,
    background: 'black',
    opacity: 0.3,
    color: 'white',
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <NavBar />
        <div className={classes.container}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
