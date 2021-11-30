import React from 'react';
import './App.css';
import useToken from "./utils/useToken";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from "./components/Login/Login";


function App() {

  const { token, setToken } = useToken();

  const handleLogout = () => {
    
    localStorage.removeItem('token');
  }

  //if (!token) return (<Login setToken={setToken} />);

  return (
    <div className="wrapper">

      <h1>Application</h1>

      <BrowserRouter>

        <Navbar token={token} handleLogout={handleLogout} />
      
        {(!token) && <Login setToken={setToken} />}
        
        {(token) && <Routes >
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/preferences" element={<Preferences />} />
                    </Routes>}

      </BrowserRouter>
    </div>
  );

  
}

export default App;