import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AppContext, socket } from './context/appContext';
import './App.css';

function App() {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState([]);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateMembersMsg, setPrivateMemberMsg] = useState({});
  const [newMessages, setNewMessages] = useState({});
  const user = useSelector((state) => state.user);
  return (
    <AppContext.Provider
      value={{
        socket,
        currentRoom,
        setCurrentRoom,
        members,
        setMembers,
        messages,
        setMessages,
        privateMembersMsg,
        setPrivateMemberMsg,
        rooms,
        setRooms,
        newMessages,
        setNewMessages,
      }}
    >
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {!user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
