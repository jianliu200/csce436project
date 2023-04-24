import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar/NavBar";
import { Routes, Route } from 'react-router-dom'
import Library from './pages/Library';
import Profile from './pages/Profile';
import Search from './pages/Search';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar></Navbar> */}
        <Profile/>
      </header>
    </div>
  );
}

export default App;
