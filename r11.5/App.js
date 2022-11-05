import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "./users/01";
import Logout from "./users/01-1";
import Regist from "./users/01-2";
import Forget from "./users/01-4";
function App() {
  return (
    <Routes>
      <Route path='/' element= {<Login/>}/>
          <Route path='/01-1' element={<Logout/>}/>
          <Route path='/01-2' element={<Regist/>}/>
          <Route path='/01-4' element={<Forget/>}/>
        </Routes>
  )
}

export default App;
