import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import "./App.css"

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login onLogin={(newToken: React.SetStateAction<string | null>) => setToken(newToken)} />} />
        <Route path="/dashboard" element={token ? <Dashboard onLogout={() => setToken(null)} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;