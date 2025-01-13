import "../styles/Searchbar.css"

const Searchbar:React.FC=()=> {
  return (
    <div className="searchdiv">
        <input type="text" className="searchbar"/>
        <button className="Searchbtn">Click</button>
    </div>
    

  )
}
export default Searchbar