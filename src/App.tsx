import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Adminlogin from './components/Adminlogin';
import Customermp from "./components/Customermp"
import Adminmp from "./components/Adminmp"
function App() {
  return (
    <>
     <Router>
       <Navbar/>
      <Routes>
       
      <Route  path="/"  element={<Login />} />
      <Route  path="/admin"  element={<Adminlogin/>} />
      <Route  path="/Customermp"  element={<Customermp/>} />
      <Route  path="/Adminmp"  element={<Adminmp/>} />
     {/*  <Route  path="/main"  element={<Main/>} />
      <Route  path="/createhod"  element={<Createhod/>} /> */}
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
