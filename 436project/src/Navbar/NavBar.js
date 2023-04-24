import React from 'react'
import Library from '../pages/Library'
import Search from '../pages/Search'
import Profile from '../pages/Profile'

import {Outlet,Link,Routes, Route} from "react-router-dom"

function Navbar(){
    

return(
    <>
    <nav class = "bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Library">Artist</Link>
          </li>
          <li>
            <Link to="/Profile">Album</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    <Routes>
        <Route exact path ="/Search" element={<Search/>}></Route>
        <Route exact path ="/Library" element={<Library/>}></Route>
        <Route exact path ="/Profile" element={<Profile/>}></Route>
    </Routes>
    <div>Howdy</div></>
)

}
export default Navbar