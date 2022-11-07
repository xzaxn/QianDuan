import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "./users/01";
import Logout from "./users/01-1";
import Regist from "./users/01-2";
import FindPassword from "./users/01-4";
import MessagePage from "./chats/MessagePage";
import ChatPage from "./chats/ChatPage";
function App() {
  return (
    <Routes>
      <Route path='/' element= {<Login/>}/>
          <Route path='/01-1' element={<Logout/>}/>
          <Route path='/01-2' element={<Regist/>}/>
          <Route path='/01-4' element={<FindPassword/>}/>
          <Route path='/MessagePage' element={<MessagePage/>}/>
          <Route path='/ChatPage' element={<ChatPage/>}/>
        </Routes>
  )
}

export default App;
