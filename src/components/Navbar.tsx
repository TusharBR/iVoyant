import "./navbar.css"

 const Navbar=()=> {
  return (
    <>
    <div className="mainnav" >
            <li ><ol className="ollogo" >Logo</ol></li>
            <li className='fouropt'>
              <ol className="ollist">Home</ol>
            <ol className="ollist">About us</ol>
            <ol className="ollist">Notification</ol>
            <ol className="ollist">Logout</ol>
            </li>
    </div>
    </>
  )
}
export default Navbar
