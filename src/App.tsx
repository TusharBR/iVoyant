
import { useContext } from 'react'
import './App.css'
import {first1} from "./components/Maincontainer"


function App() {
 const first = useContext(first1)

  return (
    <>
     {first}
    </>
  )
}

export default App
