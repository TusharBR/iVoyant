import Firstchild from "./components/Firstchild"

function App() {

  return (
    <><h1>Props Drilling</h1>
       <Firstchild name="Deepak" age={27} city="Navi Mumbai" company="Tata"/>
    </>
  )
}

export default App
