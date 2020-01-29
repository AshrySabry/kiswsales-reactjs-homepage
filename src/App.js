import React from 'react';
import { createMuiTheme, ThemeProvider,makeStyles } from '@material-ui/core/styles';
import './App.css';
import NavBar from './components/NavBar';
import SimpleCard from './components/SimpleCard';

//import { Container, Grid } from '@material-ui/core';

const theme = createMuiTheme();

theme.typography.h5 = {
  fontSize: '0.8rem',
  '@media (min-width:600px)': {
    fontSize: '1.0rem',
    fontFamily: 'Arial',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};

function App() {
  return (
      <div className= "bg" >
        <NavBar />
        <SimpleCard />
      </div>
  );
}

export default App;
