import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../NavBar';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{padding:60,}}>My Profile</h1>

      <div style={{ backgroundColor: '#F6F6F6', borderRadius: '12px', padding: '24px', boxShadow: '0px 0px 12px #BDBDBD', }}>
        <h1 style={{ fontSize: '32px', margin: '0',color: "black" }}>First Name: John</h1>
        <h1 style={{ fontSize: '32px', margin: '0',color:"black" }}>Last Name: Doe</h1>
        <p style={{ fontSize: '16px', color: '#666', margin: '8px 0 0 0' }}>JohnDoe@email.com</p>
      </div>
    </div>
  );
};

export default Profile;
