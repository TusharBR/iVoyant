import  { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Hod from "./components/Hod";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Main from "./components/Main";
import Createhod  from "./components/Createhod";

const App=() => {
  const [permisson, setpermisson] = useState<boolean>(false)
  function checking(pass:boolean)
  {
    setpermisson(pass)
  }
  return (

    <Router>
       <Navbar/>
      <Routes>
       
      <Route  path="/"  element={<Login checking={checking}/>} />
      <Route  path="/hod"  element={<Hod/>} />
      <Route  path="/create"  element={<Create/>} />
      <Route  path="/main"  element={<Main/>} />
      <Route  path="/createhod"  element={<Createhod/>} />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;






