import React from 'react';
import { createMuiTheme, ThemeProvider,makeStyles } from '@material-ui/core/styles';
import './App.css';
import NavBar from './components/NavBar';
import SimpleCard from './components/SimpleCard';

//import { Container, Grid } from '@material-ui/core';

function App() {
  return (
      <div className= "bg" >
        <NavBar />
        <SimpleCard />
      </div>
  );
}

export default App;
