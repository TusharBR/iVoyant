import Firstchild from "./components/Firstchild"
import Secondchild from "./components/Secondchild"
import Thirdchild from "./components/Thirdchild"


function App() {
  const myfunc = (mes:string) => {
    alert(mes);
};

  return (
    <><h1 >Props Drilling (Function)</h1>
    <div className="maindiv" style={{display:"flex",justifyContent:"space-evenly"}}>
       <Firstchild myfunc={myfunc}/>
       <Secondchild myfunc={myfunc}/>
       <Thirdchild myfunc={myfunc}/>
       </div>
    </>
  )
}

export default App
