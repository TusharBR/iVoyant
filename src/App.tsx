import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Library from "./components/Library";
import Cse from "./components/Cse";
import Ise from "./components/Ise";
import Login from "./components/Login";

const App=() => {
  const [permisson, setpermisson] = useState<boolean>(false)
  function checking(pass:boolean)
  {
    setpermisson(pass)
  }
  return (

    <Router>
      <Routes>
      <Route  path="/"  element={<Login checking={checking}/>} />
        <Route path="/home" element={permisson ? <Home /> : <Navigate to="/" />} />
        <Route path="/about" element={permisson ? <About /> : <Navigate to="/" />} />
        <Route path="/library" element={permisson ? <Library /> : <Navigate to="/" />}/>
        
          <Route path="/cse" element={permisson ? <Cse /> : <Navigate to="/" />}/>
          <Route path="/ise"element={permisson ? <Ise /> : <Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;






