import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../NavBar';

function Stat(){
    return (
        <div>
          <Navbar />
          <h1 style={{padding:60,}}>My Stats</h1>

        </div>
      );
}
export default Stat