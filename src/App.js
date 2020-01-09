import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    scrollBehavior: 'smooth',
  },
  container: {
    /* height: 'calc(100vh - 64px)', */
    height: '100vh',
    /* marginTop: 64, */
    marginTop: 0,
    paddingTop: 100,
    background: 'black',
    opacity: 0.3,
    color: 'white',
  },
});

export default function App() {
  const classes = useStyles();
  const counter = useSelector(state => state.counter);

  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.container}>
        <h3>Counter {counter}</h3>
      </div>
      <Footer />
    </div>
  );
}
