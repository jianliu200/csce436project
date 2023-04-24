import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './NavBar';
import Library from './pages/Library';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Stat from './pages/Stat';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Library" element={<Library />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Stat" element={<Stat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
