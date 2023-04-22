import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar';
import Library from './pages/Library';
import Profile from './pages/Profile';
import Search from './pages/Search';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search></Search>
        <Profile/>
        <Library/>
      </header>
    </div>
  );
}

export default App;
