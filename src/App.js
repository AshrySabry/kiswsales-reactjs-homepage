import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CenteredGrid from './components/CenteredGrid';

//import { Container, Grid } from '@material-ui/core';

function App() {
  return (
      <div className="bg" >
        <NavBar />
        <div className="tx">
          <h1 >
            Welcome to Kiswire Sales Web System
          </h1>
        </div>
      </div>
  );
}

export default App;
