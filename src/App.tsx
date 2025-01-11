import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      {/* <Accordian /> */}|
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>

    </>
  )
}

export default App