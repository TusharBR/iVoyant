import Profile1 from "./components/Firstchild"
import "./App.css"

function App() {

  return (
    <><h1 >Student Details</h1>
       <Profile1 title="Deepak" age={19} city="Ranebennur" study="cse"/>
       <Profile1 title="Pranav" age={21} city="Bangalore" study="ise"/>
       <Profile1 title="Vishal" age={20} city="shivamogga" study="civ"/>
       <Profile1 title="Mamta" age={22} city="davangere" study="ece"/>
       <Profile1 title="Umesh" age={29} city="Ranebennur" study="ise"/>
       <Profile1 title="Kruti" age={21} city="shivamogga" study="ece"/>
    </>
  )
}

export default App
