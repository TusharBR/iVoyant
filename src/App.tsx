import './App.css'
import Navbar from './components/Navbar'
import Accordian from './components/Accordian'

function App() {
const title={init:"br"}
  return (
    <>
      <Navbar />
      <Accordian title={title}/>
    </>
  )
}

export default App